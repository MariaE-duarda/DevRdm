const Sequelize = require('sequelize');
const database = require('../db');

const Perfil = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }, 

    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },

    numberPhone: {
        type: Sequelize.STRING,
        allowNull: false
    },

    login: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Perfil;