import {config} from '../utilities/config';
import UserModel from '../models/user.model';
import {HandleMongoError} from '../utilities/errors/error.handler';
import {
    Db, ObjectId, Collection, MongoError,
    Filter, UpdateFilter, FindOptions, FindOneAndUpdateOptions,
    InsertOneResult, WithId, ReturnDocument,
} from 'mongodb';
import * as I from "../types/user";
import {PUpdateUser} from "../types/user";

export default class UserRepository {

    readonly #collection: Collection<I.IUserSchema>;

    constructor(db: Db) {
        this.#collection = db.collection(config.DB_USER_COLLECTION);
    }

    public async create(d: I.PCreateUser): Promise<UserModel | null> {
        const record = {
            w: Buffer.from(d.wallet.replace(/^0x/, ''), 'hex'),
            n: Buffer.from(d.name),
            b: Buffer.from(d.bio),
            r: new ObjectId(d.role),
            bal: BigInt(0),
            ban: false,
            img: Buffer.from(d.image),
            imgs: [Buffer.from(d.image)],
            cpuid: Buffer.from(d.clerkPublicId),
            cprid: Buffer.from(d.clerkPrivateId),
            oo: {th: [], bo: [], bc: []},
            srids: {ch: null, vo: null, tx: null, ss: null},
            ca: Math.floor(new Date().getTime() / 1000),
            up: Math.floor(new Date().getTime() / 1000),
            del: false,
        };
        return this.#collection
            .insertOne(record)
            .then((res: InsertOneResult<I.IUserSchema>) =>
                res.insertedId
                    ? new UserModel({...record, _id: res.insertedId})
                    : null)
            .catch((e: MongoError) => {
                HandleMongoError(e);
                throw e;
            });
    }

    public async getTotalCount(): Promise<number> {
        const filter: Filter<I.IUserSchema> = {
            del: false
        };
        return this.#collection.countDocuments(filter)
            .catch((e: MongoError | unknown) => {
                HandleMongoError(e);
                throw e;
            });
    }

    public async deleteById(threadId: string): Promise<UserModel | null> {
        const filter: Filter<I.IUserSchema> = {
            $match: {_id: new ObjectId(threadId), del: true}
        };
        const update: UpdateFilter<I.IUserSchema> = {
            $set: {del: true, up: Math.floor(new Date().getTime() / 1000)}
        };
        const options: FindOneAndUpdateOptions = {
            returnDocument: 'after' as ReturnDocument
        };
        return this.#collection
            .findOneAndUpdate(filter, update, options)
            .then((res: WithId<I.IUserSchema> | null) => res
                ? new UserModel(res)
                : null
            ).catch((e: MongoError) => {
                HandleMongoError(e);
                throw e;
            });
    }

    public async update(threadId: string, d: I.PUpdateUser): Promise<UserModel | null> {
        const filter: Filter<I.IUserSchema> = {
            $match: {_id: new ObjectId(threadId), del: false}
        };
        const update = {
            $set: {up: Math.floor(new Date().getTime() / 1000)}
        } satisfies UpdateFilter<I.IUserSchema>;
        const options: FindOneAndUpdateOptions = {
            returnDocument: 'after' as ReturnDocument
        };
        if (d.name) Object.assign(update.$set, {n: Buffer.from(d.name)});
        if (d.wallet) Object.assign(update.$set, {des: Buffer.from(d.wallet.replace(/^0x/, ''))}, 'hex');
        if (d.bio) Object.assign(update.$set, {c: Buffer.from(d.bio)});
        if (d.image) Object.assign(update.$set, {c: Buffer.from(d.image)});
        if (d.balance) Object.assign(update.$set, {c: BigInt(d.balance)});
        if (d.banned) Object.assign(update.$set, {c: d.banned});
        if (d.image) Object.assign(update.$set, {c: Buffer.from(d.image)});
        if (d.images) Object.assign(update.$set, {
            i: (d.images).map((img) => Buffer.from(img))
        });
        return this.#collection
            .findOneAndUpdate(filter, update, options)
            .then((res: WithId<I.IUserSchema> | null) => res
                ? new UserModel(res)
                : null
            ).catch((e: MongoError) => {
                HandleMongoError(e);
                throw e;
            });
    }

    public async getOneById(threadId: string): Promise<UserModel | null> {
        const filter: Filter<I.IUserSchema> = {
            _id: new ObjectId(threadId), del: false
        };
        return this.#collection
            .findOne(filter)
            .then((res: WithId<I.IUserSchema> | null) => res
                ? new UserModel(res)
                : null
            ).catch((e: MongoError) => {
                HandleMongoError(e);
                throw e;
            });
    }

    public async getMany(skip: number, limit: number): Promise<UserModel[]> {
        try {
            const filter: Filter<I.IUserSchema> = {
                del: false
            };
            const options: FindOptions<I.IUserSchema> = {
                skip, limit
            };
            return this.#collection
                .find(filter, options)
                .toArray()
                .then((models) => models.map((data) => new UserModel(data)));
        } catch (e: MongoError | unknown) {
            HandleMongoError(e);
            throw e;
        }
    }

}
