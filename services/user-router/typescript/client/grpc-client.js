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
Object.defineProperty(exports, "__esModule", { value: true });
/** @file Initializes exports and connects to grpc client. */
const GRPC = __importStar(require("@grpc/grpc-js"));
const users_grpc_pb_1 = require("../protos/generated/users_grpc_pb");
const USER_REMOTE_REF = process.env.USER_REMOTE_REF || 'user-remote-api', USER_REMOTE_PORT = process.env.USER_REMOTE_PORT || 50051;
const GRPC_CLIENT = new users_grpc_pb_1.UserServiceClient(`${USER_REMOTE_REF}:${USER_REMOTE_PORT}`, GRPC.credentials.createInsecure());
exports.default = GRPC_CLIENT;
