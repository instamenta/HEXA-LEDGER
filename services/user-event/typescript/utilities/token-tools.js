"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.decodeToken = exports.generateToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const TOKEN_SECRET = process.env.TOKEN_SECRET || 'SECRET';
/**
 * @param u
 * @returns
 */
function generateToken(u) {
    const PAYLOAD = {
        username: u.username,
        email: u.email,
        _id: u._id,
        picture: u.picture,
    };
    return new Promise((resolve, reject) => {
        (0, jsonwebtoken_1.sign)(PAYLOAD, 'SECRET', { expiresIn: '60 days' }, (error, token) => error ? reject(error) : resolve(token));
    });
}
exports.generateToken = generateToken;
/**
 * @param token
 * @returns
 */
function decodeToken(token) {
    return new Promise((resolve, reject) => {
        (0, jsonwebtoken_1.verify)(token, 'SECRET', (error, decoded) => {
            error ? reject(error) : resolve(decoded);
        });
    });
}
exports.decodeToken = decodeToken;
/**
 * @param token
 * @returns
 */
function verifyToken(token) {
    return (0, jsonwebtoken_1.verify)(token, TOKEN_SECRET);
}
exports.verifyToken = verifyToken;
