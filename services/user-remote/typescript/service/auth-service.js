"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTER = exports.LOGIN = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const user_schema_1 = __importDefault(require("../model/schema/user-schema"));
const token_tools_1 = __importDefault(require("../utility/token-tools"));
const grpc_tools_1 = __importDefault(require("../utility/grpc-tools"));
const validator_1 = __importDefault(require("../utility/validator"));
/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function LOGIN(call, callback) {
    const r = call.request, email = r.hasEmail() ? r.getEmail().getValue() : null, password = r.hasPassword() ? r.getPassword().getValue() : null, u = await user_schema_1.default.findOne({ email });
    await validator_1.default['VALIDATE_PASSWORD'](password, u);
    callback(null, grpc_tools_1.default.convertUserModel(u).setToken(new wrappers_pb_1.StringValue()
        .setValue(await token_tools_1.default['GENERATE_TOKEN'](u))));
}
exports.LOGIN = LOGIN;
/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function REGISTER(call, callback) {
    const r = call.request, username = r.hasUsername() ? r.getUsername().getValue() : null, email = r.hasEmail() ? r.getEmail().getValue() : null, password = r.hasPassword() ? r.getPassword().getValue() : null, u = await validator_1.default['VALIDATE_REGISTER'](username, email, password);
    callback(null, grpc_tools_1.default.convertUserModel(u).setToken(new wrappers_pb_1.StringValue()
        .setValue(await token_tools_1.default['GENERATE_TOKEN'](u))));
}
exports.REGISTER = REGISTER;
