import {type Request, type Response} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import * as zod from '../validation/zod';
import type * as I from '../types/types';
import type TxRepository from '../repositories/tx.repository';
import {RespondGeneralPurpose} from '../utilities/errors/error.handler';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type ZodError, z} from 'zod';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type MongoError} from 'mongodb';
import {Web3, DEFAULT_RETURN_FORMAT, FMT_NUMBER} from 'web3';
import {TransactionReceipt} from 'web3-types'
import type BalanceRepository from '../repositories/balance.repository';
import BalanceModel from '../models/balance.model';

export default class TxController {
    #web3: Web3;
    #txRepository: TxRepository;
    #balanceRepository: BalanceRepository;

    constructor(web3: Web3, txRepository: TxRepository, balanceRepository: BalanceRepository) {
        this.#web3 = web3;
        this.#txRepository = txRepository;
        this.#balanceRepository = balanceRepository;
    }

    public async getTransactionByHash(r: Request, w: Response): Promise<void> {
        try {
            let hash = zod.transactionHashSchema.parse(r.params?.hash);
            if (!hash.startsWith('0x')) hash = '0x' + hash;

            const transaction = await this.#txRepository.getTransaction(hash);
            if (transaction) {
                w.status(StatusCode.OK).json(transaction.getTransaction()).end();
                return console.table(transaction.getTransaction());
            } else console.log('[NOT FOUND IN DB]');

            const newTransaction = await this.#web3.eth.getTransaction(
                this.#web3.utils.hexToBytes(hash), DEFAULT_RETURN_FORMAT,
            );
            if (newTransaction) {
                w.status(StatusCode.OK).json(newTransaction).end();
                // @ts-ignore
                await this.#txRepository.saveTx(newTransaction);
                console.table(newTransaction);
            } else w.status(StatusCode.NOT_FOUND).end();
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

    public async getBalanceByAddress(r: Request, w: Response): Promise<void> {
        try {
            let address = zod.addressSchema.parse(r.params?.address);
            if (!address.startsWith('0x')) address = '0x' + address;

            let balance: bigint | BalanceModel | null = await this.#balanceRepository
                .getAddressBalance(address);
            if (balance) {
                w.status(StatusCode.OK).json(balance.getAddressBalance()).end();
                return console.table(balance.getAddressBalanceRaw());
            } else console.log('[NOT FOUND IN DB]');

            balance = await this.#web3.eth.getBalance(address);
            if (balance) {
                const model = new BalanceModel({
                    a: Buffer.from(address.replace(/^0x/, ''), 'hex'),
                    bs: [{b: balance, d: new Date()}]
                });
                w.status(StatusCode.OK).json(model.getAddressBalance()).end();
                await this.#balanceRepository.saveAddressBalance({address, balance});
                console.table(model.getAddressBalance());
            } else w.status(StatusCode.NOT_FOUND).end();
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

    public async getTransactionReceiptByHash(r: Request, w: Response): Promise<void> {
        try {
            let hash = zod.transactionHashSchema.parse(r.params?.hash);
            if (!hash.startsWith('0x')) hash = '0x' + hash;

            // const transaction = await this.#txRepository.getTransaction(hash);
            // if (transaction) {
            //     w.status(StatusCode.OK).json(transaction.getTransaction()).end();
            //     return console.table(transaction.getTransaction());
            // } else console.log('[NOT FOUND IN DB]');

            const newReceipt: TransactionReceipt = await this.#web3.eth.getTransactionReceipt(
                this.#web3.utils.hexToBytes(hash)
            );

            console.table(newReceipt)

            // if (newTransaction) {
            //     w.status(StatusCode.OK).json(newTransaction).end();
            //     // @ts-ignore
            //     await this.#txRepository.saveTx(newTransaction);
            //     console.table(newTransaction);
            // } else w.status(StatusCode.NOT_FOUND).end();
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

}
