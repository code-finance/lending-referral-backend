const ChainId = {
  ETH: 1,
  SEPOLIA: 11155111,
  KAIA: 8217,
  KAIROS: 1001,
};

const RPC_URLS = {
  [ChainId.KAIA]: 'https://public-en.node.kaia.io',
  [ChainId.KAIROS]: 'https://public-en-kairos.node.kaia.io',
};

module.exports = {ChainId, RPC_URLS};
