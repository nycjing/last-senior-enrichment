'use strict';

const Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('campus', {

    name: {
        type: Sequelize.STRING,
        allowNull: false,
        set: function (val) {
            this.setDataValue('name', val.trim());
        }
    }

});