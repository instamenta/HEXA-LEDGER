import {type Request as Req, type Response as Res} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import * as zod from '../validation/zod';
import type * as I from '../types/types';
import type TxRepository from '../repositories/tx.repository';
import {RespondGeneralPurpose} from '../utilities/errors/error.handler';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type ZodError, z} from 'zod';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type MongoError} from 'mongodb';
import {Web3, DEFAULT_RETURN_FORMAT} from 'web3';
import {prepare_to_stringify} from "../utilities/functions";

export default class TxController {
    #repository: TxRepository;
    #web3: Web3;

    constructor(repository: TxRepository, web3: Web3) {
        this.#repository = repository;
        this.#web3 = web3;
    }

    public async getTxById(
        r: Req,
        w: Res
    ): Promise<void> {
        try {
            const hash = zod.txHashSchema.parse(r.params?.hash);
            const tx = await this.#repository.getTx(hash);
            if (tx) {
                w.status(StatusCode.OK).json(tx.getTx()).end();
                return console.table(tx.rawTx());
            } else console.log('[NOT FOUND IN DB]');

            const newTx = await this.#web3.eth.getTransaction(
                this.#web3.utils.hexToBytes(hash), DEFAULT_RETURN_FORMAT,
            );

            if (newTx) {
                w.status(StatusCode.OK).json(newTx).end();
                // @ts-ignore
                await this.#repository.saveTx(newTx);
                console.table(newTx);
            } else w.status(StatusCode.NOT_FOUND).end();
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

}
