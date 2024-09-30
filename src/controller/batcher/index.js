//import from the generated directory
const graphClient = require('../../../.graphclient');
const models = require('../../models');
const {ErrorMessage} = require('../../utils/errorMessage');
const {ethers, parseEther, formatEther} = require('ethers');
const {koKaia} = require('../../config/contracts');

const erc20Abi = require('../../config/abi/ERC20Token.json');
const {BigNumber} = require('@ethersproject/bignumber');
const {RPC_URLS} = require('../../config/config');

// 포인트 지급 대상 풀 설정
const PointPools = [
  '0x1e46637d7cfb3fd031db3b139cd36dfa4ea03a3b00020000000000000000002a',
  '0x2565c8de24142352062731f8b04fb557d1824b2c000200000000000000000029',
  '0xa0465e7c5f9d430246221c4a5dcfb2752a3c95f2000200000000000000000001',
  '0xee1f0a05e5bc21702642960d9a4e43331deeab07000200000000000000000006',
];

async function addPoint(wallet, actionId, point) {
  let referral = await models.referrals.findByWallet(wallet);
  if (!referral) return ErrorMessage.WALLET_NOT_FOUND;

  // const record = new models.points({wallet, point, actionId});
  // await record.save();
  //
  // referral.points = parseInt(referral.points) + parseInt(point);
  // switch (actionId) {
  //   case 1:
  //     referral.referral = parseInt(referral.referral) + parseInt(point);
  //     break;
  //   case 2:
  //     referral.liquidity = parseInt(referral.liquidity) + parseInt(point);
  //     break;
  //   case 3:
  //     referral.staking = parseInt(referral.staking) + parseInt(point);
  //     break;
  // }
  // await referral.save();
  console.log('!! >> ', wallet, actionId, point);
}

async function liquidityBatch() {
  try {
    // TODO : referrals 테이블 전체 Row 지갑 주소를 루핑 돌면서 처리하면 !!
    const wallet = ethers.getAddress('0xdc926E34E73292cD7c48c6fD7375af7D93435D36').toLowerCase();
    // const wallet = '0x1716c4d49e9d81c17608cd9a45b1023ac9df6c73';

    const variables = {
      where: {
        balance_gt: 0.000001,
        userAddress: wallet,
      },
    };

    // query to fetch the pool data
    const sharesQuery = `query PoolShares($where: PoolShare_filter) { poolShares (first: 1000, where: $where) { poolId { id symbol totalShares tokens { balance } } balance } }`;

    // getting shares data
    const sharesResult = await graphClient.execute(sharesQuery, variables);
    console.log(sharesResult['data']['poolShares']);

    const shares = sharesResult['data']['poolShares'];
    // 풀이 여러개 이면.... 합해서 하나로 처리해야 하나 ?
    for (const share of shares) {
      if (PointPools.includes(share.poolId.id)) {
        let totalTokens = 0;
        share.poolId.tokens.forEach((token) => {
          totalTokens += parseFloat(token.balance);
        });
        const ratio = parseFloat(share.balance) / parseFloat(share.poolId.totalShares);
        const myTokens = Math.round(totalTokens * ratio);
        // console.log('!!! shares = ', share.poolId.totalShares, share.balance);
        // console.log('!!! tokens = ', totalTokens, myTokens);
        console.log(
          `!!! Liquidity ${share.poolId.symbol} : ${share.balance}/${share.poolId.totalShares} = ${myTokens}/${totalTokens} `,
        );
        await addPoint(wallet, 2, myTokens.toString());
      }
    }
  } catch (e) {
    console.log('liquidityBatch error', e);
  }
}

async function stakingBatch() {
  try {
    // TODO : referrals 테이블 전체 Row 지갑 주소를 루핑 돌면서 처리하면 !!
    const wallet = ethers.getAddress('0xdc926E34E73292cD7c48c6fD7375af7D93435D36');
    // const wallet = '0x1716c4d49e9d81c17608cd9a45b1023ac9df6c73';

    const provider = new ethers.JsonRpcProvider(RPC_URLS[process.env.CHAIN_ID]);
    const KoKaia = new ethers.Contract(koKaia[process.env.CHAIN_ID], erc20Abi, provider);
    const balance = await KoKaia.balanceOf(wallet);
    console.log('!!!!! koKaia balances = ', balance.toString());

    if (BigNumber.from(balance).gt(BigNumber.from('0'))) {
      // TODO : Staking 포인트 지급. 1 KAIA = 1 Point
      const point = formatEther(balance);
      console.log('!!!!! Staking point = ', point);
      await addPoint(wallet, 3, point);
    }
  } catch (e) {
    console.log('stakingBatch error', e);
  }
}

async function referralBatch() {
  try {
    // TODO : referrals 테이블 전체 Row 지갑 주소를 루핑 돌면서 처리하면 !!
    const wallet = ethers.getAddress('0xdc926E34E73292cD7c48c6fD7375af7D93435D36');
    // const wallet = '0x1716c4d49e9d81c17608cd9a45b1023ac9df6c73';

    const amount = await models.referrals.getReferralAmount(wallet);
    console.log('!!!!! total referral points = ', amount);

    if (amount > 0) {
      // TODO : Referral 포인트 지급. 10%
      const point = Math.round(parseFloat((amount * 0.1).toString()));
      await addPoint(wallet, 1, point);
    }
  } catch (e) {
    console.log('referralBatch error', e);
  }
}

module.exports = {liquidityBatch, stakingBatch, referralBatch};
