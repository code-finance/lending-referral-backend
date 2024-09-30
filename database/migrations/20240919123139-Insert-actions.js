'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const records = [
      {id: 1, description: 'Referral', createdAt: new Date(), updatedAt: new Date()},
      {id: 2, description: 'Lending', createdAt: new Date(), updatedAt: new Date()},
    ];
    return queryInterface.bulkInsert('actions', records);
  },
};
