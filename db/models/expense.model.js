const { DataTypes } = require('sequelize');

const sequelize = require('../db');
const Account = require('./account.model');
const Category = require('./category.model');

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
  categoryId: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references: {
      model: Category,
      key: 'id'
    }
  }
});

ExpenseModel.belongsTo(Account, {
  onDelete: 'CASCADE',
  allowNull: false
});
ExpenseModel.hasOne(Category, {
  onDelete: 'RESTRICT',
  allowNull: false
})

module.exports = ExpenseModel;
