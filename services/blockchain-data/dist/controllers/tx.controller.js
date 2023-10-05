"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var _TxController_repository, _TxController_web3;
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
const zod = __importStar(require("../validation/zod"));
const error_handler_1 = require("../utilities/errors/error.handler");
const web3_1 = require("web3");
const functions_1 = require("../utilities/functions");
class TxController {
    constructor(repository, web3) {
        _TxController_repository.set(this, void 0);
        _TxController_web3.set(this, void 0);
        __classPrivateFieldSet(this, _TxController_repository, repository, "f");
        __classPrivateFieldSet(this, _TxController_web3, web3, "f");
    }
    async getTxById(r, w) {
        try {
            const hash = zod.txHashSchema.parse(r.params?.hash);
            const tx = await __classPrivateFieldGet(this, _TxController_repository, "f").getTx(hash);
            if (tx) {
                w.status(http_status_codes_1.default.OK).json(tx.getTx()).end();
                return console.table(tx.rawTx());
            }
            else
                console.log('[NOT FOUND IN DB]');
            const newTx = await __classPrivateFieldGet(this, _TxController_web3, "f").eth.getTransaction(__classPrivateFieldGet(this, _TxController_web3, "f").utils.hexToBytes(hash), web3_1.DEFAULT_RETURN_FORMAT);
            if (newTx) {
                w.status(http_status_codes_1.default.OK).json((0, functions_1.prepare_to_stringify)(newTx)).end();
                // @ts-ignore
                await __classPrivateFieldGet(this, _TxController_repository, "f").saveTx(newTx);
                return console.table(newTx);
            }
            w.status(http_status_codes_1.default.NOT_FOUND).end();
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
}
_TxController_repository = new WeakMap(), _TxController_web3 = new WeakMap();
exports.default = TxController;
