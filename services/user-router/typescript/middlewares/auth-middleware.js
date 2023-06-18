"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = exports.isGuest = void 0;
const token_tools_1 = require("../utilities/token-tools");
/**
 * @param request
 * @param response
 * @param next
 */
async function isAuthenticated(request, response, next) {
    try {
        const token = request.headers['x-authorization-token'];
        if (!token) {
            throw new Error('Authorization token not provided');
        }
        const extracted = token.toString();
        await (0, token_tools_1.decodeToken)(extracted)
            .then((decoded) => {
            request.userData = decoded;
        })
            .catch((_) => {
            throw new Error('Invalid authorization token');
        });
        next();
    }
    catch (error) {
        response.status(401).json({ message: error.message }).end();
    }
}
exports.isAuthenticated = isAuthenticated;
/**
 * @param request
 * @param response
 * @param next
 */
async function isGuest(request, response, next) {
    try {
        const token = request.headers['x-authorization-token'];
        if (token)
            throw new Error('Valid authorization token');
        else
            next();
    }
    catch (error) {
        response.status(401).json({ message: error.message }).end();
    }
}
exports.isGuest = isGuest;
