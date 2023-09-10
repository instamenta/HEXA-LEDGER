"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const { AuthRequest, GetUserRequest } = require('../protos/generated/auth_pb');
class AuthClient {
    client;
    constructor(client) {
        this.client = client;
    }
    static getInstance(client) {
        return new AuthClient(client);
    }
    loginUser(email, password) {
        return new Promise((resolve, reject) => {
            const m = new LoginForm()
                .setEmail(new wrappers_pb_1.StringValue().setValue(email))
                .setPassword(new wrappers_pb_1.StringValue().setValue(password));
            this.client.login(m, (e, r) => e ? reject(e) : resolve(UserGrpcModel.fromResponse(r)));
        });
    }
}
exports.default = AuthClient;
