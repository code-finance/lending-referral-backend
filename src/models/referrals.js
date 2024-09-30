module.exports = (sequelize, Sequelize) => {
  const Referrals = sequelize.define('referrals', {
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

  Referrals.findByWallet = async function (wallet) {
    const options = {where: {wallet}};
    return await this.findOne(options);
  };

  Referrals.findByMyReferral = async function (myReferral) {
    const options = {where: {myReferral}};
    return await this.findAll(options);
  };

  Referrals.getTop = async function (num) {
    const options = {order: [['points', 'DESC']], limit: num};
    return await this.findAll(options);
  };

  Referrals.getReferralAmount = async function (wallet) {
    let options = {where: {wallet}};
    const record = await this.findOne(options);

    let amount = 0;
    if (record) {
      options = {where: {myReferral: record.myCode}};
      const users = await this.findAll(options);
      users.forEach((user) => {
        amount = amount + parseInt(user.liquidity) + parseInt(user.staking);
      });
    }
    return amount;
  };

  return Referrals;
};
