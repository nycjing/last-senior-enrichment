'use strict';

const Student = require('./student')
const Campus = require('./campus')
const Instructor= require('./instructor')

Student.belongsTo(Campus)
Instructor.belongsTo(Campus)

module.exports = {
    Student:Student,
    Campus:Campus,
    Instructor:Instructor
}
