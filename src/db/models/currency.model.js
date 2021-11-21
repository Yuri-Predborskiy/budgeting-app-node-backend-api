const { DataTypes} = require('sequelize');
const sequelize = require('../db');
// const Account = require('./account.model');

const Currency = sequelize.define('currency', {
  code: {
    type: DataTypes.STRING(3),
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  symbol: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// todo: check if options are necessary
// Currency.belongsTo(Account);

module.exports = Currency;
