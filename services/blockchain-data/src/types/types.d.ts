
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