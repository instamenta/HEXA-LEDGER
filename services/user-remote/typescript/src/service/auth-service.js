"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE_USER_BY_ID = exports.UPDATE_USER_BY_ID = exports.REGISTER = exports.LOGIN = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const user_schema_1 = __importDefault(require("../model/schema/user-schema"));
const token_tools_1 = __importDefault(require("../utility/token-tools"));
const grpc_tools_1 = __importDefault(require("../utility/grpc-tools"));
const validator_1 = __importDefault(require("../utility/validator"));
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
async function LOGIN(call, callback) {
    const r = call.request, email = r.hasEmail() ? r.getEmail().getValue() : null, password = r.hasPassword() ? r.getPassword().getValue() : null, u = await user_schema_1.default.findOne({ email });
    await validator_1.default['VALIDATE_PASSWORD'](password, u);
    callback(null, grpc_tools_1.default.convertUserModel(u).setToken(new wrappers_pb_1.StringValue()
        .setValue(await token_tools_1.default['GENERATE_TOKEN'](u))));
}
exports.LOGIN = LOGIN;
async function REGISTER(call, callback) {
    const r = call.request, username = r.hasUsername() ? r.getUsername().getValue() : null, email = r.hasEmail() ? r.getEmail().getValue() : null, password = r.hasPassword() ? r.getPassword().getValue() : null, u = await validator_1.default['VALIDATE_REGISTER'](username, email, password);
    callback(null, grpc_tools_1.default.convertUserModel(u).setToken(new wrappers_pb_1.StringValue()
        .setValue(await token_tools_1.default['GENERATE_TOKEN'](u))));
}
exports.REGISTER = REGISTER;
async function DELETE_USER_BY_ID(call, callback) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, _id = validator_1.default['CONVERT_TO_OBJECT_ID'](id);
    await user_schema_1.default.deleteOne({ _id })
        .then(() => callback(null, new empty_pb_1.Empty()))
        .catch((error) => validator_1.default['THROWER']('ERROR WHILE DELETING USER: ', error));
}
exports.DELETE_USER_BY_ID = DELETE_USER_BY_ID;
async function UPDATE_USER_BY_ID(call, callback) {
    const r = call.request, id = r.hasId() ? r.getId().getValue() : null, username = r.hasUsername() ? r.getUsername().getValue() : null, email = r.hasEmail() ? r.getEmail().getValue() : null, password = r.hasPassword() ? r.getPassword().getValue() : null, _id = validator_1.default['CONVERT_TO_OBJECT_ID'](id);
    await validator_1.default['VALIDATE_USER_DATA'](username, email, password);
    await user_schema_1.default.findOneAndUpdate({ _id }, {
        $set: {
            username,
            email,
            password,
        }
    })
        .then(async (u) => {
        callback(null, grpc_tools_1.default.convertUserModel(u)
            .setToken(new wrappers_pb_1.StringValue()
            .setValue(await token_tools_1.default['GENERATE_TOKEN'](u))));
    }).catch((error) => validator_1.default['THROWER']('ERROR WHILE UPDATING USER: ', error));
}
exports.UPDATE_USER_BY_ID = UPDATE_USER_BY_ID;
