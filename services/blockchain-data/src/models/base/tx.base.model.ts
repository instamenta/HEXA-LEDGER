import * as I from "../../types/types";

export default class BaseTxModel {
    bh: Buffer;
    bn: bigint;
    ci: bigint;
    fr: Buffer;
    ga: bigint;
    gp: bigint;
    h: Buffer;
    i: Buffer;
    n: bigint;
    r: Buffer;
    s: Buffer;
    to: Buffer;
    ti: bigint;
    t: bigint;
    v: bigint;
    val: bigint;
    d: Buffer;

    constructor(props: I.ITxModel) {
        Object.keys(props).forEach((k) => {
            if ('' + k in this) this['' + k] = props[k];
        });
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
        return this.val.toString();
    }

    get data(): string {
        return '0x' + this.d.toString('hex');
    }

}