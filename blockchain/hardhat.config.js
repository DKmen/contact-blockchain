require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    ganache: {
      url: 'HTTP://127.0.0.1:7545',
      chainId: 1337,
    },
    goerli: {
      url: "url",
      accounts: ["account"]
    },
    sepolia: {
      url: "url",
      accounts: ["account"]
    }
  },
};
