import {config} from '../config/config';
import {HandleMongoError} from '../utilities/errors/error.handler';
import {Collection, Db, Filter, FindOneAndUpdateOptions, MongoError, ReturnDocument, UpdateFilter,} from 'mongodb';
import * as I from '../types/types';
import Vlogger, {IVlog} from '@instamenta/vlogger';
import WalletModel from '../models/wallet.model';

export default class WalletRepository {

   readonly #collection: Collection<I.IWalletSchema>;
   readonly #vlog: IVlog;

   constructor(db: Db, vlogger: Vlogger) {
      this.#collection = db.collection(config.DB_AUTH_COLLECTION);
      this.#vlog = vlogger.getVlogger(this.constructor.name);
   }

   public async create(wallet: string, balance: bigint): Promise<WalletModel | null> {
      this.#vlog.info({d: {wallet, balance}, f: 'create', m: 'Calling...'});
      const doc = {
         w: Buffer.from(wallet.replace(/^0x/, ''), 'hex'),
         b: balance,
      };
      return this.#collection.insertOne(doc)
         .then(res => res.insertedId
            ? new WalletModel({...doc, _id: res.insertedId})
            : null)
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async getBalance(wallet: string): Promise<WalletModel | null> {
      this.#vlog.info({d: {wallet}, f: 'getBalance', m: 'Calling...'});
      const filter: Filter<I.IWalletSchema> = {
         w: Buffer.from(wallet.replace(/^0x/, ''), 'hex')
      };
      return this.#collection.findOne(filter)
         .then(res => res
            ? new WalletModel(res)
            : null
         )
         .catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async update(wallet: string, balance: bigint): Promise<WalletModel | null> {
      this.#vlog.info({d: {wallet, balance}, f: 'update', m: 'Calling...'});
      const filter: Filter<I.IWalletSchema> = {
         $match: {w: Buffer.from(wallet.replace(/^0x/, ''), 'hex')}
      };
      const update: UpdateFilter<I.IWalletSchema> = {
         $set: {b: balance}
      };
      const options: FindOneAndUpdateOptions = {
         returnDocument: 'after' as ReturnDocument
      };
      return this.#collection
         .findOneAndUpdate(filter, update, options)
         .then(res => res
            ? new WalletModel(res)
            : null
         ).catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async updateOrCreate(wallet: string, balance: bigint): Promise<WalletModel | null> {
      this.#vlog.info({d: {wallet, balance}, f: 'updateOrCreate', m: 'Calling...'});
      const filter: Filter<I.IWalletSchema> = {
         w: Buffer.from(wallet.replace(/^0x/, ''), 'hex')
      };
      const update: UpdateFilter<I.IWalletSchema> = {
         $set: {b: balance}
      };
      const options: FindOneAndUpdateOptions = {
         returnDocument: 'after' as ReturnDocument
      };
      try {
         const data = await this.#collection
            .findOneAndUpdate(filter, update, options)
            .then(res => res
               ? new WalletModel(res)
               : null);
         if (data) {
            this.#vlog.info({d: data, m: 'Found in database'});
            return data;
         }
         const doc = {
            w: Buffer.from(wallet.replace(/^0x/, ''), 'hex'),
            b: balance,
         };
         return this.#collection.insertOne(doc)
            .then(res => res.insertedId
               ? new WalletModel({...doc, _id: res.insertedId})
               : null);
      } catch (e: MongoError | unknown) {
         HandleMongoError(e);
         throw e;
      }
   }

   public async getOneByWallet(wallet: string): Promise<WalletModel | null> {
      const filter: Filter<I.IWalletSchema> = {
         w: Buffer.from(wallet.replace(/^0x/, ''), 'hex')
      };
      return this.#collection.findOne(filter)
         .then(res => res
            ? new WalletModel(res)
            : null
         ).catch((e: MongoError) => {
            HandleMongoError(e);
            throw e;
         });
   }

   public async getMany(skip: number, limit: number): Promise<WalletModel[]> {
      return this.#collection
         .find()
         .skip(skip)
         .limit(limit)
         .toArray()
         .then(wallets => wallets.map(d => new WalletModel(d)))
         .catch((e: MongoError | unknown) => {
            HandleMongoError(e);
            throw e;
         });
   }

   //
   // public async delete(param: string): Promise<UserModel | null> {
   //     const filter = {$match: {del: true}} as Filter<I.IUserSchema>;
   //
   //     (param.length === 24) ? filter.$match._id = new ObjectId(param)
   //         : filter.$match.w = Buffer.from(param.replace(/^0x/, ''), 'hex');
   //
   //     const update: UpdateFilter<I.IUserSchema> = {
   //         $set: {del: true, up: Math.floor(new Date().getTime() / 1000)}
   //     };
   //     const options: FindOneAndUpdateOptions = {
   //         returnDocument: 'after' as ReturnDocument
   //     };
   //     return this.#collection
   //         .findOneAndUpdate(filter, update, options)
   //         .then((res: WithId<I.IUserSchema> | null) => res
   //             ? new UserModel(res)
   //             : null
   //         ).catch((e: MongoError) => {
   //             HandleMongoError(e);
   //             throw e;
   //         });
   // }
   //


   // public async addReferenceId(param: string, service: string, refId: string): Promise<boolean> {
   //     try {
   //         const filter = {del: false} as Filter<I.IUserSchema>;
   //
   //         (param.length === 24) ? filter.$match._id = new ObjectId(param)
   //             : filter.$match.w = Buffer.from(param.replace(/^0x/, ''), 'hex');
   //
   //         const update: IAddRef = {
   //             $set: {up: Math.floor(new Date().getTime() / 1000)}
   //         };
   //         if (service === 'stats') update.$set['srids.ss'] = refId;
   //         if (service === 'chat') update.$set['srids.ch'] = refId;
   //         if (service === 'trans') update.$set['srids.tx'] = refId;
   //         if (service === 'voter') update.$set['srids.vo'] = refId;
   //
   //         return this.#collection
   //             .updateOne(filter, update)
   //             .then((res) => !!res.modifiedCount);
   //     } catch (e: MongoError | unknown) {
   //         HandleMongoError(e);
   //         throw e;
   //     }
   // }
   //
   // public async assignOwnership(param: string, type: string, refId: string): Promise<boolean> {
   //     try {
   //         const filter = {del: false} as Filter<I.IUserSchema>;
   //
   //         (param.length === 24) ? filter.$match._id = new ObjectId(param)
   //             : filter.$match.w = Buffer.from(param.replace(/^0x/, ''), 'hex');
   //
   //         let update: UpdateFilter<I.IUserSchema> | null = null;
   //
   //         if (type === 'thread') update = {$push: {'oo.th': new ObjectId(refId)}};
   //         if (type === 'bounty') update = {$push: {'oo.bo': new ObjectId(refId)}};
   //         if (type === 'bcData') update = {$push: {'oo.bc': new ObjectId(refId)}};
   //         if (!update) return false;
   //
   //         return this.#collection
   //             .updateOne(filter, update)
   //             .then((res) => !!res.modifiedCount);
   //     } catch (e: MongoError | unknown) {
   //         HandleMongoError(e);
   //         throw e;
   //     }
   // }

}
