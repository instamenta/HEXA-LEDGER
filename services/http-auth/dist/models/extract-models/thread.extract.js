"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThreadExtract {
    id;
    name;
    description;
    content;
    created_at;
    updated_at;
    owner;
    deleted;
    likes_count;
    dislikes_count;
    images;
    promoted;
    donations;
    likes;
    dislikes;
    tags;
    constructor(m) {
        this.id = m.hasId() ? m.getId().getValue() : null;
        this.name = m.hasName() ? m.getName().getValue() : null;
        this.description = m.hasDescription() ? m.getDescription().getValue() : null;
        this.content = m.hasContent() ? m.getContent().getValue() : null;
        this.created_at = m.hasCreatedAt() ? new Date(m.getCreatedAt().getValue()) : null;
        this.updated_at = m.hasUpdatedAt() ? new Date(m.getUpdatedAt().getValue()) : null;
        this.owner = m.hasOwner() ? m.getOwner().getValue() : null;
        this.deleted = m.hasDeleted() ? m.getDeleted().getValue() : null;
        this.likes_count = m.hasLikesCount() ? m.getLikesCount().getValue() : null;
        this.dislikes_count = m.hasDislikesCount() ? m.getDislikesCount().getValue() : null;
        this.images = m.getImagesList().map(i => i.getValue());
        this.promoted = m.getPromotedList().map(p => this.#extract_PromotedObject(p));
        this.donations = m.getDonationsList().map(d => this.#extract_DonationObject(d));
        this.likes = m.getLikesList().map(l => l.getValue());
        this.dislikes = m.getDislikesList().map(di => di.getValue());
        this.tags = m.getTagsList().map(t => t.getValue());
    }
    #extract_PromotedObject(data) {
        return {
            date: data.hasDate() ? new Date(data.getDate().getValue()) : null,
            amount: data.hasAmount() ? data.getAmount().getValue() : null,
            promoter: data.hasPromoter() ? data.getPromoter().getValue() : null,
        };
    }
    #extract_DonationObject(data) {
        return {
            date: data.hasDate() ? new Date(data.getDate().getValue()) : null,
            amount: data.hasAmount() ? data.getAmount().getValue() : null,
            donator: data.hasDonator() ? data.getDonator().getValue() : null,
        };
    }
    get() {
        return {
            id: this.id ?? null,
            name: this.name ?? null,
            description: this.description ?? null,
            content: this.content ?? null,
            created_at: this.created_at ?? null,
            updated_at: this.updated_at ?? null,
            owner: this.owner ?? null,
            deleted: this.deleted ?? null,
            likes_count: this.likes_count ?? null,
            dislikes_count: this.dislikes_count ?? null,
            images: this.images,
            promoted: this.promoted ?? null,
            donations: this.donations ?? null,
            likes: this.likes ?? null,
            dislikes: this.dislikes ?? null,
            tags: this.tags ?? null,
        };
    }
}
exports.default = ThreadExtract;
