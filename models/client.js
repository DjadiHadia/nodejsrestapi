const Sequelize = require('sequelize');
const db = require('../util/database');

const Client = db.define('client', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: Sequelize.STRING,
    address: Sequelize.STRING,
    phone: Sequelize.STRING,
    email: Sequelize.STRING
});

module.exports = Client;
