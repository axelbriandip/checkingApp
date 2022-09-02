const { database, DataTypes } = require('../utils/database.util');

const Registration = database.define('registrations', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false // NOT null values
    },
    entranceTime: {
        type: DataTypes.DATE,
        allowNull: false // NOT null values
    },
    exitTime: {
        type: DataTypes.DATE,
        allowNull: true // YES, can be null value
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false, // NOT null values
        defaultValue: "working"
    }
})

module.exports = { Registration };