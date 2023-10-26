"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _WalletRepository_collection;
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../utilities/config");
class WalletRepository {
    constructor(db) {
        _WalletRepository_collection.set(this, void 0);
        __classPrivateFieldSet(this, _WalletRepository_collection, db.collection(config_1.config.DB_AUTH_COLLECTION), "f");
    }
}
_WalletRepository_collection = new WeakMap();
exports.default = WalletRepository;
