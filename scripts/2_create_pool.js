const Token = artifacts.require("Token")
const IUniswapV2Router02 = require('@uniswap/v2-periphery/build/IUniswapV2Router02.json')
const IERC20 = require('@openzeppelin/contracts/build/contracts/ERC20.json')

const uRouter = new web3.eth.Contract(IUniswapV2Router02.abi, '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D')

module.exports = async function (callback) {
    console.log(`Preparing to create Uniswap pool...\n`)

    const [deployer] = await web3.eth.getAccounts()

    const WETH = new web3.eth.Contract(IERC20.abi, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
    const DAPPU = await Token.deployed()

    const DAPPUAmount = web3.utils.toWei('250', 'ether')
    const WETHAmount = web3.utils.toWei('1', 'ether')

    console.log(`Approving WETH...`)

    await WETH.methods.approve(uRouter._address, WETHAmount).send({ from: deployer })

    console.log(`Approving DAPPU...\n`)

    await DAPPU.approve(uRouter._address, DAPPUAmount, { from: deployer })

    console.log(`Creating Uniswap pool...\n`)

    const gas = await uRouter.methods.addLiquidity(
        DAPPU.address,
        WETH._address,
        DAPPUAmount,
        WETHAmount,
        DAPPUAmount,
        WETHAmount,
        deployer,
        Math.floor(Date.now() / 1000) + 60 * 10
    ).estimateGas({ from: deployer })

    await uRouter.methods.addLiquidity(
        DAPPU.address,
        WETH._address,
        DAPPUAmount,
        WETHAmount,
        DAPPUAmount,
        WETHAmount,
        deployer,
        Math.floor(Date.now() / 1000) + 60 * 10
    ).send({ from: deployer, gas: gas })

    console.log(`Pool successfully created!\n`)

    callback()
}