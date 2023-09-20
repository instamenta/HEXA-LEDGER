"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const thread_model_1 = __importDefault(require("../models/thread.model"));
const error_handlers_1 = require("../utilities/error.handlers");
class ThreadRepository {
    collection;
    constructor(db) {
        this.collection = db.collection('threads');
    }
    async create(d) {
        const record = {
            n: Buffer.from(d.name),
            des: Buffer.from(d.description),
            c: Buffer.from(d.content),
            o: new mongodb_1.ObjectId(d.owner),
            p: [{ promoter: new mongodb_1.ObjectId(d.owner), date: new Date(), amount: d.promoted }],
            i: d.images.map((img) => Buffer.from(img)),
            t: d.tags.map((tag) => Buffer.from(tag)),
            ca: new Date(), up: new Date(),
            do: [], li: [], di: [],
            del: false,
        };
        return this.collection.insertOne(record).then((res) => res.insertedId
            ? new thread_model_1.default({ ...record, _id: res.insertedId })
            : null).catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async deleteById(postId) {
        const filter = {
            $match: { _id: new mongodb_1.ObjectId(postId), del: true }
        };
        const update = {
            $set: { del: true, up: new Date() }
        };
        const options = {
            returnDocument: 'after'
        };
        return this.collection.findOneAndUpdate(filter, update, options).then((res) => res
            ? new thread_model_1.default(res)
            : null).catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async update(postId, d) {
        const filter = {
            $match: { _id: new mongodb_1.ObjectId(postId), del: false }
        };
        const update = {
            $set: { up: new Date() }
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
        return this.collection.findOneAndUpdate(filter, update, options).then((res) => res
            ? new thread_model_1.default(res)
            : null).catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getOneById(postId) {
        const filter = {
            _id: new mongodb_1.ObjectId(postId), del: false
        };
        return this.collection.findOne(filter).then((res) => res
            ? new thread_model_1.default(res)
            : null).catch((e) => {
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
    customOne() {
    }
    customMany() {
    }
    promote() {
    }
    transferOwnership() {
    }
    like() {
    }
    dislike() {
    }
}
exports.default = ThreadRepository;
