import {ObjectId, WithId} from 'mongodb';

export interface IWalletSchema {
    w: Buffer,
    b: bigint
}

export interface OWalletWithId {
    wallet: string,
    balance: bigint,
    _id: ObjectId
}

export interface WalletModel {
    id: string
    address: string,
    balance: string,
    ether: string,
}