"use strict";
/** @file Token tools used for cookies and jwt. */
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
class TokenTools {
    token_secret;
    constructor(dot) {
        this.token_secret = dot.GET('TOKEN_SECRET', 'SECRET');
    }
    static getInstance(dot) {
        return new TokenTools(dot);
    }
    generateToken(payload) {
        return new Promise((resolve, reject) => {
            (0, jsonwebtoken_1.sign)(payload, this.token_secret, { expiresIn: '60 days' }, (error, token) => error ? reject(error)
                : resolve(token));
        });
    }
    parseUserToken(token) {
        return new Promise((resolve, reject) => {
            (0, jsonwebtoken_1.verify)(token, this.token_secret, (err, decoded) => err ? reject(err)
                : resolve(JSON.parse(decoded.toString())));
        });
    }
    parseAuthToken(token) {
        return new Promise((resolve, reject) => {
            (0, jsonwebtoken_1.verify)(token, this.token_secret, (err, decoded) => err ? reject(err)
                : resolve(JSON.parse(decoded.toString())));
        });
    }
    verifyToken(token) {
        return (0, jsonwebtoken_1.verify)(token, this.token_secret);
    }
}
exports.default = TokenTools;
