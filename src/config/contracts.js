const {ChainId} = require('./config');

const contracts = {
  TAL: {
    [ChainId.ETH]: '0xa1338309658d3da331c747518d0bb414031f22fd',
    [ChainId.SEPOLIA]: '0xb15782EFbC2034E366670599F3997f94c7333FF9',
    [ChainId.KAIA]: '0xa1338309658d3da331c747518d0bb414031f22fd',
    [ChainId.KAIROS]: '0xb15782EFbC2034E366670599F3997f94c7333FF9',
  },
};

module.exports = contracts;
