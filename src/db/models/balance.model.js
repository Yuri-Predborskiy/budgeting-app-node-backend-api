const { DataTypes} = require('sequelize');
const sequelize = require('../db');
const Account = require('./account.model');

// remainder for date
// should be no more than one per day
// used to check for inconsistencies, when expenses + incomes != remainder on account
const Balance = sequelize.define('balance', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: 'dateAccountIdUniqueKey',
  },
  accountId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: 'dateAccountIdUniqueKey',
    references: {
      model: Account,
      key: 'id',
    }
  },
  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

Balance.belongsTo(Account, {
  onDelete: 'CASCADE',
  allowNull: false
});

module.exports = Balance;
