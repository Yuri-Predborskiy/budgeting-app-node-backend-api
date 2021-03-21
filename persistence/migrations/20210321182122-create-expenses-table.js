'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'expenses', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        date: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        accountId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE',
          references: {
            model: 'accounts',
            key: 'id',
            as: 'accountId',
          },
        },
        amount: {
          allowNull: false,
          type: Sequelize.FLOAT
        },
        category: {
          allowNull: false,
          type: Sequelize.STRING,
          references: {
            model: 'categories',
            key: 'name'
          },
          onUpdate: 'CASCADE',
          onDelete:  'RESTRICT',
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('expenses');
  }
};
