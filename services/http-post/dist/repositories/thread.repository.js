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
            o: Buffer.from(d.owner, 'hex'),
            p: [{
                    promoter: Buffer.from(d.owner, 'hex'),
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
        return this.collection.insertOne(record)
            .then((res) => res.insertedId
            ? new thread_model_1.default({ ...record, _id: res.insertedId })
            : null)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async deleteById(postId) {
        const filter = {
            $match: { _id: new mongodb_1.ObjectId(postId), del: true }
        };
        const update = {
            $set: { del: true, up: Math.floor(new Date().getTime() / 1000) }
        };
        const options = {
            returnDocument: 'after'
        };
        return this.collection.findOneAndUpdate(filter, update, options)
            .then((res) => res
            ? new thread_model_1.default(res)
            : null)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async update(postId, d) {
        const filter = {
            $match: { _id: new mongodb_1.ObjectId(postId), del: false }
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
        return this.collection.findOneAndUpdate(filter, update, options)
            .then((res) => res
            ? new thread_model_1.default(res)
            : null)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getOneById(postId) {
        const filter = {
            _id: new mongodb_1.ObjectId(postId), del: false
        };
        return this.collection.findOne(filter)
            .then((res) => res
            ? new thread_model_1.default(res)
            : null)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getMany(skip, limit) {
        try {
            return this.collection.find()
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
    async getByOwner(ownerId, skip, limit) {
        const filter = {
            o: Buffer.from(ownerId, 'hex'), del: false
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
    async promote(postId, authId, amount) {
        const filter = {
            _id: new mongodb_1.ObjectId(postId), del: false
        };
        const update = {
            $push: {
                p: {
                    promoter: Buffer.from(authId, 'hex'),
                    date: new Date().getTime() / 1000,
                    amount: +amount,
                }
            }
        };
        return this.collection.updateOne(filter, update)
            .then((res) => !!res.modifiedCount)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async donate(postId, authId, amount) {
        const filter = {
            _id: new mongodb_1.ObjectId(postId), del: false
        };
        const update = {
            $push: {
                do: {
                    donator: Buffer.from(authId, 'hex'),
                    date: new Date().getTime() / 1000,
                    amount: +amount,
                }
            }
        };
        return this.collection.updateOne(filter, update)
            .then((res) => !!res.modifiedCount)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async transferOwnership(postId, authId, newOwner) {
        const filter = {
            _id: new mongodb_1.ObjectId(postId),
            o: Buffer.from(authId, 'hex'),
            del: false,
        };
        const update = {
            $set: { o: Buffer.from(newOwner, 'hex') }
        };
        return this.collection.updateOne(filter, update)
            .then((res) => !!res.modifiedCount)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async like(postId, authId) {
        const filter = {
            _id: new mongodb_1.ObjectId(postId),
            $ne: { o: Buffer.from(authId, 'hex') },
            del: false,
        };
        const update = {
            $addToSet: { li: Buffer.from(authId, 'hex') },
            $pull: { di: Buffer.from(authId, 'hex') }
        };
        return this.collection.updateOne(filter, update)
            .then((res) => !!res.modifiedCount)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async dislike(postId, authId) {
        const filter = {
            _id: new mongodb_1.ObjectId(postId),
            $ne: { o: Buffer.from(authId, 'hex') },
            del: false,
        };
        const update = {
            $addToSet: { di: Buffer.from(authId, 'hex') },
            $pull: { li: Buffer.from(authId, 'hex') }
        };
        return this.collection.updateOne(filter, update)
            .then((res) => !!res.modifiedCount)
            .catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
}
exports.default = ThreadRepository;
