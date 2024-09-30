const Web3 = require('web3');
const {KmsProvider} = require('aws-kms-provider');
const {provider} = require('../config/constants');

module.exports = {
  getEthWeb3: function () {
    const accessKeyId = process.env.ACCESS_KEY_ID;
    const secretAccessKey = process.env.SECRET_ACCESS_KEY;
    const region = process.env.REGION;
    const provider = new KmsProvider(process.env.ETH_NODE, {
      region,
      keyIds: [process.env.KEY_ID],
      credential: {accessKeyId, secretAccessKey},
    });

    return new Web3(provider);
  },
  getKlaytnWeb3: function () {
    const accessKeyId = process.env.ACCESS_KEY_ID;
    const secretAccessKey = process.env.SECRET_ACCESS_KEY;
    const region = process.env.REGION;
    const provider = new KmsProvider(process.env.KLAYTN_NODE, {
      region,
      keyIds: [process.env.KEY_ID],
      credential: {accessKeyId, secretAccessKey},
    });

    return new Web3(provider);
  },
  getWeb3: function (chainId) {
    if (chainId === 1001 || chainId === 8217) return libs.getKlaytnWeb3();
    else if (chainId === 1 || chainId === 5) return libs.getEthWeb3();
  },
};
