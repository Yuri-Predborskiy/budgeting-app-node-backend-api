const { DataTypes} = require('sequelize');
const sequelize = require('../db');

const Currency = sequelize.define('currency', {
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  symbol: DataTypes.STRING
});

module.exports = Currency;
