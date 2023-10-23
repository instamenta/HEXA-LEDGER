"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const threads_pb_1 = require("../typescript/threads_pb");
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
class ThreadModelBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.ThreadModel();
    }
    build() {
        return this.message;
    }
    withId(id) {
        this.message.setId(new wrappers_pb_1.StringValue().setValue(id));
        return this;
    }
    withName(name) {
        this.message.setName(new wrappers_pb_1.StringValue().setValue(name));
        return this;
    }
    withDescription(description) {
        this.message.setDescription(new wrappers_pb_1.StringValue().setValue(description));
        return this;
    }
    withContent(content) {
        this.message.setContent(new wrappers_pb_1.StringValue().setValue(content));
        return this;
    }
    withImages(images) {
        this.message.setImagesList(images.map((image) => new wrappers_pb_1.StringValue().setValue(image)));
        return this;
    }
    withCreatedAt(createdAt) {
        this.message.setCreatedAt(new wrappers_pb_1.StringValue().setValue(createdAt.toISOString()));
        return this;
    }
    withUpdatedAt(updatedAt) {
        this.message.setUpdatedAt(new wrappers_pb_1.StringValue().setValue(updatedAt.toISOString()));
        return this;
    }
    withOwner(owner) {
        this.message.setOwner(new wrappers_pb_1.StringValue().setValue(owner));
        return this;
    }
    withDeleted(deleted) {
        this.message.setDeleted(new wrappers_pb_1.BoolValue().setValue(deleted));
        return this;
    }
    withPromoted(promoted) {
        this.message.setPromotedList(promoted.map((p) => p.build()));
        return this;
    }
    withDonations(donations) {
        this.message.setDonationsList(donations.map((d) => d.build()));
        return this;
    }
    withLikes(likes) {
        this.message.setLikesList(likes.map((like) => new wrappers_pb_1.StringValue().setValue(like)));
        return this;
    }
    withDislikes(dislikes) {
        this.message.setDislikesList(dislikes.map((dislike) => new wrappers_pb_1.StringValue().setValue(dislike)));
        return this;
    }
    withTags(tags) {
        this.message.setTagsList(tags.map((tag) => new wrappers_pb_1.StringValue().setValue(tag)));
        return this;
    }
    withLikesCount(likesCount) {
        this.message.setLikesCount(new wrappers_pb_1.UInt64Value().setValue(likesCount));
        return this;
    }
    withDislikesCount(dislikesCount) {
        this.message.setDislikesCount(new wrappers_pb_1.UInt64Value().setValue(dislikesCount));
        return this;
    }
}
exports.default = ThreadModelBuilder;
