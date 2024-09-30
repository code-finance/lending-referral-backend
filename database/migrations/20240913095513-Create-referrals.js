'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('referrals', {
      wallet: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      myCode: {
        type: Sequelize.STRING,
      },
      points: {
        type: Sequelize.BIGINT,
      },
      referral: {
        type: Sequelize.BIGINT,
      },
      myReferral: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('referrals');
  },
};
