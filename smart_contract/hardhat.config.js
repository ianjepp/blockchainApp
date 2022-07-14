//https://eth-rinkeby.alchemyapi.io/v2/ZFzh7Vif2Fdt2hamroX8toSSPqkjDVPg

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://nd-554-548-958.p2pify.com/e9720ce7234f8fae3014539d49d3e6ff',
      accounts: ['d127575b9226f7cbd5ab14c44cbccc93f0b5167ba5bde5f1b1e8e74917a0c6ab']
    }
  }
}