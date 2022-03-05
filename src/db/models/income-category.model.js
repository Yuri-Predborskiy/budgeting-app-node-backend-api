const { DataTypes} = require('sequelize');
const sequelize = require('../db');

const IncomeCategory = sequelize.define('income-category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  description: DataTypes.STRING,
  // add field to store link to icon? svg?
});

module.exports = IncomeCategory;
