import BaseTxModel from './base/tx.base.model';
import * as I from '../types/types';

export default class TxModel extends BaseTxModel {

    constructor(props: I.ITxModel) {
        super(props);
    }

    public getTransaction(): I.OGetTx {
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

    public getTransactionRaw(): I.ORawTx {
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