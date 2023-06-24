"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.REGISTER = exports.LOGIN = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const user_schema_1 = __importDefault(require("../model/schema/user-schema"));
const token_tools_1 = require("../utility/token-tools");
const grpc_tools_1 = require("../utility/grpc-tools");
const Validator = __importStar(require("../utility/validator"));
/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function LOGIN(call, callback) {
    const r = call.request, email = r.hasEmail() ? r.getEmail().getValue() : null, password = r.hasPassword() ? r.getPassword().getValue() : null, u = await user_schema_1.default.findOne({ email });
    await Validator.ValidatePassword(password, u);
    callback(null, (0, grpc_tools_1.convertUserModel)(u)
        .setToken(new wrappers_pb_1.StringValue().setValue(await (0, token_tools_1.generateToken)(u))));
}
exports.LOGIN = LOGIN;
/**
 * @param call
 * @param callback
 * @throws
 * @async
 */
async function REGISTER(call, callback) {
    const r = call.request, username = r.hasUsername() ? r.getUsername().getValue() : null, email = r.hasEmail() ? r.getEmail().getValue() : null, password = r.hasPassword() ? r.getPassword().getValue() : null;
    const u = await Validator.ValidateRegister(username, email, password);
    callback(null, (0, grpc_tools_1.convertUserModel)(u)
        .setToken(new wrappers_pb_1.StringValue()
        .setValue(await (0, token_tools_1.generateToken)(u))));
}
exports.REGISTER = REGISTER;
