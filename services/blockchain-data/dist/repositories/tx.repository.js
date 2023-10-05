"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _TxRepository_collection;
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../utilities/config");
const error_handler_1 = require("../utilities/errors/error.handler");
const tx_model_1 = __importDefault(require("../models/tx.model"));
class TxRepository {
    constructor(db) {
        _TxRepository_collection.set(this, void 0);
        __classPrivateFieldSet(this, _TxRepository_collection, db.collection(config_1.config.DB_THREADS_COLLECTION), "f");
    }
    async saveTx(d) {
        const record = {
            bh: Buffer.from(d.blockHash.replace(/^0x/, ''), 'hex'),
            bn: d.blockNumber,
            ci: d.chainId,
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
        return __classPrivateFieldGet(this, _TxRepository_collection, "f")
            .insertOne(record)
            .then(() => true)
            .catch((e) => {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getTx(hash) {
        const filter = {
            h: Buffer.from(hash.replace(/^0x/, ''), 'hex')
        };
        return __classPrivateFieldGet(this, _TxRepository_collection, "f").findOne(filter)
            .then(tx => tx ? new tx_model_1.default(tx) : null)
            .catch((e) => {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        });
    }
    async countTx() {
        return __classPrivateFieldGet(this, _TxRepository_collection, "f").countDocuments()
            .then(count => count ? count : null)
            .catch((e) => {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        });
    }
}
_TxRepository_collection = new WeakMap();
exports.default = TxRepository;
