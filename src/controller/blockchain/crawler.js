// const collectionRepository = require('../../repositories/collection_repository');
// const lastblockRepository = require('../../repositories/lastblock_repository');
// const tradeRepository = require('../../repositories/trade_repository');
// const {NftModel, SerialModel, TransactionModel, ListenerModel, TradeModel} = require('../../models');
// const BigNumber = require('bignumber.js');
// const consts = require('../../utils/consts');
//
// const {getCoinPrice, getWeb3ByChainName, getChainId, getMarketAddress, getMarketContract, getQuote} = require('../../utils/helper');
//
// // convert hex result to address
// function hexToAddress(hexVal) {
//     return '0x' + hexVal.substr(-40);
// }

// get events
const models = require('../../models');
const {getWeb3} = require('../../utils/helper');

const {BigNumber} = require('@ethersproject/bignumber');
const {types} = require('../../config/constants');

const testnet = [
  '0xb15782EFbC2034E366670599F3997f94c7333FF9', // KoKlay
  '0x5B5aC224BD23D2BfD02b5d9769e3EE388CAa41BD', // NodeManager
];

const mainnet = [
  '0xa1338309658d3da331c747518d0bb414031f22fd', // KoKlay
  '0xc47e3ca54250f70e658a2c07dead6ab85c395edb', // NodeManager
];

console.log('!! Target Network = ', process.env.TARGET_NETWORK);
const contracts = process.env.TARGET_NETWORK === '8217' ? mainnet : testnet;
console.log('!! Target Contracts = ', contracts);

async function parseSharesChanged(eventData) {
  try {
    const web3 = getWeb3();
    // StKlay Event : SharesChanged(address,uint256,uint256,uint256,uint8)
    if (
      eventData.topics[0] == '0x0e4033ca59159fed9e716efba93cc8fc4e08e122cce662e9449ef210cca29411'
    ) {
      const block = await web3.eth.getBlock(eventData.blockNumber);

      let contractAddress = eventData.address.toLowerCase();
      const data = web3.eth.abi.decodeParameters(
        ['uint256', 'uint256', 'uint256', 'uint8'],
        eventData.data,
      );

      let user = web3.eth.abi.decodeParameters(['address'], eventData.topics[1])[0];
      let prevShares = data[0];
      let shares = data[1];
      let amount = data[2];
      let changeType = data[3]; // 1 stake, 2 unstake, 3 cancel, 4 transfer
      console.log('!! SharesChanged : ', user, prevShares, shares, amount, changeType);

      let transactionHash = eventData.transactionHash;
      const lastHistory = await models.histories.findOne({
        where: {wallet: user},
        order: [['id', 'desc']],
      });
      let totalstake;
      if (lastHistory) {
        if (changeType === '1' || changeType === '3')
          totalstake = BigNumber.from(lastHistory.totalstake ?? '0')
            .add(BigNumber.from(amount))
            .toString();
        else if (changeType === '2')
          totalstake = BigNumber.from(lastHistory.totalstake ?? '0')
            .sub(BigNumber.from(amount))
            .toString();
        else if (changeType === '4') {
          if (BigNumber.from(prevShares).gt(BigNumber.from(shares)))
            totalstake = BigNumber.from(lastHistory.totalstake ?? '0')
              .sub(BigNumber.from(amount))
              .toString();
          else
            totalstake = BigNumber.from(lastHistory.totalstake ?? '0')
              .add(BigNumber.from(amount))
              .toString();
        }
      } else totalstake = amount;

      if (BigNumber.from(totalstake).lt(BigNumber.from('0')))
        totalstake = BigNumber.from('0').toString();

      try {
        const history = new models.histories();
        history.block_number = eventData.blockNumber;
        history.tx_hash = transactionHash;
        history.wallet = user;
        history.prev_shares = prevShares;
        history.shares = shares;
        history.amount = amount;
        history.type = types[changeType];
        history.totalstake = totalstake;
        history.createdAt = new Date(block.timestamp * 1000);

        await history.save();
      } catch (e) {
        console.log('saveHistory error:', e);
      }
    }
  } catch (e) {
    throw e;
  }
}

async function parseRestakedFromManager(eventData) {
  try {
    const web3 = getWeb3();
    // StKlay Event : RestakedFromManager(uint256,uint256,uint256,uint256,uint256)
    if (
      eventData.topics[0] == '0x47c355b9d84fb97b1b36daa506b9fc8f856bb70659ec082640a13dc944dee214'
    ) {
      const block = await web3.eth.getBlock(eventData.blockNumber);

      let contractAddress = eventData.address.toLowerCase();
      const data = web3.eth.abi.decodeParameters(
        ['uint256', 'uint256', 'uint256', 'uint256', 'uint256'],
        eventData.data,
      );

      let totalRestaked = data[0];
      let amount = data[1];
      let increase = data[2];
      let totalStaking = data[3];
      let totalShares = data[4];
      let transactionHash = eventData.transactionHash;

      // const reward = BigNumber.from(data[1].toString())
      //   .mul(BigNumber.from('1000000000000000000000000000')) // <-- prevShares
      //   .div(BigNumber.from(data[3].toString())); // = 8.8 Klay
      // console.log('!! reward = ', reward.toString());

      console.log(
        '!! RestakedFromManager : ',
        totalRestaked,
        amount,
        increase,
        totalStaking,
        totalShares,
      );

      try {
        await models.rewards.createRewards(
          eventData.blockNumber,
          transactionHash,
          amount,
          increase,
          totalShares,
          totalStaking,
          block.timestamp * 1000,
        );
      } catch (e) {
        console.log('createRewards error', e);
      }
    }
  } catch (e) {
    throw e;
  }
}

