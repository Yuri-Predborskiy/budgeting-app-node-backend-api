'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'balances', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        accountId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: 'RESTRICT',
          onUpdate: 'CASCADE',
          references: {
            model: 'accounts',
            key: 'id',
            as: 'accountId',
          },
        },
        date: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        amount: {
          allowNull: false,
          type: Sequelize.FLOAT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        deletedAt: {
          type: Sequelize.DATE,
        }
      }
    );
    await queryInterface.addConstraint(
      'balances', {
        type: 'unique',
        fields: ['accountId', 'date'],
        name: 'dateAccountIdUniqueKey'
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('balances');
  }
};
