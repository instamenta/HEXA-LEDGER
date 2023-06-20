"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const grpc_client_1 = __importDefault(require("../grpc-client"));
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const userClass_1 = __importDefault(require("../models/userClass"));
const { LoginForm, RegisterForm } = require('../generated/users_pb');
/**
 * @param email
 * @param password
 * @returns
 */
function loginUser(email, password) {
    return new Promise((resolve, reject) => {
        const m = new LoginForm();
        m.setEmail(new wrappers_pb_1.StringValue().setValue(email));
        m.setPassword(new wrappers_pb_1.StringValue().setValue(password));
        grpc_client_1.default.login(m, (err, response) => {
            err ? reject(err.message)
                : resolve(userClass_1.default.fromUserGRPCMessage(response));
        });
    });
}
exports.loginUser = loginUser;
/**
 * @param username
 * @param email
 * @param password
 * @returns
 */
function registerUser(username, email, password) {
    return new Promise((resolve, reject) => {
        const m = new RegisterForm();
        m.setUsername(new wrappers_pb_1.StringValue().setValue(username));
        m.setEmail(new wrappers_pb_1.StringValue().setValue(email));
        m.setPassword(new wrappers_pb_1.StringValue().setValue(password));
        grpc_client_1.default.register(m, (err, response) => {
            err ? reject(err.message)
                : resolve(userClass_1.default.fromUserGRPCMessage(response));
        });
    });
}
exports.registerUser = registerUser;
