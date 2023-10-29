import * as I from '../types/types'
import {ObjectId, WithId} from "mongodb";
import {ethers} from "ethers";

export default class WalletModel {
    private readonly _id: ObjectId;
    private readonly b: bigint;
    private readonly w: Buffer;

    constructor(props: WithId<I.IWalletSchema>) {
        this.w = props.w;
        this.b = props.b;
        this._id = props._id;
    }

    get wallet(): string {
        return '0x' + this.w.toString('hex');
    }

    get balance(): string {
        return this.b.toString();
    }

    get id(): string {
        return this._id.toString();
    }

    public get(): I.WalletModel {
        return {
            id: this.id,
            address: this.wallet,
            balance: this.balance,
            ether: ethers.formatEther(this.b)
        }
    }
}