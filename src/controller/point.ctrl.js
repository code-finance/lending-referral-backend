const {handlerError, handlerSuccess} = require('../utils/handler_response');
const models = require('../models');
const {ethers} = require('ethers');
const {ErrorMessage} = require('../utils/errorMessage');
const {referral} = require('../validators/referral.validator');
const {validationResult} = require('express-validator');
const {_errorFormatter} = require('../utils/helper');

module.exports = {
  getPoints: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let errorMsg = _errorFormatter(errors.array());
        return handlerError(req, res, errorMsg);
      }

      const wallet = ethers.getAddress(req.params.wallet);

      let records = await models.points.findByWallet(wallet, models.actions);

      return handlerSuccess(req, res, records);
    } catch (e) {
      console.log(e);
      return handlerError(req, res, e.message);
    }
  },
  addPoint: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let errorMsg = _errorFormatter(errors.array());
        return handlerError(req, res, errorMsg);
      }

      const wallet = ethers.getAddress(req.params.wallet);
      if (wallet !== ethers.getAddress(req.body.walletAddress))
        return handlerError(req, res, ErrorMessage.ADDRESS_MISMATCH);
      const point = req.body.point;
      const actionId = req.body.actionId;

      let referral = await models.referrals.findByWallet(wallet);
      if (!referral) return handlerError(req, res, ErrorMessage.WALLET_NOT_FOUND);

      let record = new models.points({wallet, point, actionId});
      record = await record.save();

      referral.points = parseInt(referral.points) + parseInt(point);
      switch (actionId) {
        case '1':
          referral.referral = parseInt(referral.referral) + parseInt(point);
          break;
        case '2':
          referral.liquidity = parseInt(referral.liquidity) + parseInt(point);
          break;
        case '3':
          referral.staking = parseInt(referral.staking) + parseInt(point);
          break;
        default:
          return handlerError(req, res, ErrorMessage.INVALID_ACTION_ID);
      }
      await referral.save();

      return handlerSuccess(req, res, record);
    } catch (e) {
      console.log(e);
      return handlerError(req, res, e.message);
    }
  },
};
