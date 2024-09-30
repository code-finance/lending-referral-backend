const Web3 = require('web3');
const {provider} = require('../config/constants');
const axios = require('axios');

exports._errorFormatter = (errors) => {
  let res = [];

  for (let i = 0; i < errors.length; i++) {
    res.push(errors[i].msg);
  }

  return res.join('. ');
};

exports.getCoinPrice = async () => {
  const url = 'https://bcn-api.talken.io/coinmarketcap/cmcQuotes?cmcIds=4256,11552';
  try {
    const response = await axios(url);
    // console.log(response.data);
    const klayUsd = response.data.data[4256].quote.USD.price;
    const klayKrw = response.data.data[4256].quote.KRW.price;
    const talkUsd = response.data.data[11552].quote.USD.price;
    const talkKrw = response.data.data[11552].quote.KRW.price;
    const bnbUsd = response.data.data[1839].quote.USD.price;
    const bnbKrw = response.data.data[1839].quote.KRW.price;
    const result = {
      klay: {USD: klayUsd, KRW: klayKrw},
      talk: {USD: talkUsd, KRW: talkKrw},
      bnb: {USD: bnbUsd, KRW: bnbKrw},
    };

    return result;
  } catch (error) {
    console.log(new Error(error));
    return error;
  }
};

exports.getExchange = async () => {
  const url = 'https://quotation-api-cdn.dunamu.com/v1/forex/recent?codes=FRX.KRWUSD';
  try {
    return await axios(url);
    // console.log(response.data);
  } catch (error) {
    console.log(new Error(error));
    return error;
  }
};

exports.getWeb3 = () => {
  try {
    return new Web3(provider[parseInt(process.env.TARGET_NETWORK)]);
  } catch (e) {
    console.log('getWeb3', e);
    throw e;
  }
};

exports.getHeaders = (totalCount, page, perPage) => {
  page = +page;
  perPage = +perPage;
  let pagesCount = Math.ceil(totalCount / perPage);

  return {
    x_page: page,
    x_total_count: totalCount,
    x_pages_count: pagesCount,
    x_per_page: perPage,
    x_next_page: page === pagesCount ? page : page + 1,
  };
};
