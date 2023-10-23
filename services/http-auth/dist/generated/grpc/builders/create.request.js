"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const threads_pb_1 = require("../typescript/threads_pb");
class CreateRequestBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.CreateRequest();
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
    withOwner(owner) {
        this.message.setOwner(new wrappers_pb_1.StringValue().setValue(owner));
        return this;
    }
    withImages(images) {
        this.message.setImagesList(images.map((image) => new wrappers_pb_1.StringValue().setValue(image)));
        return this;
    }
    withTags(tags) {
        this.message.setTagsList(tags.map((tag) => new wrappers_pb_1.StringValue().setValue(tag)));
        return this;
    }
    withIsPromoted(isPromoted) {
        this.message.setIspromoted(new wrappers_pb_1.BoolValue().setValue(isPromoted));
        return this;
    }
    withAuth(auth) {
        this.message.setAuth(new wrappers_pb_1.StringValue().setValue(auth));
        return this;
    }
    build() {
        return this.message;
    }
}
exports.default = CreateRequestBuilder;
