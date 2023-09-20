import {ObjectId, WithId} from 'mongodb';
import * as I from '../types/types';

export default class BaseThreadModel {
    _id: ObjectId; // id
    n: Buffer; // name
    des: Buffer; // description
    c: Buffer; // content
    i: Buffer[]; // images
    ca: Date; // created_at
    up: Date; // updated_at
    o: ObjectId; // owner
    del: boolean; // deleted
    p: I.IPromotedObject[]; // promoted
    do: I.IDonationObject[]; // donations
    li: ObjectId[]; // likes
    di: ObjectId[]; // dislikes
    t: Buffer[]; // tags

    constructor(props: WithId<I.IThreadSchema>) {
        this._id = props._id;
        this.n = props.n;
        this.des = props.des;
        this.c = props.c;
        this.i = props.i;
        this.ca = props.ca;
        this.up = props.up;
        this.o = props.o;
        this.del = props.del;
        this.p = props.p;
        this.do = props.do;
        this.li = props.li;
        this.di = props.di;
        this.t = props.t;
    }
}