"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const threads_pb_1 = require("../typescript/threads_pb");
class DonationObjectBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.DonationObject();
    }
    withDate(date) {
        this.message.setDate(new wrappers_pb_1.StringValue().setValue(date.toISOString()));
        return this;
    }
    withAmount(amount) {
        this.message.setAmount(new wrappers_pb_1.UInt64Value().setValue(amount));
        return this;
    }
    withDonator(donator) {
        this.message.setDonator(new wrappers_pb_1.StringValue().setValue(donator));
        return this;
    }
    build() {
        return this.message;
    }
}
exports.default = DonationObjectBuilder;
