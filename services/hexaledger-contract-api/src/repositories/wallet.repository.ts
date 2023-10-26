import {config} from '../utilities/config';
import {HandleMongoError} from '../utilities/errors/error.handler';
import * as I from "../types/types";
import {
    Db, ObjectId, Collection, MongoError,
} from 'mongodb';

export default class WalletRepository {

    readonly #collection: Collection;

    constructor(db: Db) {
        this.#collection = db.collection(config.DB_AUTH_COLLECTION);
    }

    // public async create(d: I.PCreateUser): Promise<UserModel | null> {
    //     const doc = {
    //         w: Buffer.from(d.wallet.replace(/^0x/, ''), 'hex'),
    //         n: Buffer.from(d.name),
    //         r: new ObjectId(d.role),
    //         bal: BigInt(0),
    //         ban: false,
    //         img: Buffer.from(d.image),
    //         imgs: [Buffer.from(d.image)],
    //         cid: Buffer.from(d.clerkId),
    //         oo: {th: [], bo: [], bc: []},
    //         srids: {ch: null, vo: null, tx: null, ss: null},
    //         ca: Math.floor(new Date().getTime() / 1000),
    //         up: Math.floor(new Date().getTime() / 1000),
    //         del: false,
    //     };
    //     return this.#collection.insertOne(doc)
    //         .then((res: InsertOneResult<I.IUserSchema>) =>
    //             res.insertedId
    //                 ? new UserModel({...doc, _id: res.insertedId})
    //                 : null)
    //         .catch((e: MongoError) => {
    //             HandleMongoError(e);
    //             throw e;
    //         });
    // }
    //
    // public async getTotalCount(): Promise<number> {
    //     return this.#collection.countDocuments({del: false})
    //         .catch((e: MongoError) => {
    //             HandleMongoError(e);
    //             throw e;
    //         });
    // }
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
    // public async update(param: string, d: I.PUpdateUser): Promise<UserModel | null> {
    //     const filter = {$match: {del: false}} as Filter<I.IUserSchema>;
    //
    //     (param.length === 24) ? filter.$match._id = new ObjectId(param)
    //         : filter.$match.w = Buffer.from(param.replace(/^0x/, ''), 'hex');
    //
    //     const update = {
    //         $set: {up: Math.floor(new Date().getTime() / 1000)}
    //     } satisfies UpdateFilter<I.IUserSchema>;
    //
    //     const options: FindOneAndUpdateOptions = {
    //         returnDocument: 'after' as ReturnDocument
    //     };
    //     if (d.name) Object.assign(update.$set, {n: Buffer.from(d.name)});
    //     if (d.wallet) Object.assign(update.$set, {w: Buffer.from(d.wallet.replace(/^0x/, ''))}, 'hex');
    //     if (d.image) Object.assign(update.$set, {img: Buffer.from(d.image)});
    //     if (d.images) Object.assign(update.$set, {imgs: (d.images).map((img) => Buffer.from(img))});
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
    // public async getOneById(param: string): Promise<UserModel | null> {
    //     const filter = {del: false} as Filter<I.IUserSchema>;
    //
    //     (param.length === 24) ? filter.$match._id = new ObjectId(param)
    //         : filter.$match.w = Buffer.from(param.replace(/^0x/, ''), 'hex');
    //
    //     return this.#collection
    //         .findOne(filter)
    //         .then((res: WithId<I.IUserSchema> | null) => res
    //             ? new UserModel(res)
    //             : null
    //         ).catch((e: MongoError) => {
    //             HandleMongoError(e);
    //             throw e;
    //         });
    // }
    //
    // public async getMany(skip: number, limit: number): Promise<UserModel[]> {
    //     try {
    //         return this.#collection
    //             .find({del: false}, {skip, limit})
    //             .toArray()
    //             .then((models) => models.map((data) => new UserModel(data)));
    //     } catch (e: MongoError | unknown) {
    //         HandleMongoError(e);
    //         throw e;
    //     }
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
