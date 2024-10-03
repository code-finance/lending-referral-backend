const {handlerError, handlerSuccess} = require('../utils/handler_response');
const models = require('../models');
const short = require('short-uuid');
const {ethers} = require('ethers');
const {ErrorMessage} = require('../utils/errorMessage');
const {validationResult} = require('express-validator');
const {_errorFormatter} = require('../utils/helper');

module.exports = {
  getReferral: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let errorMsg = _errorFormatter(errors.array());
        return handlerError(req, res, errorMsg);
      }

      const wallet = ethers.getAddress(req.params.wallet);

      let record = await models.referrals.findByWallet(wallet);
      if (!record) return handlerError(req, res, ErrorMessage.WALLET_NOT_FOUND);

      return handlerSuccess(req, res, record);
    } catch (e) {
      console.log(e);
      return handlerError(req, res, e.message);
    }
  },
  getReferrals: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let errorMsg = _errorFormatter(errors.array());
        return handlerError(req, res, errorMsg);
      }

      const wallet = ethers.getAddress(req.params.wallet);

      let record = await models.referrals.findByWallet(wallet);
      if (!record) return handlerError(req, res, ErrorMessage.WALLET_NOT_FOUND);

      let records = await models.referrals.findByMyReferral(record.myCode);
      if (records.length === 0) return handlerError(req, res, ErrorMessage.REFERRALS_NOT_FOUND);

      return handlerSuccess(req, res, records);
    } catch (e) {
      console.log(e);
      return handlerError(req, res, e.message);
    }
  },
  getDetails: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let errorMsg = _errorFormatter(errors.array());
        return handlerError(req, res, errorMsg);
      }

      const wallet = ethers.getAddress(req.params.wallet);

      let record = await models.referrals.findByWallet(wallet);
      if (!record) return handlerError(req, res, ErrorMessage.WALLET_NOT_FOUND);

      const records = await models.referrals.salePointsHistoryByReferralCode(
        record.myCode,
        models.points,
      );
      if (records.length === 0)
        return handlerError(req, res, ErrorMessage.REFERRAL_DETAILS_NOT_FOUND);

      return handlerSuccess(req, res, records);
    } catch (e) {
      console.log(e);
      return handlerError(req, res, e.message);
    }
  },
  register: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let errorMsg = _errorFormatter(errors.array());
        return handlerError(req, res, errorMsg);
      }

      const wallet = ethers.getAddress(req.params.wallet);
      if (wallet !== ethers.getAddress(req.body.walletAddress))
        return handlerError(req, res, ErrorMessage.ADDRESS_MISMATCH);

      const myReferral = req.body.myReferral ?? null;

      let record = await models.referrals.findByWallet(wallet);

      if (!record) {
        const myCode = short.generate();
        // TODO : need to check duplicate myCode ?
        record = new models.referrals({
          wallet,
          myCode,
          rewards: 0,
          referral: 0,
          lending: 0,
          myReferral,
        });
        await record.save();
        return handlerSuccess(req, res, record);
      } else {
        return handlerError(req, res, 'already registered');
      }
    } catch (e) {
      console.log(e);
      return handlerError(req, res, e.message);
    }
  },
  setReferral: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let errorMsg = _errorFormatter(errors.array());
        return handlerError(req, res, errorMsg);
      }

      const wallet = ethers.getAddress(req.params.wallet);
      if (wallet !== ethers.getAddress(req.body.walletAddress))
        return handlerError(req, res, ErrorMessage.ADDRESS_MISMATCH);

      const myReferral = req.body.myReferral;
      let friend = await models.referrals.findByMyCode(myReferral);
      if (!friend) return handlerError(req, res, ErrorMessage.INVALID_REFERRAL_CODE);

      let record = await models.referrals.findByWallet(wallet);
      if (!record) return handlerError(req, res, ErrorMessage.WALLET_NOT_FOUND);

      if (record.myReferral === null || record.myReferral.length === 0) {
        record.myReferral = myReferral;
        record = await record.save();
        return handlerSuccess(req, res, record);
      } else {
        return handlerError(req, res, ErrorMessage.REFERRAL_ALREADY_SET);
      }
    } catch (e) {
      console.log(e);
      return handlerError(req, res, e.message);
    }
  },
  getTop: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let errorMsg = _errorFormatter(errors.array());
        return handlerError(req, res, errorMsg);
      }

      const num = req.params.num ?? 100;
      let record = await models.referrals.getTop(num);
      if (!record) return handlerError(req, res, ErrorMessage.NO_WALLETS);

      return handlerSuccess(req, res, record);
    } catch (e) {
      console.log(e);
      return handlerError(req, res, e.message);
    }
  },
};
