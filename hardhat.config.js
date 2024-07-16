require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    goerli: {
      url: process.env.GOERLIRPC,
      // @ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      // @ts-ignore
      accounts: [process.env.PRIVATEKEY],
    },
    amoy: {
      url: 'https://polygon-amoy.drpc.org',
      accounts: [process.env.PRIVATEKEY],
    },
    hardhat: {
      forking: {
        // @ts-ignore
        url: process.env.SEPOLIARPC,
      },
    },
  },
  etherscan: {
    apiKey: process.env.API_KEY,
  },
};
