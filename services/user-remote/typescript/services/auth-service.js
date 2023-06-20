"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const user_schema_1 = __importDefault(require("../models/user-schema"));
const token_tools_1 = require("../utilities/token-tools");
const bcrypt_1 = __importDefault(require("bcrypt"));
const grpc_tools_1 = require("../utilities/grpc-tools");
/**
 * Handles the login request.
 * @async
 * @param call - The gRPC call object for the login request.
 * @param callback - The callback function to send the login response.
 * @throws - Emits an error if the input is invalid
 */
async function login(call, callback) {
    try {
        const r = call.request, email = r.hasEmail() ? r.getEmail().getValue() : null, password = r.hasPassword() ? r.getPassword().getValue() : null, u = await user_schema_1.default.findOne({ email });
        if (!u || !password || !await bcrypt_1.default.compare(password, u.password)) {
            throw new Error('Login Error');
        }
        const m = (0, grpc_tools_1.convertUserModel)(u);
        const TOKEN = await (0, token_tools_1.generateToken)(u);
        m.setToken(new wrappers_pb_1.StringValue().setValue(TOKEN));
        callback(null, m);
    }
    catch (error) {
        callback(error);
    }
}
exports.login = login;
/**
 * Handles the registration request.
 * @async
 * @param call - The gRPC call object for the registration request.
 * @param callback - The callback function to send the registration response.
 * @throws - Emits an error if the input is invalid
 */
async function register(call, callback) {
    try {
        const r = call.request, username = r.hasUsername() ? r.getUsername().getValue() : null, email = r.hasEmail() ? r.getEmail().getValue() : null, password = r.hasPassword() ? r.getPassword().getValue() : null;
        const u = await user_schema_1.default
            .create({ username, email, password });
        if (!u) {
            throw new Error('Registration Error');
        }
        const m = (0, grpc_tools_1.convertUserModel)(u);
        const TOKEN = await (0, token_tools_1.generateToken)(u);
        m.setToken(new wrappers_pb_1.StringValue().setValue(TOKEN));
        callback(null, m);
    }
    catch (error) {
        callback(error);
    }
}
exports.register = register;
