const Sequelize = require('sequelize');
const db = require('../util/database');
const Agency = require('./agency'); 

const Car = db.define('car', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    registration_number: Sequelize.STRING,
    brand: Sequelize.STRING,
    color: Sequelize.STRING,
    year: Sequelize.STRING,
    agencyId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Agency,
            key: 'id'
        }
    }
});

module.exports = Car;