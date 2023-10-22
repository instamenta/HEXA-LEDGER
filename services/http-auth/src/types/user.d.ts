import {type ObjectId} from "mongodb";

export interface IUserSchema {
    w: Buffer      //* wallet
    n: Buffer      //* name
    b: Buffer      //* bio
    r: ObjectId    //* role
    bal: BigInt    //* balance
    ban: boolean   //* banned
    img: Buffer    //* image
    imgs: Buffer[] //* images
    cid: Buffer  //* clerkId
    oo: {    //* ownerOf
        th: ObjectId[] //* thread
        bo: ObjectId[] //* bounty
        bc: ObjectId[]  //* bcData
    },
    srids: { //* referenceIds
        ch: Buffer | null //* chat - service id reference
        vo: Buffer | null //* voter - service id reference
        tx: Buffer | null //* trans - service id reference
        ss: Buffer | null //* stats - service id reference
    },
    ca: number   //* createdAt
    up: number   //* updatedAt
    del: boolean //* deleted
}

export interface OUserModel {
    wallet: string
    name: string
    bio: string
    role: ObjectId
    balance: BigInt
    banned: boolean
    image: string
    images: string[]
    clerkId: string
    ownerOf: {
        thread: ObjectId[]
        bounty: ObjectId[]
        bcData: ObjectId[]
    },
    referenceIds: {
        chat: string | null
        voter: string | null
        trans: string | null
        stats: string | null
    }
    createdAt: Date
    updatedAt: Date
    deleted: boolean
}


export type IOwnerOf = {
    th: ObjectId[]
    bo: ObjectId[]
    bc: ObjectId[]
};
export type IReferenceIds = {
    ch: Buffer | null,
    vo: Buffer | null,
    tx: Buffer | null,
    ss: Buffer | null,
};

export type OOwnerOf = {
    thread: ObjectId[]
    bounty: ObjectId[]
    bcData: ObjectId[]
};

export type OReferenceIds = {
    chat: string | null,
    voter: string | null,
    trans: string | null,
    stats: string | null,
};

export interface PCreateUser {
    wallet: string,
    name: string,
    bio: string,
    role: string,
    image: string,
    clerkId: string,
}

export interface PUpdateUser {
    wallet: string,
    name: string,
    bio: string,
    image: string,
    images: string[],
}
