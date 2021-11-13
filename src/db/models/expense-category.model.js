const { DataTypes} = require('sequelize');
const sequelize = require('../db');
const Expense = require('./expense.model');

const Category = sequelize.define('expense_category', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: DataTypes.STRING,
  // icon?
});

// todo: check if options are necessary
Category.belongsTo(Expense);

module.exports = Category;
