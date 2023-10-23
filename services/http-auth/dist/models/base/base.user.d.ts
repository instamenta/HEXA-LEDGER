/// <reference types="node" />
import { type ObjectId, type WithId } from 'mongodb';
import * as I from '../../types/user';
export default class BaseUser {
    _id: ObjectId;
    w: Buffer;
    n: Buffer;
    r: ObjectId;
    bal: BigInt;
    ban: boolean;
    img: Buffer;
    imgs: Buffer[];
    cid: Buffer;
    oo: {
        th: ObjectId[];
        bo: ObjectId[];
        bc: ObjectId[];
    };
    srids: {
        ch: Buffer | null;
        vo: Buffer | null;
        tx: Buffer | null;
        ss: Buffer | null;
    };
    ca: number;
    up: number;
    del: boolean;
    constructor(props: WithId<I.IUserSchema>);
    get id(): string;
    get wallet(): string;
    get name(): string;
    get balance(): BigInt;
    get image(): string;
    get images(): string[];
    get banned(): boolean;
    get ownerOf(): I.OOwnerOf;
    get referenceIds(): I.OReferenceIds;
    get role(): ObjectId;
    get clerkId(): string;
    get created_at(): Date;
    get updated_at(): Date;
    get deleted(): boolean;
}
