'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Balance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Balance.belongsTo(models.Wallet, {
        foreignKey: 'walletId',
        onDelete: 'RESTRICT'
      });
    }
  };
  Balance.init({
    walletId: DataTypes.STRING,
    date: DataTypes.DATE,
    amount: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Balance',
  });
  return Balance;
};
