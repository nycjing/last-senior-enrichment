
const Sequelize = require('sequelize');
const pkg = require('../package.json');

const name = process.env.DATABASE_NAME || pkg.name;
const connectionString = process.env.DATABASE_connectionString || `postgres://localhost:5432/${pkg.name}`;



// create the database instance that can be used in other database files


// run our models file (makes all associations for our Sequelize objects)
require('./models')



var Promise = require('bluebird');

var db = require('./index')

var { Student, Campus, Instructor} = require('./models/index')

var data = {
    campuses: [
        {name: "Griffindor"},
        {name: "Ravenclaw"},
        {name: "Slytherin"},
        {name: "Hufflepuff"}
    ],
    students: [
        {name: "Harry Potter", gender: "Male", age: 13, email: "harrpotter@gmail.com", campusId:1},
        {name: "Hermione Granger", gender: "Female", age: 13, email: "hermionegranger@gmail.com", campusId:1},
        {name: "Ron Weasley", gender: "Male", age: 13, email: "ronweasley@gmail.com", campusId:1},
        {name: "Draco Malfoy", gender: "Male", age: 13, email: "dracomalfoy@gmail.com", campusId:3},
        {name: "Luna Lovegood", gender: "Female", age: 13, email: "luna@gmail.com", campusId:2},
        {name: "Cedric Diggory", gender: "Male", age: 13, email: "cedricdiggory@yahoo.com", campusId:4}
    ],
    instructors: [
        {name: "Albus Dumbledore", gender: "Male", age: 180, email: "albus@gmail.com", campusId:1},
        {name: "Minerva McGonagall", gender: "Female", age: 89, email: "minerva@gmail.com", campusId:1},
        {name: "Remus Lupin", gender: "Male", age: 43, email: "remus@gmail.com", campusId:2},
        {name: "Severus Snape", gender: "Male", age: 43, email: "snape@gmail.com", campusId:3},
    ]
};

db.sync({force: true})
    .then(function () {
        console.log("Dropped old data, now inserting data");

        const creatingCampuses = Promise.map(data.campuses, function (campus) {
            return Campus.create(campus);
        });

        const creatingStudents = Promise.map(data.students, function (student) {
            return Student.create(student);
        });
        const creatingInstructors = Promise.map(data.instructors, function (instructor) {
            return Instructor.create(instructor);
        });

        return Promise.all([creatingCampuses, creatingStudents , creatingInstructors ]);
    })
    .then(function () {
        console.log('Finished inserting data');
    })
    .catch(function (err) {
        console.error('There was totally a problem', err, err.stack);
    })
    .finally(function () {
        db.close(); // creates but does not return a promise
        return null; // stops bluebird from complaining about un-returned promise
    });

