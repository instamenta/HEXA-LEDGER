const {ethers, HardhatEthersSigner} = require("hardhat");

/**
 * @return {Promise<{owner: HardhatEthersSigner, contract: *, user: HardhatEthersSigner[]}>}
 */
async function useContract() {
    /** @type {[HardhatEthersSigner, HardhatEthersSigner[]]} */
    const [owner, ...user] = await ethers.getSigners();
    return {
        contract: await ethers.deployContract("Localization", owner),
        owner,
        user,
    };
}

module.exports =  useContract;