'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'expense-categories', {
        name: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.STRING
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
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('expense-category');
  }
};
