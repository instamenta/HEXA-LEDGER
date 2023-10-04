
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
}

interface OProperGetTx {
    blockNumber: bigint;
    chainId: bigint;
    gas: bigint;
    gasPrice: bigint;
    nonce: bigint;
    index: bigint;
    type: bigint;
    v: bigint;
    value: bigint;
    blockHash: string;
    hash: string;
    from: string;
    _r: string;
    _s: string;
    toAddress: string;
    input: string;
    data: string;
}

interface OPrepareTx {
    blockNumber: string;
    chainId: string;
    gas: string;
    gasPrice: string;
    nonce: string;
    ti: string;
    t: string;
    v: string;
    val: string;
    blockHash: string;
    hash: string;
    from: string;
    _r: string;
    _s: string;
    toAddress: string;
    input: string;
    data: string;
}