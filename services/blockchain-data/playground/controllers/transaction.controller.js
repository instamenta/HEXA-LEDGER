const StatusCode = require('../utilities/statusCodes')
    , zod = require('../validation/zod')
    , {Request, Response} = require('express')
    , {Web3} = require('web3')
    , {RespondGeneralPurpose} = require('../utilities/errors/error.handler')
    , TransactionRepository = require('../repositories/transaction.repository')
    , BalanceRepository = require('../repositories/balance.repository')
    , ReceiptRepository = require('../repositories/receipt.repository')
;

/** @class TransactionController */
class TransactionController {
    /**@type {Web3}*/ #web3;
    /**@type {TransactionRepository}*/ #transactionRepository;
    /**@type {ReceiptRepository}*/ #receiptRepository;
    /**@type {BalanceRepository}*/ #balanceRepository;

    /**
     * @constructor TransactionController
     *
     * @param {Web3} web3
     * @param {TransactionRepository} transactionRepository
     * @param {ReceiptRepository} receiptRepository
     * @param {BalanceRepository} balanceRepository
     */
    constructor(web3, transactionRepository, receiptRepository, balanceRepository) {
        this.#web3 = web3;
        this.#transactionRepository = transactionRepository;
        this.#receiptRepository = receiptRepository
        this.#balanceRepository = balanceRepository;
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

            let transaction = await this.#transactionRepository.getTransaction(hash);
            if (transaction) {
                delete transaction._id
                return response.status(StatusCode.OK).json(transaction).end();
            }
            transaction = await this.#web3.eth.getTransaction(
                this.#web3.utils.hexToBytes(hash),
            );
            if (transaction) {
                response.status(StatusCode.OK).json(transaction).end();
                return await this.#transactionRepository.saveTx(transaction);
            }
            response.status(StatusCode.NOT_FOUND).end();
        } catch (error) {
            RespondGeneralPurpose(error, response);
        }
    }

    /**
     * @param {Request} request
     * @param {Response} response
     * @return {Promise<*>}
     * @public
     */
    async getAddressBalance(request, response) {
        try {
            let address = zod.addressSchema.parse(request.params?.address);
            if (!address.startsWith('0x')) address = '0x' + address;

            let balance = await this.#balanceRepository.getAddressBalance(address);
            if (balance) {
                delete balance._id
                return response.status(StatusCode.OK).json(balance).end();
            }
            balance = await this.#web3.eth.getBalance(address);
            if (balance) {
                response.status(StatusCode.OK).json(balance).end();
                return this.#balanceRepository.saveAddressBalance(address, balance);
            }
            response.status(StatusCode.NOT_FOUND).end();
        } catch (error) {
            RespondGeneralPurpose(error, response);
        }
    }

    /**
     * @param {Request} request
     * @param {Response} response
     * @return {Promise<*>}
     * @public
     */
    async getTransactionReceiptByHash(request, response) {
        try {
            let hash = zod.transactionHashSchema.parse(request.params?.hash);
            if (!hash.startsWith('0x')) hash = '0x' + hash;

            let receipt = await this.#receiptRepository.getReceiptByTransactionHash(hash);
            if (receipt) {
                delete receipt._id
                return response.status(StatusCode.OK).json(receipt).end();
            }
            receipt = await this.#web3.eth.getTransactionReceipt(
                this.#web3.utils.hexToBytes(hash)
            );
            if (receipt) {
                response.status(StatusCode.OK).json(receipt).end();
                return this.#receiptRepository.saveReceipt(receipt);
            }
            response.status(StatusCode.NOT_FOUND).end();
        } catch (error) {
            RespondGeneralPurpose(error, response);
        }
    }

}

module.exports = TransactionController;