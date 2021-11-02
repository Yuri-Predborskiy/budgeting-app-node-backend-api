const { DataTypes} = require('sequelize');
const sequelize = require('../db');

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
    type: DataTypes.ENUM('cash', 'creditCard'),
    allowNull: false,
  },
  currencyCode: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
});

module.exports = Account;
