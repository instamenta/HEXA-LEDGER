"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'SECRET';
class TokenTools {
    /**
     * @param u
     * @returns
     */
    static GENERATE_TOKEN(u) {
        const PAYLOAD = {
            username: u.username,
            email: u.email,
            _id: u._id,
            picture: u.picture,
        };
        return new Promise((resolve, reject) => {
            (0, jsonwebtoken_1.sign)(PAYLOAD, 'SECRET', { expiresIn: '60 days' }, (error, token) => error
                ? reject(error)
                : resolve(token));
        });
    }
    /**
     * @param token
     * @returns
     */
    static DECODE_TOKEN(token) {
        return new Promise((resolve, reject) => {
            (0, jsonwebtoken_1.verify)(token, 'SECRET', (error, decoded) => error
                ? reject(error)
                : resolve(decoded));
        });
    }
    /**
     * @param token
     * @returns
     */
    static VERIFY_TOKEN(token) {
        return (0, jsonwebtoken_1.verify)(token, TOKEN_SECRET);
    }
}
exports.default = TokenTools;
