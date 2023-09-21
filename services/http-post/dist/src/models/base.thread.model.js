"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseThreadModel {
    _id; // id
    n; // name
    des; // description
    c; // content
    i; // images
    ca; // created_at
    up; // updated_at
    o; // owner
    del; // deleted
    p; // promoted
    do; // donations
    li; // likes
    di; // dislikes
    t; // tags
    constructor(props) {
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
exports.default = BaseThreadModel;
