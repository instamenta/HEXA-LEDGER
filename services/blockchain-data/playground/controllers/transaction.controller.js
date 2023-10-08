const StatusCode = require('../utilities/statusCodes')
    , zod = require('../validation/zod')
    , {Request, Response} = require('express')
    , {Web3} = require('web3')
    , {RespondGeneralPurpose} = require('../utilities/errors/error.handler')
;

/** @typedef {Object} Repositories
 * @property {import('playground/repositories/transaction.repository')} transaction
 * @property {import('playground/repositories/receipt.repository')} receipt
 * @property {import('playground/repositories/balance.repository')} balance
 * @property {import('playground/repositories/block.repository')} block
 */

/**@class TransactionController*/
class TransactionController {
    /**@type {Repositories}*/#repository;
    /**@type {Web3}*/#web3;

    /**@constructor TransactionController
     * @param {Repositories} param
     * @param {Web3} web3
     */
    constructor({transaction, receipt, balance, block}, web3) {
        this.#repository = {transaction, receipt, balance, block};
        this.#web3 = web3;
    }

    /**
     * @param {Request} request
     * @param {Response} response
     * @return {Promise<*>}
     * @public
     */
    async getTransactionByHash(request, response) {
        try {
            let hash = zod.transactionHashSchema.parse(request.params?.hash);
            if (!hash.startsWith('0x')) hash = '0x' + hash;

            let transaction = await this.#repository.transaction.getByHash(hash);
            if (transaction) {
                delete transaction._id;
                return response.status(StatusCode.OK).json(transaction).end();
            }
            transaction = await this.#web3.eth.getTransaction(
                this.#web3.utils.hexToBytes(hash),
            );
            if (transaction) {
                response.status(StatusCode.OK).json(transaction).end();
                return await this.#repository.transaction.save(transaction);
            }
            response.status(StatusCode.NOT_FOUND).end();
        } catch (error) {
            RespondGeneralPurpose(error, response);
        }
    }

    /**@param {Request} request
     * @param {Response} response
     * @return {Promise<*>}
     * @public
     */
    async getAddressBalanceByAddress(request, response) {
        try {
            let address = zod.addressSchema.parse(request.params?.address);
            if (!address.startsWith('0x')) address = '0x' + address;

            let balance = await this.#repository.balance.getByAddress(address);
            if (balance) {
                delete balance._id;
                return response.status(StatusCode.OK).json(balance).end();
            }
            balance = await this.#web3.eth.getBalance(address);
            if (balance) {
                response.status(StatusCode.OK).json(balance).end();
                return this.#repository.balance.save(address, balance);
            }
            response.status(StatusCode.NOT_FOUND).end();
        } catch (error) {
            RespondGeneralPurpose(error, response);
        }
    }

    /**@param {Request} request
     * @param {Response} response
     * @return {Promise<*>}
     * @public
     */
    async getTransactionReceiptByHash(request, response) {
        try {
            let hash = zod.transactionHashSchema.parse(request.params?.hash);
            if (!hash.startsWith('0x')) hash = '0x' + hash;

            let receipt = await this.#repository.receipt.getByHash(hash);
            if (receipt) {
                delete receipt._id;
                return response.status(StatusCode.OK).json(receipt).end();
            }
            receipt = await this.#web3.eth.getTransactionReceipt(
                this.#web3.utils.hexToBytes(hash)
            );
            if (receipt) {
                response.status(StatusCode.OK).json(receipt).end();
                return this.#repository.receipt.save(receipt);
            }
            response.status(StatusCode.NOT_FOUND).end();
        } catch (error) {
            RespondGeneralPurpose(error, response);
        }
    }

    /**@param {Request} request
     * @param {Response} response
     * @return {Promise<*>}
     * @public
     */
    async getBlockLatest(request, response) {
        try {
            const number = await this.#web3.eth.getBlockNumber();

            let block= await this.#repository.block.getByNumber(number);
            if (block) {
                delete block._id;
                return response.status(StatusCode.OK).json(block).end();
            }
            block = await this.#web3.eth.getBlock();
            if (block) {
                response.status(StatusCode.OK).json(block).end();
                return this.#repository.block.save(block);
            }
            response.status(StatusCode.NOT_FOUND).end();
        } catch (error) {
            RespondGeneralPurpose(error, response);
        }
    }

    /**@param {Request} request
     * @param {Response} response
     * @return {Promise<*>}
     * @public
     */
    async getBlockByNumber(request, response) {
        try {
            let number = BigInt(request.params?.number);

            let block = await this.#repository.block.getByNumber(number);
            if (block) {
                delete block._id;
                return response.status(StatusCode.OK).json(block).end();
            }
            block = await this.#web3.eth.getBlock(number);
            if (block) {
                response.status(StatusCode.OK).json(block).end();
                return this.#repository.block.save(block);
            }
            response.status(StatusCode.NOT_FOUND).end();
        } catch (error) {
            RespondGeneralPurpose(error, response);
        }
    }

    /**@param {Request} request
     * @param {Response} response
     * @return {Promise<*>}
     * @public
     */
    async getBlockByHash(request, response) {
        try {
            let hash = zod.hashSchema.parse(request.params?.hash);
            if (!hash.startsWith('0x')) hash = '0x' + hash;

            let block = await this.#repository.block.getByHash(hash);
            if (block) {
                delete block._id;
                return response.status(StatusCode.OK).json(block).end();
            }
            block = await this.#web3.eth.getBlock(
                this.#web3.utils.hexToBytes(hash)
            );
            if (block) {
                response.status(StatusCode.OK).json(block).end();
                return this.#repository.block.save(block);
            }
            response.status(StatusCode.NOT_FOUND).end();
        } catch (error) {
            RespondGeneralPurpose(error, response);
        }
    }

}

module.exports = TransactionController;