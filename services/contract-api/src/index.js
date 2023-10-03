const express = require('express');
const cors = require('cors');
const app = express();
const port = 3434;
const useContract = require('../scripts/deploy')
const {ethers, HardhatEthersSigner} = require("hardhat");

app.use(cors())

let contract;
/** @type {HardhatEthersSigner} */
let owner;
/** @type {HardhatEthersSigner[]} */
let user;

/**
 * @param {express.Request} r
 * @param {express.Response} w
 *
 * @return {void}
 */
app.post('/', (r, w) => {

    w.json({message: 'Hello, world!'}).end();
});

/**
 * @param {express.Request} r
 * @param {express.Response} w
 *
 * @return {void}
 */
app.get('/buy', (r, w) => {

})

app.listen(port, async () => {
    const data = await useContract();
    contract = data.contract;
    owner = data.owner;
    user = data.user;

    console.log(`[ Contract's deployed address: "${contract.target}" ]`)
    console.log(`[ Contract's owner's address: "${owner.address}" ]`)
    console.log(`[ Server is running on PORT: ${port} ]`);
});
