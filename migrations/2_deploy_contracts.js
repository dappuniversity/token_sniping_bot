const Token = artifacts.require("Token")

module.exports = async function (deployer) {

    const name = "DApp University"
    const symbol = "DAPPU"
    const supply = web3.utils.toWei('1000', 'ether') // 1000 Tokens

    await deployer.deploy(Token, name, symbol, supply)
};