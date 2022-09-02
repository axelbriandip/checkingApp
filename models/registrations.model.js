const { DataTypes } = require('sequelize');
const { database } = require('../utils/database.util');

const Registration = database.define('registration', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true // NO permite valores nulos
    },
    entranceTime: {
        type: DataTypes.STRING,
        allowNull: true // NO permite valores nulos
    },
    exitTime: {
        type: DataTypes.STRING,
        allowNull: true // NO permite valores nulos
    },
    status: {
        type: DataTypes.STRING,
        allowNull: true, // NO permite valores nulos
        defaultValue: 'working'
    }
})

module.exports = { Registration };