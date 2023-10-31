import {type Request as Req, type Response as Res} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import * as zod from '../validation/wallet.zod';
import {RespondGeneralPurpose} from '../utilities/errors/error.handler';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type ZodError} from 'zod';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {type MongoError} from 'mongodb';
import Vlogger, {type IVlog} from '@instamenta/vlogger';
import WalletRepository from '../repositories/wallet.repository';
import {SimpleWallet} from '../../typechain-types';
import {JsonRpcProvider, Wallet} from 'ethers';
import {config} from '../config/config';
import * as I from '../types/types';

export default class WalletController {
   readonly #repository: WalletRepository;
   readonly #contract: SimpleWallet;
   readonly #vlog: IVlog;
   readonly #signer: Wallet;
   readonly #provider: JsonRpcProvider;

   constructor(
      repository: WalletRepository,
      vlogger: Vlogger,
      contract: SimpleWallet,
      signer: Wallet,
      provider: JsonRpcProvider,
   ) {
      this.#repository = repository;
      this.#contract = contract;
      this.#vlog = vlogger.getVlogger('UserController');
      this.#signer = signer;
      this.#provider = provider;
   }

   public async getBalanceByWallet(
      r: Req<{ wallet: string }>,
      w: Res<I.WalletModel>
   ): Promise<void> {
      this.#vlog.debug({f: 'getBalanceByWallet', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
      try {
         const wallet = zod.addressSchema.parse(r.params.wallet);

         this.#repository.getOneByWallet(wallet)
            .then(data => data
               ? w.status(StatusCode.OK)
                  .json(data.get()).end()
               : w.status(StatusCode.NOT_FOUND)
                  .end());
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getContractAddress(
      r: Req,
      w: Res<{ address: string, abi: string, signers_address: string }>
   ): Promise<void> {
      this.#vlog.debug({f: 'getContractAddress', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
      try {
         w.status(StatusCode.OK)
            .json({
               address: config.CONTRACT_ADDRESS,
               abi: this.#contract.interface.formatJson(),
               signers_address: await this.#signer.getAddress()
            }).end();
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

   public async getMany(
      r: Req<object, object, object, { skip: string, limit: string }>,
      w: Res<I.WalletModel[]>
   ): Promise<void> {
      this.#vlog.debug({f: 'getUnsignedTransaction', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
      try {
         const skip = +Number.parseInt(r.query?.skip ?? '0').toFixed(0);
         const limit = +Number.parseInt(r.query?.limit ?? '0').toFixed(0);

         this.#repository.getMany(skip, limit)
            .then(data => data
               ? w.status(StatusCode.OK)
                  .json(data.map(d => d.get())).end()
               : w.status(StatusCode.NOT_FOUND)
                  .end());
      } catch (e: Error | ZodError | MongoError | unknown) {
         RespondGeneralPurpose(e, w);
      }
   }

}

