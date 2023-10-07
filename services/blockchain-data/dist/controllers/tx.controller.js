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
var _TxController_web3, _TxController_txRepository, _TxController_balanceRepository;
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
const zod = __importStar(require("../validation/zod"));
const error_handler_1 = require("../utilities/errors/error.handler");
const web3_1 = require("web3");
const balance_model_1 = __importDefault(require("../models/balance.model"));
class TxController {
    constructor(web3, txRepository, balanceRepository) {
        _TxController_web3.set(this, void 0);
        _TxController_txRepository.set(this, void 0);
        _TxController_balanceRepository.set(this, void 0);
        __classPrivateFieldSet(this, _TxController_web3, web3, "f");
        __classPrivateFieldSet(this, _TxController_txRepository, txRepository, "f");
        __classPrivateFieldSet(this, _TxController_balanceRepository, balanceRepository, "f");
    }
    async getTransactionByHash(r, w) {
        try {
            let hash = zod.transactionHashSchema.parse(r.params?.hash);
            if (!hash.startsWith('0x'))
                hash = '0x' + hash;
            const transaction = await __classPrivateFieldGet(this, _TxController_txRepository, "f").getTransaction(hash);
            if (transaction) {
                w.status(http_status_codes_1.default.OK).json(transaction.getTransaction()).end();
                return console.table(transaction.getTransaction());
            }
            else
                console.log('[NOT FOUND IN DB]');
            const newTransaction = await __classPrivateFieldGet(this, _TxController_web3, "f").eth.getTransaction(__classPrivateFieldGet(this, _TxController_web3, "f").utils.hexToBytes(hash), web3_1.DEFAULT_RETURN_FORMAT);
            if (newTransaction) {
                w.status(http_status_codes_1.default.OK).json(newTransaction).end();
                // @ts-ignore
                await __classPrivateFieldGet(this, _TxController_txRepository, "f").saveTx(newTransaction);
                console.table(newTransaction);
            }
            else
                w.status(http_status_codes_1.default.NOT_FOUND).end();
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getBalanceByAddress(r, w) {
        try {
            let address = zod.addressSchema.parse(r.params?.address);
            if (!address.startsWith('0x'))
                address = '0x' + address;
            let balance = await __classPrivateFieldGet(this, _TxController_balanceRepository, "f")
                .getAddressBalance(address);
            if (balance) {
                w.status(http_status_codes_1.default.OK).json(balance.getAddressBalance()).end();
                return console.table(balance.getAddressBalanceRaw());
            }
            else
                console.log('[NOT FOUND IN DB]');
            balance = await __classPrivateFieldGet(this, _TxController_web3, "f").eth.getBalance(address);
            if (balance) {
                const model = new balance_model_1.default({
                    a: Buffer.from(address.replace(/^0x/, ''), 'hex'),
                    bs: [{ b: balance, d: new Date() }]
                });
                w.status(http_status_codes_1.default.OK).json(model.getAddressBalance()).end();
                await __classPrivateFieldGet(this, _TxController_balanceRepository, "f").saveAddressBalance({ address, balance });
                console.table(model.getAddressBalance());
            }
            else
                w.status(http_status_codes_1.default.NOT_FOUND).end();
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getTransactionReceiptByHash(r, w) {
        try {
            let hash = zod.transactionHashSchema.parse(r.params?.hash);
            if (!hash.startsWith('0x'))
                hash = '0x' + hash;
            // const transaction = await this.#txRepository.getTransaction(hash);
            // if (transaction) {
            //     w.status(StatusCode.OK).json(transaction.getTransaction()).end();
            //     return console.table(transaction.getTransaction());
            // } else console.log('[NOT FOUND IN DB]');
            const newReceipt = await __classPrivateFieldGet(this, _TxController_web3, "f").eth.getTransactionReceipt(__classPrivateFieldGet(this, _TxController_web3, "f").utils.hexToBytes(hash));
            console.table(newReceipt);
            // if (newTransaction) {
            //     w.status(StatusCode.OK).json(newTransaction).end();
            //     // @ts-ignore
            //     await this.#txRepository.saveTx(newTransaction);
            //     console.table(newTransaction);
            // } else w.status(StatusCode.NOT_FOUND).end();
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
}
_TxController_web3 = new WeakMap(), _TxController_txRepository = new WeakMap(), _TxController_balanceRepository = new WeakMap();
exports.default = TxController;
