"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'SECRET';
/**
 * @param token
 * @returns
 */
function decodeToken(token) {
    return new Promise((resolve, reject) => {
        (0, jsonwebtoken_1.verify)(token, TOKEN_SECRET, (error, decoded) => {
            error ? reject(error) : resolve(decoded);
        });
    });
}
exports.decodeToken = decodeToken;
