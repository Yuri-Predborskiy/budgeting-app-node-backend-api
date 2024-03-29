const { DataTypes } = require('sequelize');

const sequelize = require('../db');
const Account = require('./account.model');
const ExpenseCategory = require('./expense-category.model');

const ExpenseModel = sequelize.define('expense', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Account,
      key: 'id'
    }
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: DataTypes.STRING,
  categoryName: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: ExpenseCategory,
      key: 'name'
    }
  }
});

ExpenseModel.belongsTo(Account, {
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  allowNull: false
});

ExpenseModel.hasOne(ExpenseCategory, {
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
  allowNull: false
});

module.exports = ExpenseModel;
