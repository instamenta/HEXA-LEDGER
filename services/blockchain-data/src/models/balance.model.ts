import type * as I from '../types/types';

export default class BalanceModel {
    private a: Buffer;
    private bs: { b: bigint; d: Date }[];

    constructor(props: I.IAddressBalance) {
        this.a = props.a;
        this.bs = props.bs;
    }

    get address(): string {
        return '0x' + this.a.toString('hex');
    }

    get latestBalance(): { balance: string, date: string } {
        return {
            balance: this.bs[0].b.toString(),
            date: this.bs[0].d.toISOString()
        };
    }

    getAddressBalance(): { balance: string, date: string, address: string } {
        const balance = this.latestBalance;
        return {
            balance: balance.balance,
            date: balance.date,
            address: this.address,
        };
    }

    getAddressBalanceRaw(): { balance: bigint, date: Date, address: string } {
        return {
            balance: this.bs[0].b,
            date: this.bs[0].d,
            address: this.address,
        };
    }

}