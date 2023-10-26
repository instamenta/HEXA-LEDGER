import {type Request as Req, type Response as Res} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import * as zod from '../validation/wallet.zod';
import {RespondGeneralPurpose} from '../utilities/errors/error.handler';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type ZodError, z} from 'zod';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type MongoError} from 'mongodb';
import Vlogger, {type IVlog} from "@instamenta/vlogger";
import WalletRepository from "../repositories/wallet.repository";
import {SimpleWallet} from "../../typechain-types";
import "@nomicfoundation/hardhat-ethers";
import {ethers} from 'hardhat'

export default class WalletController {
    readonly #repository: WalletRepository;
    readonly #contract: SimpleWallet
    #address: string | null = null;
    readonly #vlog: IVlog;

    constructor(repository: WalletRepository, vlogger: Vlogger, contract: SimpleWallet) {
        this.#repository = repository;
        this.#contract = contract;
        this.#vlog = vlogger.getVlogger('UserController');

        this.assignAddress(contract)
            .then((address: string) => this.#address = address)
    }

    private async assignAddress(contract: SimpleWallet): Promise<string> {
        return await this.#contract.getAddress();
    }

    //
    // public async getBalanceByWallet(
    //     r: Req<{ userId: string }>,
    //     w: Res
    // ): Promise<void> {
    //     this.#vlog.debug({f: 'getBalanceByWallet', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
    //     try {
    //         const {param} = zod.userIdOrWalletParam.parse(r.params);
    //
    //         this.#repository.getOneById(param)
    //             .then((model: UserModel | null) =>
    //                 model instanceof UserModel
    //                     ? w.status(StatusCode.OK)
    //                         .json(model.get()).end()
    //                     : w.status(StatusCode.NOT_FOUND)
    //                         .json('Failed to create').end()
    //             );
    //     } catch (e: Error | ZodError | MongoError | unknown) {
    //         RespondGeneralPurpose(e, w);
    //     }
    // }

    public async getContractAddress(
        r: Req,
        w: Res<{ address: string }>
    ): Promise<void> {
        this.#vlog.debug({f: 'getContractAddress', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
        try {
            this.#address
                ? w.status(StatusCode.OK).json({address: this.#address}).end()
                : w.status(StatusCode.NOT_FOUND).end()
            ;
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

    public async getUnsignedTransaction(
        r: Req<{ amount: string }, { sender: string }>,
        w: Res
    ): Promise<any> {
        this.#vlog.debug({f: 'getUnsignedTransaction', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
        try {
            const amount = r.params?.amount
                , sender = zod.addressSchema.parse(r.body.sender);

            if (amount === undefined || isNaN(Number(amount)) || parseFloat(amount) < 0) {
                w.status(StatusCode.I_AM_A_TEAPOT).end();
                return this.#vlog.error({e: {amount, sender}, f: 'getUnsignedTransaction', m: 'Invalid Amount!'})
            }

            const unsignedTransaction = await this.#contract
                .connect(await ethers.provider.getSigner(sender))
                .deposit({value: ethers.parseEther(amount)} as any);

            w.status(StatusCode.OK).json(unsignedTransaction).end();
        } catch (e: Error | ZodError | MongoError | unknown) {
            RespondGeneralPurpose(e, w);
        }
    }

}