async function parseTransfer(eventData) {
  try {
    const web3 = getWeb3();
    // StKlay Event : RestakedFromManager(uint256,uint256,uint256,uint256,uint256)
    if (
      eventData.topics[0] == '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef'
    ) {
      const block = await web3.eth.getBlock(eventData.blockNumber);

      let contractAddress = eventData.address.toLowerCase();
      const data = web3.eth.abi.decodeParameters(['uint256'], eventData.data);

      let from = eventData.topics[1];
      let to = eventData.topics[2];
      let value = data[0];
      let transactionHash = eventData.transactionHash;

      if (
        from !== '0x0000000000000000000000000000000000000000000000000000000000000000' &&
        to !== '0x0000000000000000000000000000000000000000000000000000000000000000'
      ) {
        console.log('!! Transfer : ', from, to, value);

        // TODO : DB 작업
        // Transfer 이벤트 저장
        // from totalstake 에서 value 빼기, to totalstake 에 더하기
      }
    }
  } catch (e) {
    throw e;
  }
}

async function parseClaimed(eventData) {
  try {
    const web3 = getWeb3();
    // NodeManager Event : Claimed(address,uint256,uint256);
    if (
      eventData.topics[0] == '0x987d620f307ff6b94d58743cb7a7509f24071586a77759b77c2d4e29f75a2f9a'
    ) {
      const block = await web3.eth.getBlock(eventData.blockNumber);

      let contractAddress = eventData.address.toLowerCase();
      const data = web3.eth.abi.decodeParameters(['address', 'uint256', 'uint256'], eventData.data);

      let user = data[0];
      let amount = data[1];
      let expired = data[2];
      let changeType = 5; // 1 stake, 2 unstake, 3 cancel, 4 transfer, 5 claim
      console.log('!! parseClaimed : ', user, amount, changeType);

      let transactionHash = eventData.transactionHash;
      const lastHistory = await models.histories.findOne({
        where: {wallet: user},
        order: [['id', 'desc']],
      });
      let totalstake;
      if (lastHistory) totalstake = BigNumber.from(lastHistory.totalstake ?? '0').toString();
      else totalstake = amount;

      if (BigNumber.from(totalstake).lt(BigNumber.from('0')))
        totalstake = BigNumber.from('0').toString();

      try {
        const history = new models.histories();
        history.block_number = eventData.blockNumber;
        history.tx_hash = transactionHash;
        history.wallet = user;
        history.prev_shares = lastHistory.shares;
        history.shares = lastHistory.shares;
        history.amount = amount;
        history.type = types[changeType];
        history.totalstake = totalstake;
        history.createdAt = new Date(block.timestamp * 1000);

        // TODO : Claim 시 expired가 아닌 경우에만 성공이므로 DB에 저장
        if (BigNumber.from(expired).eq(BigNumber.from('0'))) await history.save();
      } catch (e) {
        console.log('saveHistory error:', e);
      }
    }
  } catch (e) {
    throw e;
  }
}

exports.getLastEvents = async function (toBlock, chainName) {
  try {
    console.log('=======getLastEvents start');
    const web3 = getWeb3();
    let lastBlock = await models.lastblock.findByNetwork(process.env.TARGET_NETWORK ?? '1001');
    console.log(chainName, 'getLastEvents', lastBlock.blocknumber, toBlock);

    const result = await web3.eth
      .getPastLogs(
        {fromBlock: lastBlock.blocknumber, toBlock: toBlock, address: contracts},
        // {fromBlock: 120214499, toBlock: 120228768, address: contracts},
      )
      .catch((e) => {
        console.log('collection contract getEvents', e);
      });
    console.log('=====!!!!!', result);
    if (result) {
      lastBlock.blocknumber = toBlock + 1;
      await lastBlock.save();
      console.log(chainName + ' event last block update complete.', lastBlock.blocknumber);

      if (result.length > 0) {
        for (let i = 0; i < result.length; i++) {
          let contract = result[i].address;
          let contractAddress = contract.toLowerCase();
          if (result[i].topics) {
            await parseSharesChanged(result[i]);
            await parseRestakedFromManager(result[i]);
            await parseTransfer(result[i]);
            await parseClaimed(result[i]);
          }
        }
      }
    }
  } catch (e) {
    console.log('error ====> ', e);
  }
  console.log('getlastevent end');
};
