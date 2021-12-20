const { DataTypes} = require('sequelize');
const sequelize = require('../db');

const ExpenseCategory = sequelize.define('expense-category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  description: DataTypes.STRING,
  // add field to store link to icon? svg?
});

module.exports = ExpenseCategory;
