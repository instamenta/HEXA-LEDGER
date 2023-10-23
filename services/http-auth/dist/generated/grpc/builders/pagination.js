"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const threads_pb_1 = require("../typescript/threads_pb");
class PaginationBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.Pagination();
    }
    withPage(page) {
        this.message.setPage(new wrappers_pb_1.UInt64Value().setValue(page));
        return this;
    }
    withLimit(limit) {
        this.message.setLimit(new wrappers_pb_1.UInt64Value().setValue(limit));
        return this;
    }
    build() {
        return this.message;
    }
}
exports.default = PaginationBuilder;
