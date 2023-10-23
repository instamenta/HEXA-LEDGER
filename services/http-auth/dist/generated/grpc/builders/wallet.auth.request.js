"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const threads_pb_1 = require("../typescript/threads_pb");
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
class WalletWithAuthRequestBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.WalletWithAuthRequest();
    }
    withWallet(wallet) {
        this.message.setWallet(new wrappers_pb_1.StringValue().setValue(wallet));
        return this;
    }
    withId(id) {
        this.message.setId(new wrappers_pb_1.StringValue().setValue(id));
        return this;
    }
    build() {
        return this.message;
    }
}
exports.default = WalletWithAuthRequestBuilder;
