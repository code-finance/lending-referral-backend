'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('points', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
      },
      wallet: {
        type: Sequelize.STRING,
      },
      market: {
        type: Sequelize.STRING,
      },
      asset: {
        type: Sequelize.STRING,
      },
      debt: {
        type: Sequelize.FLOAT,
      },
      apy: {
        type: Sequelize.FLOAT,
      },
      state: {
        type: Sequelize.STRING,
      },
      point: {
        type: Sequelize.BIGINT,
      },
      actionId: {
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable('points');
  },
};
