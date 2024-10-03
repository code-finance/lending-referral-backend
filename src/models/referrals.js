module.exports = (sequelize, Sequelize) => {
  const Referrals = sequelize.define('referrals', {
    wallet: {
      type: Sequelize.STRING,
      primaryKey: true,
    },
    myCode: {
      type: Sequelize.STRING,
    },
    rewards: {
      type: Sequelize.BIGINT,
    },
    referral: {
      type: Sequelize.BIGINT,
    },
    lending: {
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

  Referrals.findByMyCode = async function (myCode) {
    const options = {where: {myCode}};
    return await this.findOne(options);
  };

  Referrals.findByMyReferral = async function (myReferral) {
    const options = {where: {myReferral}};
    console.log('===========', options);
    return await this.findAll(options);
  };

  Referrals.getTop = async function (num) {
    const options = {order: [['rewards', 'DESC']], limit: num};
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

  Referrals.salePointsHistoryByReferralCode = async function (myReferral, points) {
    let options = {where: {myReferral}};
    options.include = [{model: points}];
    options.attributes = {
      include: [
        [
          sequelize.literal(
            `(select count(*)
                            from "points"
                            where "wallet" = "referrals".wallet
                            )`,
          ),
          'soldAmount',
        ],
      ],
    };
    return await this.findAll(options);
  };

  return Referrals;
};
