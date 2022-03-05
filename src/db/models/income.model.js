const { DataTypes } = require('sequelize');

const sequelize = require('../db');
const Account = require('./account.model');
const IncomeCategory = require('./income-category.model');

const IncomeModel = sequelize.define('income', {
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
      model: IncomeCategory,
      key: 'name'
    }
  }
});

IncomeModel.belongsTo(Account, {
  onUpdate: 'CASCADE',
  onDelete: 'CASCADE',
  allowNull: false
});

IncomeModel.hasOne(IncomeCategory, {
  onUpdate: 'CASCADE',
  onDelete: 'RESTRICT',
  allowNull: false
});

module.exports = IncomeModel;
