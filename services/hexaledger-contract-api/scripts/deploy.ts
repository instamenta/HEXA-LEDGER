const {ethers} = require('hardhat')

async function initialize_simple_wallet_contract() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const contract = await ethers.deployContract('SimpleWallet');

    console.log("Token address:", await contract.getAddress());
}

initialize_simple_wallet_contract()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });