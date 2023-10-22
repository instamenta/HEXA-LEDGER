import {type ObjectId, type WithId} from 'mongodb';
import * as I from '../../types/user';

export default class BaseUser {
    _id: ObjectId
    w: Buffer;     //* wallet
    n: Buffer;     //* name
    b: Buffer;     //* bio
    r: ObjectId;   //* role
    bal: BigInt    //* balance
    ban: boolean;  //* banned
    img: Buffer;   //* image
    imgs: Buffer[] //* images
    cpuid: Buffer; //* clerkPublicId
    cprid: Buffer; //* clerkPrivateId
    oo: {    //* ownerOf
        th: ObjectId[]; //* Threads
        bo: ObjectId[]; //* Bounties
        bc: ObjectId[]  //* Blockchain Data
    };
    srids: { //* referenceIds
        ch: Buffer | null //* chat - service id reference
        vo: Buffer | null //* voter - service id reference
        tx: Buffer | null //* trans - service id reference
        ss: Buffer | null //* stats - service id reference
    }
    ca: number;   //* createdAt
    up: number;   //* deletedAt
    del: boolean; //* deleted

    constructor(props: WithId<I.IUserSchema>) {
        this._id = props._id;
        this._id = props._id
        this.w = props.w
        this.n = props.n
        this.b = props.b
        this.r = props.r
        this.bal = props.bal
        this.ban = props.ban
        this.img = props.img
        this.imgs = props.imgs
        this.cpuid = props.cpuid
        this.cprid = props.cprid
        this.oo = props.oo
        this.ca = props.ca
        this.up = props.up
        this.del = props.del
        this.srids = {
            ch: props.srids.ch,
            vo: props.srids.vo,
            tx: props.srids.tx,
            ss: props.srids.ss,
        }
    }

    get id(): string {
        return this._id?.toString();
    }

    get wallet(): string {
        return '0x' + this.w?.toString('hex');
    }

    get name(): string {
        return this.n?.toString();
    }

    get bio(): string {
        return this.b?.toString();
    }

    get balance(): BigInt {
        return this.bal;
    }

    get image(): string {
        return this.img?.toString();
    }

    get images(): string[] {
        return this.imgs ? this.imgs.map(i => i.toString()) : [];
    }


    get banned(): boolean {
        return this.ban;
    }

    get ownerOf(): I.OOwnerOf {
        return {
            thread: this.oo.th,
            bounty: this.oo.bo,
            bcData: this.oo.bc,
        };
    }

    get referenceIds(): I.OReferenceIds {
        return {
            chat: this.srids.ch ? this.srids.ch.toString() : null,
            voter: this.srids.vo ? this.srids.vo.toString() : null,
            trans: this.srids.tx ? this.srids.tx.toString() : null,
            stats: this.srids.ss ? this.srids.ss.toString() : null,
        }
    }

    get role(): ObjectId {
        return this.r;
    }

    get clerkPublicId(): string {
        return this.cpuid?.toString();
    }

    get clerkPrivateId(): string {
        return this.cprid?.toString();
    }

    get created_at(): Date {
        return new Date(this.ca * 1000);
    }

    get updated_at(): Date {
        return new Date(this.up * 1000);
    }

    get deleted(): boolean {
        return this.del;
    }

}