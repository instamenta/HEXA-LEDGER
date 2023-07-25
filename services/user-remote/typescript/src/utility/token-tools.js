"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const TOKEN_SECRET = process.env['TOKEN_SECRET'] || 'SECRET';
class TokenTools {
    static GENERATE_TOKEN({ username, email, _id, picture }) {
        const PAYLOAD = { username, email, _id, picture };
        return new Promise((resolve, reject) => {
            (0, jsonwebtoken_1.sign)(PAYLOAD, TOKEN_SECRET, { expiresIn: '60 days' }, (error, token) => error ? reject(error)
                : resolve(token));
        });
    }
    static DECODE_TOKEN(token) {
        return new Promise((resolve, reject) => {
            (0, jsonwebtoken_1.verify)(token, TOKEN_SECRET, (error, decoded) => error ? reject(error)
                : resolve(decoded));
        });
    }
    static VERIFY_TOKEN(token) {
        return (0, jsonwebtoken_1.verify)(token, TOKEN_SECRET);
    }
}
exports.default = TokenTools;
