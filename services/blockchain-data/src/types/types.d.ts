import {Address} from "web3-types/src/eth_types";

export interface TxObject {
    blockHash: string;
    blockNumber: bigint;
    chainId: bigint;
    from: string;
    gas: bigint;
    gasPrice: bigint;
    hash: string;
    input: string;
    nonce: bigint;
    r: string;
    s: string;
    to: string;
    transactionIndex: bigint;
    type: bigint;
    v: bigint;
    value: bigint;
    data: string;
}

export interface ITxModel {
    bh: Buffer
    bn: bigint
    ci: bigint
    fr: Buffer
    ga: bigint
    gp: bigint
    h: Buffer
    i: Buffer
    n: bigint
    r: Buffer
    s: Buffer
    to: Buffer
    ti: bigint
    t: bigint
    v: bigint
    va: bigint
    d: Buffer
}

interface ORawTx {
    blockHash: string
    blockNumber: bigint
    chainId: bigint
    from: string
    gas: bigint
    gasPrice: bigint
    hash: string
    input: string
    nonce: bigint
    r: string
    s: string
    to: string
    transactionIndex: bigint
    type: bigint
    v: bigint
    value: bigint
    data: string
}

interface OGetTx {
    blockHash: string
    data: string
    index: string
    type: string
    nonce: string
    input: string
    r: string
    s: string
    chainId: string
    v: string
    blockNumber: string
    gas: string
    from: string
    to: string
    value: string
    hash: string
    gasPrice: string
}

interface IAddressBalance {
    a: Buffer,
    bs: {
        b: bigint,
        d: Date
    }[],
}

interface OAddressBalance {
    address: string,
    balance: bigint,
}

// IReceiptModel.ts
import { ObjectId } from 'mongodb';

export interface IReceiptModel {
    _id: ObjectId;
    h: Buffer; // transactionHash
    i: number; // transactionIndex
    bh: Buffer; // blockHash
    nn: number; // blockNumber
    fr: Buffer; // from
    to: Buffer; // to
    cgu: number; // cumulativeGasUsed
    gu: number; // gasUsed
    egp: number | undefined; // effectiveGasPrice
    ca: string | undefined; // contractAddress
    l: any[]; // logs
    lb: Buffer; // logsBloom
    r: Buffer; // root
    s: number; // status
    t: number; // type
}

export interface ReceiptObject {
    transactionHash: string;
    transactionIndex: number;
    blockHash: string;
    blockNumber: number;
    from: string;
    to: string;
    cumulativeGasUsed: number;
    gasUsed: number;
    effectiveGasPrice?: number;
    contractAddress?: string;
    logs: any[];
    logsBloom: string;
    root: string;
    status: number;
    type: number;
}
