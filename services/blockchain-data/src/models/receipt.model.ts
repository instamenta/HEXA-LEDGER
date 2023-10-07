import type * as I from '../types/types';

export default class ReceiptModel {
    private h: Buffer; // transactionHash
    private i: number; // transactionIndex
    private bh: Buffer; // blockHash
    private nn: number; // blockNumber
    private fr: Buffer; // from
    private to: Buffer; // to
    private cgu: number; // cumulativeGasUsed
    private gu: number; // gasUsed
    private egp: number | undefined; // effectiveGasPrice
    private ca: string | undefined; // contractAddress
    private l: any[]; // logs
    private lb: Buffer; // logsBloom
    private r: Buffer; // root
    private s: number; // status
    private t: number; // type

    constructor(props: I.IReceiptModel) {
        this.h = props.h;
        this.i = props.i;
        this.bh = props.bh;
        this.nn = props.nn;
        this.fr = props.fr;
        this.to = props.to;
        this.cgu = props.cgu;
        this.gu = props.gu;
        this.egp = props.egp;
        this.ca = props.ca;
        this.l = props.l;
        this.lb = props.lb;
        this.r = props.r;
        this.s = props.s;
        this.t = props.t;
    }

    get transactionHash(): string {
        return '0x' + this.h.toString('hex');
    }

    get transactionIndex(): number {
        return this.i;
    }

    get blockHash(): string {
        return '0x' + this.bh.toString('hex');
    }

    get blockNumber(): number {
        return this.nn;
    }

    get from(): string {
        return '0x' + this.fr.toString('hex');
    }

    get toAddress(): string {
        return '0x' + this.to.toString('hex');
    }

    get cumulativeGasUsed(): number {
        return this.cgu;
    }

    get gasUsed(): number {
        return this.gu;
    }

    get effectiveGasPrice(): number | undefined {
        return this.egp;
    }

    get contractAddress(): string | undefined {
        return this.ca;
    }

    get logs(): any[] {
        return this.l;
    }

    get logsBloom(): string {
        return '0x' + this.lb.toString('hex');
    }

    get root(): string {
        return '0x' + this.r.toString('hex');
    }

    get status(): number {
        return this.s;
    }

    get type(): number {
        return this.t;
    }
}
