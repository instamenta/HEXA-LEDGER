"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const thread_model_1 = __importDefault(require("../models/thread.model"));
const error_handlers_1 = require("../utilities/error.handlers");
const config_1 = require("../utilities/config");
const mongodb_1 = require("mongodb");
class ThreadRepository {
    collection;
    constructor(db) {
        this.collection = db.collection(config_1.config.DB_THREADS_COLLECTION);
    }
    async create(d) {
        const record = {
            n: Buffer.from(d.name),
            des: Buffer.from(d.description),
            c: Buffer.from(d.content),
            o: Buffer.from(d.owner.replace(/^0x/, ''), 'hex'),
            p: [{
                    promoter: Buffer.from(d.owner.replace(/^0x/, ''), 'hex'),
                    date: Math.floor(new Date().getTime() / 1000),
                    amount: d.promoted
                }],
            i: d.images.map((img) => Buffer.from(img)),
            t: d.tags.map((tag) => Buffer.from(tag)),
            ca: Math.floor(new Date().getTime() / 1000),
            up: Math.floor(new Date().getTime() / 1000),
            do: [], li: [], di: [],
            del: false,
        };
        return this.collection
            .insertOne(record)
            .then((res) => res.insertedId
            ? new thread_model_1.default({ ...record, _id: res.insertedId })
            : null)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async deleteById(threadId) {
        const filter = {
            $match: { _id: new mongodb_1.ObjectId(threadId), del: true }
        };
        const update = {
            $set: { del: true, up: Math.floor(new Date().getTime() / 1000) }
        };
        const options = {
            returnDocument: 'after'
        };
        return this.collection
            .findOneAndUpdate(filter, update, options)
            .then((res) => res
            ? new thread_model_1.default(res)
            : null).catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async update(threadId, d) {
        const filter = {
            $match: { _id: new mongodb_1.ObjectId(threadId), del: false }
        };
        const update = {
            $set: { up: Math.floor(new Date().getTime() / 1000) }
        };
        const options = {
            returnDocument: 'after'
        };
        if (d.name)
            Object.assign(update.$set, { n: Buffer.from(d.name) });
        if (d.description)
            Object.assign(update.$set, { des: Buffer.from(d.description) });
        if (d.content)
            Object.assign(update.$set, { c: Buffer.from(d.content) });
        if (d.images)
            Object.assign(update.$set, {
                i: (d.images).map((img) => Buffer.from(img))
            });
        if (d.tags)
            Object.assign(update.$set, {
                t: (d.tags).map((tag) => Buffer.from(tag))
            });
        return this.collection
            .findOneAndUpdate(filter, update, options)
            .then((res) => res
            ? new thread_model_1.default(res)
            : null).catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getOneById(threadId) {
        const filter = {
            _id: new mongodb_1.ObjectId(threadId), del: false
        };
        return this.collection
            .findOne(filter)
            .then((res) => res
            ? new thread_model_1.default(res)
            : null).catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getMany(skip, limit) {
        try {
            const filter = {
                del: false
            };
            const options = {
                skip, limit
            };
            return this.collection
                .find(filter, options)
                .toArray()
                .then((models) => models.map((data) => new thread_model_1.default(data)));
        }
        catch (e) {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        }
    }
    async getByOwner(ownerAddr, skip, limit) {
        const filter = {
            o: Buffer.from(ownerAddr.replace(/^0x/, ''), 'hex'), del: false
        };
        const options = {
            skip, limit,
        };
        return this.collection
            .find(filter, options)
            .toArray()
            .then((models) => models.map((data) => new thread_model_1.default(data)))
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async like(threadId, wallet) {
        const filter = {
            _id: new mongodb_1.ObjectId(threadId),
            $ne: { o: Buffer.from(wallet.replace(/^0x/, ''), 'hex') },
            del: false,
        };
        const update = {
            $addToSet: { li: Buffer.from(wallet.replace(/^0x/, ''), 'hex') },
            $pull: { di: Buffer.from(wallet.replace(/^0x/, ''), 'hex') }
        };
        return this.collection
            .updateOne(filter, update)
            .then((res) => !!res.modifiedCount)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async dislike(threadId, wallet) {
        const filter = {
            _id: new mongodb_1.ObjectId(threadId),
            $ne: { o: Buffer.from(wallet.replace(/^0x/, ''), 'hex') },
            del: false,
        };
        const update = {
            $addToSet: { di: Buffer.from(wallet.replace(/^0x/, ''), 'hex') },
            $pull: { li: Buffer.from(wallet.replace(/^0x/, ''), 'hex') }
        };
        return this.collection
            .updateOne(filter, update)
            .then((res) => !!res.modifiedCount)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async promote(threadId, wallet, amount) {
        const filter = {
            _id: new mongodb_1.ObjectId(threadId), del: false
        };
        const update = {
            $push: {
                p: {
                    promoter: Buffer.from(wallet.replace(/^0x/, ''), 'hex'),
                    date: new Date().getTime() / 1000,
                    amount: +amount,
                }
            }
        };
        return this.collection
            .updateOne(filter, update)
            .then((res) => !!res.modifiedCount)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async donate(threadId, wallet, amount) {
        const filter = {
            _id: new mongodb_1.ObjectId(threadId), del: false
        };
        const update = {
            $push: {
                do: {
                    donator: Buffer.from(wallet.replace(/^0x/, ''), 'hex'),
                    date: new Date().getTime() / 1000,
                    amount: +amount,
                }
            }
        };
        return this.collection
            .updateOne(filter, update)
            .then((res) => !!res.modifiedCount)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async transferOwnership(threadId, wallet, newOwner) {
        const filter = {
            _id: new mongodb_1.ObjectId(threadId),
            o: Buffer.from(wallet, 'hex'),
            del: false,
        };
        const update = {
            $set: { o: Buffer.from(newOwner, 'hex') }
        };
        return this.collection
            .updateOne(filter, update)
            .then((res) => !!res.modifiedCount)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getLikes(threadId) {
        const filter = {
            _id: new mongodb_1.ObjectId(threadId), del: false
        };
        const options = {
            projection: { li: 1 }
        };
        return await this.collection
            .findOne(filter, options)
            .then((thread) => thread
            ? thread.li.map((likes) => '0x' + likes.toString('hex'))
            : null).catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getDislikes(threadId) {
        const filter = {
            _id: new mongodb_1.ObjectId(threadId), del: false
        };
        const options = {
            projection: { di: 1 }
        };
        return await this.collection
            .findOne(filter, options)
            .then((thread) => thread
            ? thread.di.map((dislikes) => '0x' + dislikes.toString('hex'))
            : null).catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getStatistics(threadId) {
        try {
            const filter = {
                _id: new mongodb_1.ObjectId(threadId), del: false
            };
            const options = {
                projection: {
                    li: 1, do: 1, p: 1, di: 1
                },
            };
            return await this.collection
                .findOne(filter, options)
                .then((thread) => {
                if (!thread)
                    return null;
                return {
                    likes: thread.li.length,
                    dislikes: thread.di.length,
                    donations: {
                        count: thread.do.length,
                        amount: thread.do.reduce((total, d) => total + d.amount, 0)
                    },
                    promotions: {
                        count: thread.p.length,
                        amount: thread.p.reduce((total, p) => total + p.amount, 0)
                    },
                };
            });
        }
        catch (e) {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        }
    }
    async getMany_$(skip, limit) {
        try {
            const filter = {
                del: false
            };
            const options = {
                skip, limit, // projection: {do: 0, li: 0, di: 0, del: 0}
            };
            return this.collection
                .find(filter, options)
                .stream({
                transform: (doc) => new thread_model_1.default(doc)
            });
        }
        catch (e) {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        }
    }
    async getByOwner_$(ownerAddr, skip, limit) {
        const filter = {
            o: Buffer.from(ownerAddr.replace(/^0x/, ''), 'hex'), del: false
        };
        try {
            return this.collection
                .find(filter)
                .skip(skip)
                .limit(limit)
                .stream({
                transform: (doc) => new thread_model_1.default(doc)
            });
        }
        catch (e) {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        }
    }
}
exports.default = ThreadRepository;
