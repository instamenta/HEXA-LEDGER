"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const threads_pb_1 = require("../typescript/threads_pb");
class PingPongBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.PingPongMessage();
    }
    withName(name) {
        this.message.setName(new wrappers_pb_1.StringValue().setValue(name));
        return this;
    }
    #withTimestamp() {
        this.message.setTimestamp(new wrappers_pb_1.UInt64Value().setValue(new Date().getTime()));
        return this;
    }
    build() {
        this.#withTimestamp();
        return this.message;
    }
}
exports.default = PingPongBuilder;
