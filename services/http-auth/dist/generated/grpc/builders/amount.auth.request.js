"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const threads_pb_1 = require("../typescript/threads_pb");
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
class AmountWithAuthRequestBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.AmountWithAuthRequest();
    }
    withAuth(auth) {
        this.message.setAuth(new wrappers_pb_1.StringValue().setValue(auth));
        return this;
    }
    withAmount(amount) {
        this.message.setAmount(new wrappers_pb_1.UInt64Value().setValue(amount));
        return this;
    }
    withThreadId(threadId) {
        this.message.setThreadId(new wrappers_pb_1.StringValue().setValue(threadId));
        return this;
    }
    build() {
        return this.message;
    }
}
exports.default = AmountWithAuthRequestBuilder;
