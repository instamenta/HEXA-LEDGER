import BaseTxModel from "./base/tx.base.model";
import * as I from "../types/types";

export default class TxModel extends BaseTxModel {

    constructor(props: I.ITxModel) {
        super(props);
    }

    get(): I.OGetTx {
        return {
            hash: this.hash,
            blockHash: this.blockHash,
            blockNumber: this.blockNumber,
            chainId: this.chainId,
            from: this.from,
            gas: this.gas,
            gasPrice: this.gasPrice,
            input: this.input,
            nonce: this.nonce,
            r: this._r,
            s: this._s,
            toAddress: this.toAddress,
            transactionIndex: this.index,
            transactionType: this.type,
            v: this._v,
            value: this.value,
            data: this.data,
        };
    }

    prepare(): I.OPrepareTx {
        return {
            bh: this.blockHash,
            bn: this.blockNumber,
            ci: this.chainId,
            fr: this.from,
            ga: this.gas,
            gp: this.gasPrice,
            h: this.hash,
            i: this.input,
            n: this.nonce,
            r: this._r,
            s: this._s,
            to: this.toAddress,
            ti: this.index,
            t: this.type,
            v: this._v,
            val: this.value,
            d: this.data,
        };

}