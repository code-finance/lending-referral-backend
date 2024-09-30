const {handlerError, handlerSuccess} = require('../utils/handler_response');
const models = require('../models');
const short = require('short-uuid');
const {ethers} = require('ethers');
const {ErrorMessage} = require('../utils/errorMessage');
const {validationResult} = require('express-validator');
const {_errorFormatter} = require('../utils/helper');
const {getKlaytnKmsWeb3} = require('../utils/awskms');
const erc20Abi = require('../config/abi/ERC20Token.json');
const {KDO} = require('../config/contracts');
const {BigNumber} = require('@ethersproject/bignumber');

async function transferKDO(to, amount) {
  let result = 1; // TODO test : this should be 0
  try {
    console.log(`!! Claim KDO to ${to} ${amount}`);
    const web3 = getKlaytnKmsWeb3();
    const accounts = await web3.eth.getAccounts();
    const kdoContract = new web3.eth.Contract(erc20Abi, KDO[process.env.CHAIN_ID]);

    let method = kdoContract.methods.balanceOf(accounts[0]);
    const balance = await method.call();
    console.log(`!! ${balance} KDO left in the wallet ${accounts[0]}`);

    if (BigNumber.from(balance).gt(ethers.parseEther(amount.toString()))) {
      // method = kdoContract.methods.transfer(amount, to);
      // const gasAmount = await method.estimateGas({from: accounts[0]}).catch((e) => {
      //   console.log('estimateGas error : ', e);
      // });
      // const receipt = await method
      //   .send({from: accounts[0], gas: gasAmount, value: 0})
      //   .on('error', (e) => {
      //     console.log('tx send error : ', e);
      //   })
      //   .catch((e) => {
      //     console.log('transfer error : ', e);
      //   });
      //
      // const txHash = receipt.transactionHash;
      // result = parseInt(receipt.result);
      // console.log('Claim result : ', txHash, result);
    } else {
      console.log('!! KDO balance is too low');
    }
  } catch (e) {
    console.log('!! Claim KDO failed : ', e);
  }
  return result;
}

module.exports = {
  claim: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        let errorMsg = _errorFormatter(errors.array());
        return handlerError(req, res, errorMsg);
      }

      const wallet = ethers.getAddress(req.params.wallet);
      if (wallet !== ethers.getAddress(req.body.walletAddress))
        return handlerError(req, res, ErrorMessage.ADDRESS_MISMATCH);

      let record = await models.referrals.findByWallet(wallet);
      if (!record) return handlerError(req, res, ErrorMessage.WALLET_NOT_FOUND);

      const result = await transferKDO(wallet, record.points);

      if (result) {
        record.points = 0;
        record.liquidity = 0;
        record.staking = 0;
        record.referral = 0;
        record = await record.save();
        return handlerSuccess(req, res, record);
      } else {
        return handlerError(req, res, 'claim KSO failed');
      }
    } catch (e) {
      console.log(e);
      return handlerError(req, res, e.message);
    }
  },
};
