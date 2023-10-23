"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const threads_pb_1 = require("../typescript/threads_pb");
class DonationsStatsBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.DonationsStats();
    }
    withCount(count) {
        this.message.setCount(new wrappers_pb_1.UInt64Value().setValue(count));
        return this;
    }
    withAmount(amount) {
        this.message.setAmount(new wrappers_pb_1.UInt64Value().setValue(amount));
        return this;
    }
    build() {
        return this.message;
    }
}
exports.default = DonationsStatsBuilder;
