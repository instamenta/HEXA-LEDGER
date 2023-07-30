"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserGrpcModel {
    _id;
    username;
    email;
    password;
    picture;
    token;
    constructor(userData) {
        ({
            _id: this._id,
            username: this.username,
            email: this.email,
            password: this.password,
            picture: this.picture,
            token: this.token,
        } = userData);
    }
    static fromUserGRPCMessage(m) {
        return new UserGrpcModel({
            _id: m.hasId() ? m.getId().getValue() : null,
            username: m.hasUsername() ? m.getUsername().getValue() : null,
            email: m.hasEmail() ? m.getEmail().getValue() : null,
            password: m.hasPassword() ? m.getPassword().getValue() : null,
            picture: m.hasPicture() ? m.getPicture().getValue() : null,
            token: m.hasToken() ? m.getToken().getValue() : null,
        });
    }
}
exports.default = UserGrpcModel;
