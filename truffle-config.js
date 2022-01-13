module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      skipDryRun: true // Match any network id
    }
  },

  compilers: {
    solc: {
      version: '0.8.9',
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
};