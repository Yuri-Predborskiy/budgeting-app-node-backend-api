const { DataTypes} = require('sequelize');
const sequelize = require('../db');
const Balance = require('./balance.model');
const Currency = require('./currency.model');
const accountTypes = require('../../enums/account-types');

const Account = sequelize.define('account', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  type: {
    type: DataTypes.ENUM(accountTypes),
    allowNull: false,
  },
  currencyCode: {
    type: DataTypes.STRING(3),
    allowNull: false,
    references: {
      model: Currency,
      key: 'code'
    }
  }
});

// todo: resolve cyclic dependency (account has currency, currency belongs to account, import cycle)
Account.hasOne(Currency, {
  onDelete: 'RESTRICT',
  allowNull: false
});

// todo: resolve cyclic dependency (problem for all sequelize foreign keys?)
// todo: check onDelete conditions, it should delete balances when deleting account
Account.hasMany(Balance, {
  onDelete: 'CASCADE',
  allowNull: false
});

module.exports = Account;
