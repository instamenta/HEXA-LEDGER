"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseTxModel {
    constructor(props) {
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
    get hash() {
        return '0x' + this.h.toString('hex');
    }
    get blockHash() {
        return '0x' + this.bh.toString('hex');
    }
    get blockNumber() {
        return this.bn.toString();
    }
    get chainId() {
        return this.ci.toString();
    }
    get from() {
        return '0x' + this.fr.toString('hex');
    }
    get gas() {
        return this.ga.toString();
    }
    get gasPrice() {
        return this.gp.toString();
    }
    get input() {
        return '0x' + this.i.toString('hex');
    }
    get nonce() {
        return this.n.toString();
    }
    get _r() {
        return '0x' + this.r.toString('hex');
    }
    get _s() {
        return '0x' + this.s.toString('hex');
    }
    get toAddress() {
        return '0x' + this.to.toString('hex');
    }
    get index() {
        return this.ti.toString();
    }
    get type() {
        return this.t.toString();
    }
    get _v() {
        return this.v.toString();
    }
    get value() {
        return this.va.toString();
    }
    get data() {
        return '0x' + this.d.toString('hex');
    }
}
exports.default = BaseTxModel;
