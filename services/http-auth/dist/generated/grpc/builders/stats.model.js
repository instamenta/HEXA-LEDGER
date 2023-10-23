"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const threads_pb_1 = require("../typescript/threads_pb");
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
class StatsModelBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.StatsModel();
    }
    withId(id) {
        this.message.setId(new wrappers_pb_1.StringValue().setValue(id));
        return this;
    }
    withName(name) {
        this.message.setName(new wrappers_pb_1.StringValue().setValue(name));
        return this;
    }
    withPromoted(promoted) {
        this.message.setPromoted(promoted.build());
        return this;
    }
    withDonations(donations) {
        this.message.setDonations(donations.build());
        return this;
    }
    withLikesCount(likesCount) {
        this.message.setLikesCount(new wrappers_pb_1.Int64Value().setValue(likesCount));
        return this;
    }
    withDislikesCount(dislikesCount) {
        this.message.setDislikesCount(new wrappers_pb_1.Int64Value().setValue(dislikesCount));
        return this;
    }
    build() {
        return this.message;
    }
}
exports.default = StatsModelBuilder;
