"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BalanceModel {
    constructor(props) {
        this.a = props.a;
        this.bs = props.bs;
    }
    get address() {
        return '0x' + this.a.toString('hex');
    }
    get latestBalance() {
        return {
            balance: this.bs[0].b.toString(),
            date: this.bs[0].d.toISOString()
        };
    }
    getAddressBalance() {
        const balance = this.latestBalance;
        return {
            balance: balance.balance,
            date: balance.date,
            address: this.address,
        };
    }
    getAddressBalanceRaw() {
        return {
            balance: this.bs[0].b,
            date: this.bs[0].d,
            address: this.address,
        };
    }
}
exports.default = BalanceModel;
