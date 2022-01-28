# Token Sniping Bot

## Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (React & Testing)
- [Web3](https://web3js.readthedocs.io/en/v1.5.2/) (Blockchain Interaction)
- [Truffle](https://www.trufflesuite.com/docs/truffle/overview) (Development Framework)
- [Ganache-cli](https://github.com/trufflesuite/ganache) (For Local Blockchain)
- [Alchemy](https://www.alchemy.com/) (For forking the Ethereum mainnet)

## Requirements For Initial Setup
- Install [NodeJS](https://nodejs.org/en/), I recommend using node version 16.5.0 to avoid any potential dependency issues
- Install [Truffle](https://www.trufflesuite.com/docs/truffle/overview), In your terminal, you can check to see if you have truffle by running `truffle --version`. To install truffle run `npm i -g truffle`.
- Install [Ganache-cli](https://github.com/trufflesuite/ganache). To see if you have ganache-cli installed, in your command line type `ganache-cli --version`. To install, in your command line type `npm install ganache-cli --global`

## Setting Up
### 1. Clone/Download the Repository

### 2. Install Dependencies:
`$ npm install`

### 3. Start Ganache CLI
In your terminal run:
```
ganache-cli -f wss://eth-mainnet.alchemyapi.io/v2/<Your-App-Key> -m <Your-Mnemonic-Phrase> -u 0x2fEb1512183545f48f6b9C5b4EbfCaF49CfCa6F3 -p 7545
```

Replace Your-App-Key with your Alchemy Project ID located in the settings of your project. Replace Your-Mnemonic-Phrase with your own mnemonic phrase. If you don't have a mnemonic phrase to include you can omit it:

```
ganache-cli -f wss://eth-mainnet.alchemyapi.io/v2/<Your-App-Key> -u 0x2fEb1512183545f48f6b9C5b4EbfCaF49CfCa6F3 -p 7545
```

### 4. Start the Bot
`$ node ./bot.js`

### 5. Migrate Smart Contracts
In a seperate terminal run:
`$ truffle migrate --reset`

### 6. Fund Accounts
`$ truffle exec ./scripts/1_fund.js`

### 6. Create Uniswap Pool
`$ truffle exec ./scripts/2_create_pool.js`
