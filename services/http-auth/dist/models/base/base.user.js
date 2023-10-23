"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseUser {
    _id;
    w; //* wallet
    n; //* name
    r; //* role
    bal; //* balance
    ban; //* banned
    img; //* image
    imgs; //* images
    cid; //* clerkId
    oo;
    srids;
    ca; //* createdAt
    up; //* deletedAt
    del; //* deleted
    constructor(props) {
        this._id = props._id;
        this._id = props._id;
        this.w = props.w;
        this.n = props.n;
        this.r = props.r;
        this.bal = props.bal;
        this.ban = props.ban;
        this.img = props.img;
        this.imgs = props.imgs;
        this.cid = props.cid;
        this.oo = props.oo;
        this.ca = props.ca;
        this.up = props.up;
        this.del = props.del;
        this.srids = {
            ch: props.srids.ch,
            vo: props.srids.vo,
            tx: props.srids.tx,
            ss: props.srids.ss,
        };
    }
    get id() {
        return this._id?.toString();
    }
    get wallet() {
        return '0x' + this.w?.toString('hex');
    }
    get name() {
        return this.n?.toString();
    }
    get balance() {
        return this.bal;
    }
    get image() {
        return this.img?.toString();
    }
    get images() {
        return this.imgs ? this.imgs.map(i => i.toString()) : [];
    }
    get banned() {
        return this.ban;
    }
    get ownerOf() {
        return {
            thread: this.oo.th,
            bounty: this.oo.bo,
            bcData: this.oo.bc,
        };
    }
    get referenceIds() {
        return {
            chat: this.srids.ch ? this.srids.ch.toString() : null,
            voter: this.srids.vo ? this.srids.vo.toString() : null,
            trans: this.srids.tx ? this.srids.tx.toString() : null,
            stats: this.srids.ss ? this.srids.ss.toString() : null,
        };
    }
    get role() {
        return this.r;
    }
    get clerkId() {
        return this.cid?.toString();
    }
    get created_at() {
        return new Date(this.ca * 1000);
    }
    get updated_at() {
        return new Date(this.up * 1000);
    }
    get deleted() {
        return this.del;
    }
}
exports.default = BaseUser;
