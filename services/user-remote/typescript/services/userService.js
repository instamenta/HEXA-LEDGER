'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const userModelSchema_1 = __importDefault(require("../models/userModelSchema"));
const token_tools_1 = require("../utilities/token-tools");
const bcrypt_1 = require("bcrypt");
const { UserModel } = require('../generated/users_pb');
/**
 * @param call
 * @param callback
 * @returns
 */
async function login(call, callback) {
    const r = call.request;
    const o = {
        email: r.hasEmail() ? r.getEmail().getValue() : null,
        password: r.hasPassword() ? r.getPassword().getValue() : null,
    };
    try {
        const u = await userModelSchema_1.default.findOne({ email: o.email });
        if (!u || o.password === null || !await (0, bcrypt_1.compare)(u.password, o.password)) {
            throw new Error('Login Error');
        }
        const userId = u['_id'].toString();
        const m = new UserModel();
        m.setId(new wrappers_pb_1.StringValue().setValue(userId));
        m.setUsername(new wrappers_pb_1.StringValue().setValue(u.username));
        m.setEmail(new wrappers_pb_1.StringValue().setValue(u.email));
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
        const u = await userModelSchema_1.default.create({
            username: o.username,
            email: o.email,
            password: o.password,
        });
        if (!u) {
            throw new Error('Registration Error');
        }
        const m = new UserModel();
        const id = u['_id'].toString();
        m.setId(new wrappers_pb_1.StringValue().setValue(id));
        m.setUsername(new wrappers_pb_1.StringValue().setValue(u.username));
        m.setEmail(new wrappers_pb_1.StringValue().setValue(u.email));
        const TOKEN = await (0, token_tools_1.generateToken)(u);
        m.setToken(new wrappers_pb_1.StringValue().setValue(TOKEN));
        callback(null, m);
    }
    catch (error) {
        callback(error);
    }
}
exports.register = register;
