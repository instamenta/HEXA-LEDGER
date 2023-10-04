import {Request as Req, Response as Res} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import * as zod from '../validation/zod';
// import * as I from '../types/types';
import TxRepository from '../repositories/tx.repository';
import {RespondGeneralPurpose} from '../utilities/errors/error.handler';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type ZodError, z} from 'zod';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type MongoError} from 'mongodb';
import {Web3, DEFAULT_RETURN_FORMAT} from "web3";

export default class TxController {
    private web3: Web3;

    constructor(private repository: TxRepository, web3: Web3) {
        this.web3 = web3;
    }

    public async getTxById(
        r: Req,
        w: Res
    ): Promise<void> {
        try {
            const txId = r.params?.id;
            if (!txId && typeof txId !== 'string') throw new Error(`invalid data ${txId}`);

            const tx = await this.web3.eth.getTransaction(
                this.web3.utils.hexToBytes(txId),
                DEFAULT_RETURN_FORMAT,
            );
            console.log(tx);
            if (tx) {
                w.json(tx);
            }
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

}
