const { Sequelize, DataTypes } = require('sequelize');

// establish connection to db
const database = new Sequelize({
    dialect: 'postgres',
    storage: 'localhost',
    username: 'postgres',
    password: 'melash18',
    port: 5432,
    database: 'checking',
    logging: false
})

module.exports = { database, DataTypes };