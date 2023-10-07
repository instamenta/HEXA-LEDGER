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
var _BalanceRepository_collection;
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../utilities/config");
const error_handler_1 = require("../utilities/errors/error.handler");
const balance_model_1 = __importDefault(require("../models/balance.model"));
class BalanceRepository {
    constructor(db) {
        _BalanceRepository_collection.set(this, void 0);
        __classPrivateFieldSet(this, _BalanceRepository_collection, db.collection(config_1.config.DB_BALANCE_COLLECTION), "f");
    }
    async saveAddressBalance(d) {
        const record = {
            a: Buffer.from(d.address.replace(/^0x/, ''), 'hex'),
            bs: [{
                    b: d.balance,
                    d: new Date(),
                }]
        };
        return __classPrivateFieldGet(this, _BalanceRepository_collection, "f")
            .insertOne(record)
            .then(() => true)
            .catch((e) => {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        });
    }
    async getAddressBalance(address) {
        const filter = {
            a: Buffer.from(address.replace(/^0x/, ''), 'hex')
        };
        return __classPrivateFieldGet(this, _BalanceRepository_collection, "f").findOne(filter)
            .then(d => d ? new balance_model_1.default(d) : null)
            .catch((e) => {
            (0, error_handler_1.HandleMongoError)(e);
            throw e;
        });
    }
}
_BalanceRepository_collection = new WeakMap();
exports.default = BalanceRepository;
