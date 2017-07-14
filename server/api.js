'use strict'
const api = require('express').Router()
const db = require('../db')
const {resolve} = require('path')
const Promise = require('bluebird')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
// I know this because we automatically send index.html for all requests that don't make sense in our backend.
// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))


var Student = db.models.student;
var Instructor = db.models.instructor;
var Campus = db.models.campus;

// /api

api.get('/', function (req, res, next) {
    // res.send('list student')

    Student.findAll({
        include: [
            {model: Campus}
        ]
    })
        .then(students => {
                res.json(students)
            })
        .catch(next);

});
//api/add
api.get('/add', function (req, res, next) {


    Campus.findAll({})
        .then(function (campuses) {
            // res.render('addstudent', {campuses: campuses});
            res.json(campuses)
        })
        .catch(next);
})

// /api
api.post('/', function (req, res, next) {
    var campusId= req.body.campus.split(',')[1];
    var member = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        gender: req.body.gender,
        campusId: +campusId
    }
    if (req.body.dbtable === 'student'){
    var newStudent = Student.build(req.body);
    console.log(newStudent);
    newStudent.save()
        .then(function () {
            res.send(200)
        })
        .catch(next)}
        else{

        var newInstructor = Instructor.build(req.body);
        console.log(newInstructor);
        newInstructor.save()
            .then(function () {
                res.send(200)
            })
            .catch(next)

    }
});

//api/:campusId

api.get('/:campusId', function (req, res, next) {

    var findCampus = Campus.findById(req.params.campusId);

    var findStudents = Student.findAll({
        where: {
            campusId: req.params.campusId
        }
    });

    var findInstructors = Instructor.findAll({
        where: {
            campusId: req.params.campusId
        }
    });

    Promise.all([findCampus, findStudents, findInstructors ])
        .spread(function (campus, students,instructors) {
            console.log(students,campus,instructors)
            // res.render('campuspage', {
            //     students: students,
            //     campus: campus,
            //     instructors:instructors
            // });
            res.json([students,campus,instructors])
        })
        .catch(next);

});


// /api/:studentId/delet
api.delete('/:studentId/delete', function (req, res, next) {
    console.log(req.params.studentId, typeof req.params.studentId)
    Student.destroy({
        where: {
            id: req.params.studentId
        }
    })
        .then(function () {
            res.send(200);
        })
        .catch(next);

});


module.exports = api

