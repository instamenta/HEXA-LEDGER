import { config } from '../utilities/config';
import { HandleMongoError } from '../utilities/errors/error.handler';
import { Db, Filter, Collection, MongoError } from 'mongodb';
import type * as I from '../types/types';
import ReceiptModel from '../models/receipt.model';

export default class ReceiptRepository {
    readonly #collection: Collection<I.IReceiptModel>;

    constructor(db: Db) {
        this.#collection = db.collection(config.DB_RECEIPTS_COLLECTION);
    }

    public async saveReceipt(receiptData: I.ReceiptObject): Promise<boolean> {
        const record = {
            h: Buffer.from(receiptData.transactionHash.replace(/^0x/, ''), 'hex'),
            i: receiptData.transactionIndex,
            bh: Buffer.from(receiptData.blockHash.replace(/^0x/, ''), 'hex'),
            bn: receiptData.blockNumber,
            fr: Buffer.from(receiptData.from.replace(/^0x/, ''), 'hex'),
            to: Buffer.from(receiptData.to.replace(/^0x/, ''), 'hex'),
            cgu: receiptData.cumulativeGasUsed,
            gu: receiptData.gasUsed,
            egp: receiptData.effectiveGasPrice,
            ca: receiptData.contractAddress,
            l: receiptData.logs,
            lb: Buffer.from(receiptData.logsBloom.replace(/^0x/, ''), 'hex'),
            r: Buffer.from(receiptData.root.replace(/^0x/, ''), 'hex'),
            s: receiptData.status,
            t: receiptData.type,
        };

        return this.#collection
            .insertOne(record)
            .then(() => true)
            .catch((e: MongoError) => {
                HandleMongoError(e);
                throw e;
            });
    }

    public async getReceiptByTransactionHash(transactionHash: string): Promise<ReceiptModel | null> {
        const filter: Filter<I.IReceiptModel> = {
            h: Buffer.from(transactionHash.replace(/^0x/, ''), 'hex'),
        };
        return this.#collection.findOne(filter)
            .then(receipt => receipt ? new ReceiptModel(receipt) : null)
            .catch((e: MongoError | unknown) => {
                HandleMongoError(e);
                throw e;
            });
    }

    public async countReceipts(): Promise<number | null> {
        return this.#collection.countDocuments()
            .then(count => count ? count : null)
            .catch((e: MongoError | unknown) => {
                HandleMongoError(e);
                throw e;
            });
    }
}
