const {ethers, HardhatEthersSigner} = require("hardhat");

/** @return {Promise<{owner: HardhatEthersSigner, contract: *, user: HardhatEthersSigner[]}>} */
async function useContract() {
    /** @type {[HardhatEthersSigner, HardhatEthersSigner[]]} */
    const [owner, ...user] = await ethers.getSigners();
    const contract = await ethers.deployContract("SimpleWallet", owner);

    return {contract, owner, user};
}

module.exports =  useContract;