'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Wallets', [
      {
        name: 'Yurii\'s PKO card',
        type: 'card',
        currency: 'PLN',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },
      {
        name: 'Yurii\'s PrivatBank card',
        type: 'card',
        currency: 'UAH',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      },      {
        name: 'Cash USD',
        type: 'cash',
        currency: 'USD',
        createdAt: Date.now(),
        updatedAt: Date.now(),
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Wallets', null, {});
  }
};
