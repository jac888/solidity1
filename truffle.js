require("dotenv").config();
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const hdwallet = require("truffle-hdwallet-provider");
const privateKeys = [process.env.PKEY]; // private keys
module.exports = {
  networks: {
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys,
          `https://rinkeby.infura.io/${process.env.INFURA_API_KEY}`
        );
      },
      gas: 6712388,
      network_id: 4,
      from: "0x92357843f46d738b386f1fbed57664ee62f353f5"
    }
    // development: {
    //   host: "127.0.0.1",
    //   port: "8545",
    //   network_id: "*"
    // }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
};
