"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../utilities/config");
const user_model_1 = __importDefault(require("../models/user.model"));
const error_handler_1 = require("../utilities/errors/error.handler");
const mongodb_1 = require("mongodb");
class UserRepository {
    #collection;
    constructor(db) {
        this.#collection = db.collection(config_1.config.DB_USER_COLLECTION);
    }
    async create(d) {
        const doc = {
            w: Buffer.from(d.wallet.replace(/^0x/, ''), 'hex'),
            n: Buffer.from(d.name),
            r: new mongodb_1.ObjectId(d.role),
            bal: BigInt(0),
            ban: false,
            img: Buffer.from(d.image),
            imgs: [Buffer.from(d.image)],
            cid: Buffer.from(d.clerkId),
            oo: { th: [], bo: [], bc: [] },
            srids: { ch: null, vo: null, tx: null, ss: null },
            ca: Math.floor(new Date().getTime() / 1000),
            up: Math.floor(new Date().getTime() / 1000),
            del: false,
        };
        return this.#collection.insertOne(doc)
            .then((res) => res.insertedId
            ? new user_model_1.default({ ...doc, _id: res.insertedId })
            : null)
            .catch((e) => {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getTotalCount() {
        return this.#collection.countDocuments({ del: false })
            .catch((e) => {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        });
    }
    async delete(param) {
        const filter = { $match: { del: true } };
        (param.length === 24) ? filter.$match._id = new mongodb_1.ObjectId(param)
            : filter.$match.w = Buffer.from(param.replace(/^0x/, ''), 'hex');
        const update = {
            $set: { del: true, up: Math.floor(new Date().getTime() / 1000) }
        };
        const options = {
            returnDocument: 'after'
        };
        return this.#collection
            .findOneAndUpdate(filter, update, options)
            .then((res) => res
            ? new user_model_1.default(res)
            : null).catch((e) => {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        });
    }
    async update(param, d) {
        const filter = { $match: { del: false } };
        (param.length === 24) ? filter.$match._id = new mongodb_1.ObjectId(param)
            : filter.$match.w = Buffer.from(param.replace(/^0x/, ''), 'hex');
        const update = {
            $set: { up: Math.floor(new Date().getTime() / 1000) }
        };
        const options = {
            returnDocument: 'after'
        };
        if (d.name)
            Object.assign(update.$set, { n: Buffer.from(d.name) });
        if (d.wallet)
            Object.assign(update.$set, { w: Buffer.from(d.wallet.replace(/^0x/, '')) }, 'hex');
        if (d.image)
            Object.assign(update.$set, { img: Buffer.from(d.image) });
        if (d.images)
            Object.assign(update.$set, { imgs: (d.images).map((img) => Buffer.from(img)) });
        return this.#collection
            .findOneAndUpdate(filter, update, options)
            .then((res) => res
            ? new user_model_1.default(res)
            : null).catch((e) => {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getOneById(param) {
        const filter = { del: false };
        (param.length === 24) ? filter.$match._id = new mongodb_1.ObjectId(param)
            : filter.$match.w = Buffer.from(param.replace(/^0x/, ''), 'hex');
        return this.#collection
            .findOne(filter)
            .then((res) => res
            ? new user_model_1.default(res)
            : null).catch((e) => {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getMany(skip, limit) {
        try {
            return this.#collection
                .find({ del: false }, { skip, limit })
                .toArray()
                .then((models) => models.map((data) => new user_model_1.default(data)));
        }
        catch (e) {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        }
    }
    async addReferenceId(param, service, refId) {
        try {
            const filter = { del: false };
            (param.length === 24) ? filter.$match._id = new mongodb_1.ObjectId(param)
                : filter.$match.w = Buffer.from(param.replace(/^0x/, ''), 'hex');
            const update = {
                $set: { up: Math.floor(new Date().getTime() / 1000) }
            };
            if (service === 'stats')
                update.$set['srids.ss'] = refId;
            if (service === 'chat')
                update.$set['srids.ch'] = refId;
            if (service === 'trans')
                update.$set['srids.tx'] = refId;
            if (service === 'voter')
                update.$set['srids.vo'] = refId;
            return this.#collection
                .updateOne(filter, update)
                .then((res) => !!res.modifiedCount);
        }
        catch (e) {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        }
    }
    async assignOwnership(param, type, refId) {
        try {
            const filter = { del: false };
            (param.length === 24) ? filter.$match._id = new mongodb_1.ObjectId(param)
                : filter.$match.w = Buffer.from(param.replace(/^0x/, ''), 'hex');
            let update = null;
            if (type === 'thread')
                update = { $push: { 'oo.th': new mongodb_1.ObjectId(refId) } };
            if (type === 'bounty')
                update = { $push: { 'oo.bo': new mongodb_1.ObjectId(refId) } };
            if (type === 'bcData')
                update = { $push: { 'oo.bc': new mongodb_1.ObjectId(refId) } };
            if (!update)
                return false;
            return this.#collection
                .updateOne(filter, update)
                .then((res) => !!res.modifiedCount);
        }
        catch (e) {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        }
    }
}
exports.default = UserRepository;
