const { database, DataTypes } = require('../utils/database.util');

const Registration = database.define('registrations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // NO permite valores nulos
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false // NO permite valores nulos
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true // SI permite valores nulos
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false, // NO permite valores nulos
        defaultValue: "working"
    }
})

module.exports = { Registration };