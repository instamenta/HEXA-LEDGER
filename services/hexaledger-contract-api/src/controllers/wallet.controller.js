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
var _WalletController_repository, _WalletController_contract, _WalletController_address, _WalletController_vlog;
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
const zod = __importStar(require("../validation/wallet.zod"));
const error_handler_1 = require("../utilities/errors/error.handler");
require("@nomicfoundation/hardhat-ethers");
const hardhat_1 = require("hardhat");
class WalletController {
    constructor(repository, vlogger, contract) {
        _WalletController_repository.set(this, void 0);
        _WalletController_contract.set(this, void 0);
        _WalletController_address.set(this, null);
        _WalletController_vlog.set(this, void 0);
        __classPrivateFieldSet(this, _WalletController_repository, repository, "f");
        __classPrivateFieldSet(this, _WalletController_contract, contract, "f");
        __classPrivateFieldSet(this, _WalletController_vlog, vlogger.getVlogger('UserController'), "f");
        this.assignAddress(contract)
            .then((address) => __classPrivateFieldSet(this, _WalletController_address, address, "f"));
    }
    async assignAddress(contract) {
        return await __classPrivateFieldGet(this, _WalletController_contract, "f").getAddress();
    }
    //
    // public async getBalanceByWallet(
    //     r: Req<{ userId: string }>,
    //     w: Res
    // ): Promise<void> {
    //     this.#vlog.debug({f: 'getBalanceByWallet', m: r.url, d: {body: r.body, param: r.params, query: r.query}});
    //     try {
    //         const {param} = zod.userIdOrWalletParam.parse(r.params);
    //
    //         this.#repository.getOneById(param)
    //             .then((model: UserModel | null) =>
    //                 model instanceof UserModel
    //                     ? w.status(StatusCode.OK)
    //                         .json(model.get()).end()
    //                     : w.status(StatusCode.NOT_FOUND)
    //                         .json('Failed to create').end()
    //             );
    //     } catch (e: Error | ZodError | MongoError | unknown) {
    //         RespondGeneralPurpose(e, w);
    //     }
    // }
    async getContractAddress(r, w) {
        __classPrivateFieldGet(this, _WalletController_vlog, "f").debug({ f: 'getContractAddress', m: r.url, d: { body: r.body, param: r.params, query: r.query } });
        try {
            __classPrivateFieldGet(this, _WalletController_address, "f")
                ? w.status(http_status_codes_1.default.OK).json({ address: __classPrivateFieldGet(this, _WalletController_address, "f") }).end()
                : w.status(http_status_codes_1.default.NOT_FOUND).end();
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
    async getUnsignedTransaction(r, w) {
        __classPrivateFieldGet(this, _WalletController_vlog, "f").debug({ f: 'getUnsignedTransaction', m: r.url, d: { body: r.body, param: r.params, query: r.query } });
        try {
            const amount = r.params?.amount, sender = zod.addressSchema.parse(r.body.sender);
            if (amount === undefined || isNaN(Number(amount)) || parseFloat(amount) < 0) {
                w.status(http_status_codes_1.default.I_AM_A_TEAPOT).end();
                return __classPrivateFieldGet(this, _WalletController_vlog, "f").error({ e: { amount, sender }, f: 'getUnsignedTransaction', m: 'Invalid Amount!' });
            }
            const unsignedTransaction = await __classPrivateFieldGet(this, _WalletController_contract, "f")
                .connect(await hardhat_1.ethers.provider.getSigner(sender))
                .deposit({ value: hardhat_1.ethers.parseEther(amount) });
            w.status(http_status_codes_1.default.OK).json(unsignedTransaction).end();
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
}
_WalletController_repository = new WeakMap(), _WalletController_contract = new WeakMap(), _WalletController_address = new WeakMap(), _WalletController_vlog = new WeakMap();
exports.default = WalletController;
