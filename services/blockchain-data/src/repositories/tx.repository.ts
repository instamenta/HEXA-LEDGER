import {config} from '../utilities/config';
import {HandleMongoError} from '../utilities/errors/error.handler';
import {Db, Filter, ObjectId, Collection, MongoError, WithId,} from 'mongodb';
import type * as I from '../types/types';
import TxModel from '../models/tx.model';

export default class TxRepository {
    readonly #collection: Collection<I.ITxModel>;

    constructor(db: Db) {
        this.#collection = db.collection(config.DB_THREADS_COLLECTION);
    }

    public async saveTx(d: I.TxObject): Promise<boolean> {
        const record = {
            bh: Buffer.from(d.blockHash.replace(/^0x/, ''), 'hex'),
            bn: d.blockNumber,
            ci:d.chainId,
            fr: Buffer.from(d.from.replace(/^0x/, ''), 'hex'),
            ga: d.gas,
            gp: d.gasPrice,
            h: Buffer.from(d.hash.replace(/^0x/, ''), 'hex'),
            i: Buffer.from(d.input.replace(/^0x/, ''), 'hex'),
            n: d.nonce,
            r: Buffer.from(d.r.replace(/^0x/, ''), 'hex'),
            s: Buffer.from(d.s.replace(/^0x/, ''), 'hex'),
            to: Buffer.from(d.to.replace(/^0x/, ''), 'hex'),
            ti: d.transactionIndex,
            t: d.type,
            v: d.v,
            va: d.value,
            d: Buffer.from(d.data.replace(/^0x/, ''), 'hex'),
        };

        return this.#collection
            .insertOne(record)
            .then(() => true)
            .catch((e: MongoError) => {
                HandleMongoError(e);
                throw e;
            });
    }

    public async getTransaction(hash: string): Promise<TxModel | null> {
        const filter: Filter<I.ITxModel> = {
            h: Buffer.from(hash.replace(/^0x/, ''), 'hex')
        };
        return this.#collection.findOne(filter)
            .then(tx => tx ? new TxModel(tx) : null)
            .catch((e: MongoError | unknown) => {
                HandleMongoError(e);
                throw e;
            });
    }

    public async countTx(): Promise<number | null> {
        return this.#collection.countDocuments()
            .then(count => count ? count :null)
            .catch((e: MongoError | unknown) => {
                HandleMongoError(e);
                throw e;
            });
    }
}
