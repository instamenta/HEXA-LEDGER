"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tx_base_model_1 = __importDefault(require("./base/tx.base.model"));
class TxModel extends tx_base_model_1.default {
    constructor(props) {
        super(props);
    }
    getTransaction() {
        return {
            blockHash: this.blockHash,
            blockNumber: this.blockNumber,
            chainId: this.chainId,
            from: this.from,
            gas: this.gas,
            gasPrice: this.gasPrice,
            hash: this.hash,
            input: this.input,
            nonce: this.nonce,
            r: this._r,
            s: this._s,
            to: this.toAddress,
            index: this.index,
            type: this.type,
            v: this._v,
            value: this.value,
            data: this.data,
        };
    }
    getTransactionRaw() {
        return {
            blockHash: this.blockHash,
            blockNumber: this.bn,
            chainId: this.ci,
            from: this.from,
            gas: this.ga,
            gasPrice: this.gp,
            hash: this.hash,
            input: this.input,
            nonce: this.n,
            r: this._r,
            s: this._s,
            to: this.toAddress,
            transactionIndex: this.ti,
            type: this.t,
            v: this.v,
            value: this.va,
            data: this.data,
        };
    }
}
exports.default = TxModel;
