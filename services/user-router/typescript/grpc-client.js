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
exports.loginUser = exports.registerUser = void 0;
const GRPC = __importStar(require("@grpc/grpc-js"));
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const userClass_1 = __importDefault(require("./models/userClass"));
const { LoginForm, RegisterForm } = require('./generated/users_pb');
const users_grpc_pb_1 = require("./generated/users_grpc_pb");
const CLIENT = new users_grpc_pb_1.UserServiceClient('user-remote:50051', GRPC.credentials.createInsecure());
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
        CLIENT.login(m, (err, response) => {
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
        CLIENT.register(m, (err, response) => {
            err ? reject(err.message)
                : resolve(userClass_1.default.fromUserGRPCMessage(response));
        });
    });
}
exports.registerUser = registerUser;
