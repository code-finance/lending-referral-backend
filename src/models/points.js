module.exports = (sequelize, Sequelize) => {
  const Points = sequelize.define('points', {
    id: {
      type: Sequelize.INTEGER,
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

  Points.findByWallet = async function (wallet, actionModel) {
    const options = {
      where: {wallet},
      include: {model: actionModel},
    };
    return await this.findAll(options);
  };

  return Points;
};
