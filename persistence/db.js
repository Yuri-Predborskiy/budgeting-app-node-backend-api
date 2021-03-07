const { Sequelize } = require('sequelize');
const dbConfig = require('./config');

const sequelize = new Sequelize(dbConfig[process.env.NODE_ENV]);

module.exports = sequelize;
