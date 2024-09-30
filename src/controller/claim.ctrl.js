const {handlerError, handlerSuccess} = require('../utils/handler_response');
const models = require('../models');
const short = require('short-uuid');
const {ethers} = require('ethers');
const {ErrorMessage} = require('../utils/errorMessage');
const {validationResult} = require('express-validator');
const {_errorFormatter} = require('../utils/helper');
const erc20Abi = require('../config/abi/ERC20Token.json');
const {TAL} = require('../config/contracts');
const {BigNumber} = require('@ethersproject/bignumber');
const {getWeb3} = require('../utils/awskms');

const isEVM = (chainId) => {
  return chainId === 1 || chainId === 11155111 || chainId === 8217 || chainId === 1001;
};

async function claimReward(to, amount, chainId) {
  let result = 1; // TODO test : this should be 0
  try {
    console.log('!! Claim Reward : ', to, amount, chainId);
    if (isEVM(chainId)) {
      const web3 = getWeb3(chainId);
      const accounts = await web3.eth.getAccounts();
      const talContract = new web3.eth.Contract(erc20Abi, TAL[chainId]);

      let method = talContract.methods.balanceOf(accounts[0]);
      const balance = await method.call();
      console.log(`!! ${balance} KDO left in the wallet ${accounts[0]}`);

      if (BigNumber.from(balance).gt(ethers.parseEther(amount.toString()))) {
        // method = talContract.methods.transfer(amount, to);
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
    } else {
      // TON chain
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

      const chainId = req.body.chainId;

      let record = await models.referrals.findByWallet(wallet);
      if (!record) return handlerError(req, res, ErrorMessage.WALLET_NOT_FOUND);

      const result = await claimReward(wallet, record.points, chainId);

      if (result) {
        record.points = 0;
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
