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
        return this.n.toString();
    }
    get description() {
        return this.des.toString();
    }
    get content() {
        return this.c.toString();
    }
    get images() {
        return this.i.map(img => img.toString());
    }
    get created_at() {
        return new Date(this.ca * 1000);
    }
    get updated_at() {
        return new Date(this.up * 1000);
    }
    get owner() {
        return '0x' + this.o.toString('hex');
    }
    get deleted() {
        return this.del;
    }
    get promoted() {
        return this.p.map(({ promoter, date, amount }) => {
            return {
                promoter: '0x' + promoter.toString('hex'),
                date: new Date(date * 1000),
                amount
            };
        });
    }
    get donations() {
        return this.do.map(({ donator, amount, date }) => {
            return {
                donator: '0x' + donator.toString('hex'),
                date: new Date(date * 1000),
                amount,
            };
        });
    }
    get likes() {
        return this.li.map(like => '0x' + like.toString('hex'));
    }
    get dislikes() {
        return this.di.map(dislike => '0x' + dislike.toString('hex'));
    }
    get tags() {
        return this.t.map(tag => tag.toString());
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
            promoted: this.promoted,
            donations: this.donations,
            likes: this.likes,
            dislikes: this.dislikes,
            tags: this.tags,
        };
    }
    getStatic() {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            content: this.content,
            owner: this.owner,
            image: this.images[0],
            created_at: this.created_at.toISOString(),
            updated_at: this.updated_at.toISOString(),
            likes_count: this.likes.length,
            dislikes_count: this.dislikes.length,
        };
    }
}
exports.default = ThreadModel;