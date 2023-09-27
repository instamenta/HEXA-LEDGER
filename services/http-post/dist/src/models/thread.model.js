"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_thread_1 = __importDefault(require("./base/base.thread"));
class ThreadModel extends base_thread_1.default {
    constructor(props) {
        super(props);
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
            likes_count: this.likes_count,
            dislikes_count: this.dislikes_count,
        };
    }
    getProjected() {
        const m_ = {};
        if (this.id)
            m_.id = this.id;
        if (this.name)
            m_.name = this.name;
        if (this.description)
            m_.description = this.description;
        if (this.content)
            m_.content = this.content;
        if (this.images)
            m_.images = this.images;
        if (this.created_at)
            m_.created_at = this.created_at.toISOString();
        if (this.updated_at)
            m_.updated_at = this.updated_at.toISOString();
        if (this.owner)
            m_.owner = this.owner;
        if (this.likes_count)
            m_.likes = this.likes;
        if (this.dislikes_count)
            m_.dislikes = this.dislikes;
        if (this.tags_count)
            m_.tags = this.tags;
        if (this.promoted)
            m_.promoted = this.promoted.map(({ promoter, date, amount }) => {
                return { promoter, date: date.toISOString(), amount };
            });
        if (this.donations)
            m_.donations = this.donations.map(({ donator, date, amount }) => {
                return { donator, date: date.toISOString(), amount };
            });
        return m_;
    }
}
exports.default = ThreadModel;
