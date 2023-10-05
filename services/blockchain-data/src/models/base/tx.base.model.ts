import * as I from "../../types/types";

export default class BaseTxModel {
     protected bh: Buffer; //! blockHash
     protected bn: bigint; //! blockNumber
     protected ci: bigint; //! chainId
     protected fr: Buffer; //! from
     protected ga: bigint; //! gas
     protected gp: bigint; //! gasPrice
     protected h: Buffer;  //! hash
     protected i: Buffer;  //! input
     protected n: bigint;  //! nonce
     protected r: Buffer;  //! r
     protected s: Buffer;  //! s
     protected to: Buffer; //! to
     protected ti: bigint; //! transactionIndex
     protected t: bigint;  //! type
     protected v: bigint;  //! v
     protected va: bigint;//! value
     protected d: Buffer;  //! data

    constructor(props: I.ITxModel) {
        this.bh = props.bh;
        this.bn = props.bn;
        this.ci = props.ci;
        this.fr = props.fr;
        this.ga = props.ga;
        this.gp = props.gp;
        this.h = props.h;
        this.i = props.i;
        this.n = props.n;
        this.r = props.r;
        this.s = props.s;
        this.to = props.to;
        this.ti = props.ti;
        this.t = props.t;
        this.v = props.v;
        this.va = props.va;
        this.d = props.d;
    }

    get hash(): string {
        return '0x' + this.h.toString('hex');
    }

    get blockHash(): string {
        return '0x' + this.bh.toString('hex');
    }

    get blockNumber(): string {
        return this.bn.toString();
    }

    get chainId(): string {
        return this.ci.toString();
    }

    get from(): string {
        return '0x' + this.fr.toString('hex');
    }

    get gas(): string {
        return this.ga.toString();
    }

    get gasPrice(): string {
        return this.gp.toString();
    }

    get input(): string {
        return '0x' + this.i.toString('hex');
    }

    get nonce(): string {
        return this.n.toString();
    }

    get _r(): string {
        return '0x' + this.r.toString('hex');
    }

    get _s(): string {
        return '0x' + this.s.toString('hex');
    }

    get toAddress(): string {
        return '0x' + this.to.toString('hex');
    }

    get index(): string {
        return this.ti.toString();
    }

    get type(): string {
        return this.t.toString();
    }

    get _v(): string {
        return this.v.toString();
    }

    get value(): string {
        return this.va.toString();
    }

    get data(): string {
        return '0x' + this.d.toString('hex');
    }

}