const Sequelize = require('sequelize');
const db = require('../util/database');
const Client = require('./client'); 
const Car = require('./car'); 

const Agency = db.define('agency', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    address: Sequelize.STRING, // Corrected typo in "address"
    phone: Sequelize.STRING,
    email: Sequelize.STRING
});

//Agency.hasMany(Car); // An agency can have many cars
//Agency.hasMany(Client); // An agency can have many clients

module.exports = Agency;
