require("@nomiclabs/hardhat-waffle");

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
require('dotenv').config();

const AURORA_PRIVATE_KEY = process.env.AURORA_PRIVATE_KEY;

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.3",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
      }
    ]
  },
  networks: {
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      accounts: [`0x${AURORA_PRIVATE_KEY}`]
    },
    // develop_aurora: {
    //   url: 'https://develop.rpc.testnet.aurora.dev:8545',
    //   accounts: [`0x${AURORA_PRIVATE_KEY}`]
    // },
    // ropsten: {
    //   url: 'https://rpc.testnet.aurora.dev:8545',
    //   accounts: [`0x${AURORA_PRIVATE_KEY}`]
    // }
  }
};

