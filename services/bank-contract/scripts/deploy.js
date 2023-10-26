'use strict';

const {ethers} = require("hardhat");

/**@typedef {import('@nomicfoundation/hardhat-ethers/signers').HardhatEthersSigner} EthersSigner*/

/**@typedef {import('ethers').Contract} Contract */

/**
 * @return {Promise<[
 *   contract: Contract,
 *   owner: EthersSigner,
 *   user: EthersSigner[]
 * ]>}
 */
async function useContract() {
    /**
     * @type {[EthersSigner, EthersSigner[]]}
     */
    const [owner, ...user] = await ethers.getSigners();

    /**
     * @type {Contract}
     */
    const contract = await ethers.deployContract("SimpleWallet", owner);

    return [contract, owner, user];
}

module.exports = {useContract};