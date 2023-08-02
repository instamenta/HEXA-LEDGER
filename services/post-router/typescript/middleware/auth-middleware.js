"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuthenticated = exports.notOwner = exports.isOwner = exports.isGuest = void 0;
/** @file Middleware for validating auth request. */
const token_tools_1 = require("../utility/token-tools");
/**
 * Middleware: isAuthenticated
 * Description: Validates the authorization token and sets the user data in the request object if the token is valid.
 * Throws an error if the token is missing or invalid.
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
            next();
        })
            .catch(() => {
            throw new Error('Invalid authorization token');
        });
    }
    catch (error) {
        response.status(401).json({ message: error.message }).end();
    }
}
exports.isAuthenticated = isAuthenticated;
/**
 * Middleware: isGuest
 * Description: Validates there is not token present and if there is not it lets you continue.
 * Throws an error if the token is valid or present.
 * @param request
 * @param response
 * @param next
 */
function isGuest(request, response, next) {
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
/**
 * Middleware: isOwner
 * Description: Checks if the authenticated user is the owner of the requested resource.
 * Throws an error if the user is not the owner.
 * @param request
 * @param response
 * @param next
 */
function isOwner(request, response, next) {
    const resourceId = request.params?.id;
    const authenticatedUserId = request.userData._id;
    console.log(resourceId, '!+==', authenticatedUserId);
    (authenticatedUserId === resourceId) /* Validates User === Owner */
        ? next()
        : response.json({ message: 'You are not the owner of this resource' })
            .status(403).end();
}
exports.isOwner = isOwner;
/**
 * Middleware: notOwner
 * Description: Checks if the authenticated user is not the owner of the requested resource.
 * Throws an error if the user is the owner.
 * @param request
 * @param response
 * @param next
 */
function notOwner(request, response, next) {
    const resourceId = request.params?.id;
    const authenticatedUserId = request.userData?._id;
    (authenticatedUserId === resourceId) /* Validates User !== Owner */
        ? response.json({ message: 'You are the owner of this resource' })
            .status(403).end()
        : next();
}
exports.notOwner = notOwner;
