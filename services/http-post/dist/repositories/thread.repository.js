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
        const doc = {
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
        return await this.collection.insertOne(doc)
            .then(rec => rec.insertedId
            ? new thread_model_1.default({ ...doc, _id: rec.insertedId })
            : null).catch((e) => {
            (0, error_handlers_1.HandleMongoError)(e);
            throw e;
        });
    }
    delete() {
    }
    update() {
    }
    getOne() {
    }
    getMany() {
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
