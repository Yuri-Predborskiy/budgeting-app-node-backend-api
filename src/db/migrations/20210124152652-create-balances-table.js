'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'balances', {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
        },
        accountId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: 'RESTRICT',
          onUpdate: 'CASCADE',
          references: {
            model: 'accounts',
            key: 'id',
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
      },
      {
        uniqueKeys: {
          dateAccountIdUniqueKey: {
            fields: ['accountId', 'date']
          }
        }
      }
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('balances');
  }
};
