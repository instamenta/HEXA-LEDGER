"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const threads_pb_1 = require("../typescript/threads_pb");
class PromotedObjectBuilder {
    message;
    constructor() {
        this.message = new threads_pb_1.PromotedObject();
    }
    withDate(date) {
        this.message.setDate(new wrappers_pb_1.StringValue().setValue(date.toISOString()));
        return this;
    }
    withAmount(amount) {
        this.message.setAmount(new wrappers_pb_1.UInt64Value().setValue(amount));
        return this;
    }
    withPromoter(promoter) {
        this.message.setPromoter(new wrappers_pb_1.StringValue().setValue(promoter));
        return this;
    }
    build() {
        return this.message;
    }
}
exports.default = PromotedObjectBuilder;
