"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserById = exports.deleteUserById = exports.registerUser = exports.loginUser = void 0;
const grpc_client_1 = __importDefault(require("./grpc-client"));
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const user_grpc_model_1 = __importDefault(require("../model/user-grpc-model"));
const { LoginForm, RegisterForm, UpdateForm, idRequest } = require('../protos/generated/users_pb');
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
        grpc_client_1.default.login(m, (err, r) => {
            err ? reject(err.message)
                : resolve(user_grpc_model_1.default.fromUserGRPCMessage(r));
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
        grpc_client_1.default.register(m, (err, r) => {
            err ? reject(err.message)
                : resolve(user_grpc_model_1.default.fromUserGRPCMessage(r));
        });
    });
}
exports.registerUser = registerUser;
/**
 * @param id
 * @returns
 */
function deleteUserById(id) {
    console.log('////////////////////////////');
    return new Promise((resolve, reject) => {
        const m = new idRequest().setId(new wrappers_pb_1.StringValue().setValue(id));
        grpc_client_1.default.deleteUserById(m, (err) => {
            err ? reject(err.message)
                : resolve(true);
        });
    });
}
exports.deleteUserById = deleteUserById;
/**
 * @param id
 * @param username
 * @param email
 * @param password
 * @returns
 */
function updateUserById(id, username, email, password) {
    console.log('////////////////////////////');
    return new Promise((resolve, reject) => {
        const m = new UpdateForm();
        m.setId(new wrappers_pb_1.StringValue().setValue(id));
        m.setUsername(new wrappers_pb_1.StringValue().setValue(username));
        m.setEmail(new wrappers_pb_1.StringValue().setValue(email));
        m.setPassword(new wrappers_pb_1.StringValue().setValue(password));
        grpc_client_1.default.updateUserById(m, (err, r) => {
            err ? reject(err.message)
                : resolve(user_grpc_model_1.default.fromUserGRPCMessage(r));
        });
    });
}
exports.updateUserById = updateUserById;
