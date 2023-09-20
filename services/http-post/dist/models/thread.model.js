"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_thread_model_1 = __importDefault(require("./base.thread.model"));
class ThreadModel extends base_thread_model_1.default {
    constructor(props) {
        super(props);
    }
    get id() {
        return this._id.toString();
    }
    get name() {
        return this.n.buffer.toString();
    }
    get description() {
        return this.des.buffer.toString();
    }
    get content() {
        return this.c.buffer.toString();
    }
    get images() {
        return this.i.map(img => img.buffer.toString());
    }
    get created_at() {
        return this.ca;
    }
    get updated_at() {
        return this.up;
    }
    get owner() {
        return this.o.toString();
    }
    get deleted() {
        return this.del;
    }
    get promoted() {
        return this.p.map(({ promoter, date, amount }) => {
            return { promoter: promoter.toString(), date, amount };
        });
    }
    get donations() {
        return this.do.map(({ donator, amount, date }) => {
            return { donator: donator.toString(), amount, date };
        });
    }
    get likes() {
        return this.li.map(like => like.toString());
    }
    get dislikes() {
        return this.di.map(dislike => dislike.toString());
    }
    get tags() {
        return this.t.map(tag => tag.buffer.toString());
    }
    get() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            content: this.content,
            images: this.images,
            created_at: this.created_at,
            updated_at: this.updated_at,
            owner: this.owner,
            deleted: this.deleted,
            promoted: this.promoted,
            donations: this.donations,
            likes: this.likes,
            dislikes: this.dislikes,
            tags: this.tags,
        };
    }
}
exports.default = ThreadModel;
