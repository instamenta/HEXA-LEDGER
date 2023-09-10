"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const auth_grpc_pb_1 = require("../protos/generated/auth_grpc_pb");
class GrpcClient {
    dot;
    constructor(dot) {
        this.dot = dot;
    }
    static getInstance(dot) {
        return new GrpcClient(dot);
    }
    connectClient() {
        return new auth_grpc_pb_1.AuthServiceClient(`${this.dot.GET('AUTH_REMOTE_REF', 'auth-remote-api')}:${this.dot.GET('AUTH_REMOTE_PORT', 50053)}`, grpc_js_1.credentials.createInsecure());
    }
}
exports.default = GrpcClient;
