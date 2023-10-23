"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const threads_pb_1 = require("../typescript/threads_pb");
class IdRequestBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.IdRequest();
    }
    withId(id) {
        this.message.setId(new wrappers_pb_1.StringValue().setValue(id));
        return this;
    }
    build() {
        return this.message;
    }
}
exports.default = IdRequestBuilder;
