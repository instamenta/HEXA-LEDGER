const express = require('express');
const useContract = require('../scripts/deploy')
const {ethers, HardhatEthersSigner} = require("hardhat");
const StatusCode = require('./statusCode')
require('dotenv').config();

(async function initialize_service() {
    const config = process.env;

    const _http_server = express();
    _http_server.use(require('cors')());
    _http_server.use(require('morgan')('dev'));

    let contract;
    /**@type HardhatEthersSigner  */ let owner;
    /**@type HardhatEthersSigner[]*/ let user;

    await (async () => {
        const data = await useContract();
        contract = data.contract;
        owner = data.owner;
        user = data.user;
    })()

    /**@param {import('express').Request} r
     * @param {import('express').Response} w
     */
    _http_server.post('/deposit/:amount', async (r, w) => {
        try {
            let amount = r.params?.amount;
            console.log(amount)
            if (!amount || +amount <= 0) return w.status(StatusCode.I_AM_A_TEAPOT).end()

            const unsignedTransaction = await contract.deposit({value: ethers.parseEther(amount)});

            w.status(StatusCode.OK).json({unsignedTransaction}).end();
        } catch (error) {
            w.status(StatusCode.INTERNAL_SERVER_ERROR).end()
            console.error(error);
        }
    });

    /**@param {import('express').Request<{wallet: string}>} r
     * @param {import('express').Response} w
     */
    _http_server.get('/balance/:wallet', async (r, w) => {
        try {
            const {wallet} = r.params;

            const balance = await contract.getBalance(wallet);

            w.json({balance: ethers.utils.formatEther(balance)});
        } catch (error) {
            w.status(500).json({error: 'Error getting balance'}).end();
            console.error(error);
        }
    });

    /**@param {Request} r
     * @param {Response} w
     */
    _http_server.get('/address', (r, w) => {
        w.json({address: contract.target}).end()
    })


    _http_server.listen(config.PORT, async () => {
        console.log(`[ ${config.SERVICE_NAME} Contract's deployed address: "${contract.target}" ]`);
        console.log(`[ ${config.SERVICE_NAME} Contract's owner's address: "${owner.address}" ]`);
        console.log(`[ ${config.SERVICE_NAME} Server is running on PORT: ${config.PORT} ]`);
    });


})()




