"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_user_1 = __importDefault(require("../base/base.user"));
const promoted_object_1 = __importDefault(require("../../generated/grpc/builders/promoted.object"));
const donation_object_1 = __importDefault(require("../../generated/grpc/builders/donation.object"));
const thread_model_1 = __importDefault(require("../../generated/grpc/builders/thread.model"));
class ThreadBuilder extends base_user_1.default {
    constructor(props) {
        super(props);
    }
    #build_PromotedObject({ date, amount, promoter }) {
        return new promoted_object_1.default()
            .withDate(date)
            .withAmount(amount)
            .withPromoter(promoter);
    }
    #build_DonationObject({ date, amount, donator }) {
        return new donation_object_1.default()
            .withDate(date)
            .withAmount(amount)
            .withDonator(donator);
    }
    #get_ProtoMessage() {
        return new thread_model_1.default();
    }
    build_GRPC() {
        const m = this.#get_ProtoMessage();
        if (this.id)
            m.withId(this.id);
        if (this.name)
            m.withName(this.name);
        if (this.description)
            m.withDescription(this.description);
        if (this.content)
            m.withContent(this.content);
        if (this.created_at)
            m.withCreatedAt(this.created_at);
        if (this.updated_at)
            m.withUpdatedAt(this.updated_at);
        if (this.owner)
            m.withOwner(this.owner);
        if (this.deleted)
            m.withDeleted(this.deleted);
        if (this.likes_count)
            m.withLikesCount(this.likes_count);
        if (this.dislikes_count)
            m.withDislikesCount(this.dislikes_count);
        if (this.images)
            m.withImages(this.images);
        if (this.promoted)
            m.withPromoted(this.promoted.map(p => this.#build_PromotedObject(p)));
        if (this.donations)
            m.withDonations(this.donations.map(d => this.#build_DonationObject(d)));
        if (this.likes)
            m.withTags(this.likes);
        if (this.dislikes)
            m.withLikes(this.dislikes);
        if (this.tags)
            m.withDislikes(this.tags);
        return m.build();
    }
}
exports.default = ThreadBuilder;
