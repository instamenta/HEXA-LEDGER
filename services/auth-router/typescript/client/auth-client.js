"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../protos/builder/builder");
class AuthClient {
    client;
    constructor(client) {
        this.client = client;
    }
    static getInstance(client) {
        return new AuthClient(client);
    }
    authenticate({ address, username, picture }) {
        return new Promise((resolve, reject) => {
            this.client.auth((0, builder_1.build_AuthRequest)(address, username, picture), (error, message) => !error
                ? resolve(this._getTokenFromResponse(message))
                : reject(error));
        });
    }
    update({ address, username, picture }) {
        return new Promise((resolve, reject) => {
            this.client.update((0, builder_1.build_AuthRequest)(address, username, picture), (error, message) => !error
                ? resolve(this._getTokenFromResponse(message))
                : reject(error));
        });
    }
    getUser({ authId }) {
        return new Promise((resolve, reject) => {
            this.client.getUser((0, builder_1.build_GetUserRequest)(authId), (error, message) => !error
                ? resolve(this._getUserFromResponse(message))
                : reject(error));
        });
    }
    getUsers({ limit, skip }) {
        return new Promise((resolve, reject) => {
            const $ = this.client.getUsers((0, builder_1.build_Pagination)(limit, skip)), list = [];
            $.on('data', (m) => list.push(this._getUserFromResponse(m)));
            $.on('error', (error) => reject(error));
            $.on('end', () => resolve(list));
        });
    }
    _getUserFromResponse(m) {
        return {
            address: m.hasAddress() ? m.getAddress().getValue() : '',
            username: m.hasUsername() ? m.getUsername().getValue() : '',
            picture: m.hasPicture() ? m.getPicture().getValue() : '',
        };
    }
    _getTokenFromResponse(m) {
        return m.hasToken() ? m.getToken().getValue() : '';
    }
}
exports.default = AuthClient;
