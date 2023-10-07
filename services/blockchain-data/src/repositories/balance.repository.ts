importconfig from '../utilities/config';
import {HandleMongoError} from '../utilities/errors/error.handler';
import {Db, Filter, Collection, MongoError} from 'mongodb';
import type * as I from '../types/types';
import BalanceModel from '../models/balance.model';

export default class BalanceRepository {
    readonly #collection: Collection<I.IAddressBalance>;

    constructor(db: Db) {
        this.#collection = db.collection(config.DB_BALANCE_COLLECTION);
    }

    public async saveAddressBalance(d: I.OAddressBalance): Promise<boolean> {
        const record = {
            a: Buffer.from(d.address.replace(/^0x/, ''), 'hex'),
            bs: [{
                b: d.balance,
                d: new Date(),
            }]
        };
        return this.#collection
            .insertOne(record)
            .then(() => true)
            .catch((e: MongoError) => {
                HandleMongoError(e);
                throw e;
            });
    }

    public async getAddressBalance(address: string): Promise<BalanceModel | null> {
        const filter: Filter<I.IAddressBalance> = {
            a: Buffer.from(address.replace(/^0x/, ''), 'hex')
        };
        return this.#collection.findOne(filter)
            .then(d => d ? new BalanceModel(d) : null)
            .catch((e: MongoError | unknown) => {
                HandleMongoError(e);
                throw e;
            });
    }

}
