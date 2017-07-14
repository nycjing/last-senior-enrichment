'use strict';

const Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('student', {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        set: function (val) {
            this.setDataValue('name', val.trim());
        }
    },
    gender: {
        type: Sequelize.ENUM('Male', 'Female')
    },
    age: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true,
        }
    }
});