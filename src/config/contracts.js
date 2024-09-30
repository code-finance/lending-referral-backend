const {ChainId} = require('./config');

const contracts = {
  koKaia: {
    [ChainId.KAIA]: '0xa1338309658d3da331c747518d0bb414031f22fd',
    [ChainId.KAIROS]: '0xb15782EFbC2034E366670599F3997f94c7333FF9',
  },
  KDO: {
    [ChainId.KAIA]: '0x3b1036767e3f58a104114440e722cdc8d737e555',
    [ChainId.KAIROS]: '0x3b1036767e3f58a104114440e722cdc8d737e555',
  },
};

module.exports = contracts;
