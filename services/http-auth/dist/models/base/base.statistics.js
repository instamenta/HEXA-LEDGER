"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseStatistics {
    _id; // id
    n; // name
    p; // promoted
    do; // donations
    li; // likes
    di; // dislikes
    constructor(props) {
        this._id = props._id;
        this.n = props.n;
        this.p = props.p;
        this.do = props.do;
        this.li = props.li;
        this.di = props.di;
    }
    get id() {
        return this._id?.toString();
    }
    get name() {
        return this.n?.toString();
    }
    get promoted() {
        return {
            count: this.p?.length,
            amount: this.p?.reduce((total, p) => total + p.amount, 0)
        };
    }
    get donations() {
        return {
            count: this.do?.length,
            amount: this.do?.reduce((total, d) => total + d.amount, 0)
        };
    }
    get likes() {
        return this.li?.length;
    }
    get dislikes() {
        return this.di?.length;
    }
}
exports.default = BaseStatistics;
