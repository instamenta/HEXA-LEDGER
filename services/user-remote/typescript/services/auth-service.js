'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const user_schema_1 = __importDefault(require("../models/user-schema"));
const token_tools_1 = require("../utilities/token-tools");
const bcrypt_1 = require("bcrypt");
const grpc_tools_1 = require("../utilities/grpc-tools");
/**
 * @param call
 * @param callback
 * @returns
 */
async function login(call, callback) {
    try {
        const r = call.request, email = r.hasEmail() ? r.getEmail().getValue() : null, password = r.hasPassword() ? r.getPassword().getValue() : null, u = await user_schema_1.default.findOne({ email });
        console.log(u);
        console.log(password);
        if (!u || password === null
            || !await (0, bcrypt_1.compare)(u.password, password)) {
            // @ts-ignore
            console.log(await (0, bcrypt_1.compare)(u.password, password));
            throw new Error('Login Error');
        }
        console.log(u);
        // const userId: string = u['_id'].toString();
        // const m: IUserModel = new UserModel();
        // m.setId(new StringValue().setValue(userId));
        // m.setUsername(new StringValue().setValue(u.username));
        // m.setEmail(new StringValue().setValue(u.email));
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
 * @param call
 * @param callback
 * @returns
 */
async function register(call, callback) {
    const r = call.request;
    const o = {
        username: r.hasUsername() ? r.getUsername().getValue() : null,
        email: r.hasEmail() ? r.getEmail().getValue() : null,
        password: r.hasPassword() ? r.getPassword().getValue() : null,
    };
    try {
        const u = await user_schema_1.default.create({
            username: o.username,
            email: o.email,
            password: o.password,
        });
        if (!u) {
            throw new Error('Registration Error');
        }
        // const m: IUserModel = new UserModel();
        // const id: string = u['_id'].toString();
        // m.setId(new StringValue().setValue(id));
        // m.setUsername(new StringValue().setValue(u.username));
        // m.setEmail(new StringValue().setValue(u.email));
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
