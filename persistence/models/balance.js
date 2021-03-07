const { DataTypes} = require('sequelize');
const sequelize = require('../db');
const Account = require('./account');

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
    type: DataTypes.UUID,
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
  onDelete: 'RESTRICT',
  allowNull: false
});

module.exports = Balance;
