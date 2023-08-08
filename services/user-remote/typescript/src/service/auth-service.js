"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_USER_BY_ID = exports.DELETE_USER_BY_ID = exports.REGISTER = exports.LOGIN = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const user_schema_1 = __importDefault(require("../model/schema/user-schema"));
const token_tools_1 = __importDefault(require("../utility/token-tools"));
const grpc_tools_1 = __importDefault(require("../utility/grpc-tools"));
const validator_1 = __importDefault(require("../utility/validator"));
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
async function LOGIN(call, callback) {
    const u = await user_schema_1.default.findOne({
        email: call.request.hasEmail() ? call.request.getEmail().getValue() : null
    });
    await validator_1.default['VALIDATE_PASSWORD'](call.request.hasPassword() ? call.request.getPassword().getValue() : null, u);
    callback(null, grpc_tools_1.default.convertUserModel(u)
        .setToken(new wrappers_pb_1.StringValue().setValue(await token_tools_1.default['GENERATE_TOKEN'](u))));
}
exports.LOGIN = LOGIN;
function REGISTER(call, callback) {
    validator_1.default['VALIDATE_REGISTER'](call.request.hasUsername() ? call.request.getUsername().getValue() : null, call.request.hasEmail() ? call.request.getEmail().getValue() : null, call.request.hasPassword() ? call.request.getPassword().getValue() : null).then(async (u) => callback(null, grpc_tools_1.default.convertUserModel(u)
        .setToken(new wrappers_pb_1.StringValue().setValue(await token_tools_1.default['GENERATE_TOKEN'](u)))));
}
exports.REGISTER = REGISTER;
function DELETE_USER_BY_ID(call, callback) {
    user_schema_1.default.deleteOne({
        _id: validator_1.default['CONVERT_TO_OBJECT_ID'](call.request.hasId() ? call.request.getId().getValue() : null)
    }).then((res) => (res.deletedCount === 1)
        ? callback(null, new empty_pb_1.Empty())
        : validator_1.default['THROWER']('ERROR WHILE DELETING USER'));
}
exports.DELETE_USER_BY_ID = DELETE_USER_BY_ID;
function UPDATE_USER_BY_ID(call, callback) {
    const username = call.request.hasUsername() ? call.request.getUsername().getValue() : null, email = call.request.hasEmail() ? call.request.getEmail().getValue() : null, password = call.request.hasPassword() ? call.request.getPassword().getValue() : null;
    validator_1.default['VALIDATE_USER_DATA'](username, email, password);
    user_schema_1.default.findOneAndUpdate({ _id: validator_1.default['CONVERT_TO_OBJECT_ID'](call.request.hasId() ? call.request.getId().getValue() : null) }, {
        $set: {
            username,
            email,
            password
        }
    }, { new: true }).then(async (updatedUser) => updatedUser ? callback(null, grpc_tools_1.default.convertUserModel(updatedUser)
        .setToken(new wrappers_pb_1.StringValue().setValue(await token_tools_1.default['GENERATE_TOKEN'](updatedUser))))
        : validator_1.default['THROWER']('ERROR WHILE UPDATING USER'));
}
exports.UPDATE_USER_BY_ID = UPDATE_USER_BY_ID;
