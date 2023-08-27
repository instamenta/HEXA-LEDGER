"use strict";
/** @file Middleware used for auth and token related events. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
class AuthMiddleware {
    tokenTools;
    constructor(tokenTools) {
        this.tokenTools = tokenTools;
    }
    static getInstance(tokenTools) {
        return new AuthMiddleware(tokenTools);
    }
    isAuth(req, res, next) {
        try {
            const { headers: { 'x-authorization-token': xAuthToken } } = req;
            xAuthToken
                ? this.tokenTools.parseAuthToken(xAuthToken.toString())
                    .then((authData) => {
                    req.authData = authData;
                    next();
                })
                    .catch(() => {
                    res.status(http_status_codes_1.default.I_AM_A_TEAPOT)
                        .json({ message: 'X-Authorization-Token is expired or invalid' })
                        .end();
                })
                : res.status(http_status_codes_1.default.UNAUTHORIZED)
                    .json({ message: 'X-Authorization-Token not provided!' })
                    .end();
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: e.message })
                .end();
        }
    }
    isUser(req, res, next) {
        try {
            const { headers: { 'x-UserData-token': xAuthToken } } = req;
            xAuthToken
                ? this.tokenTools.parseUserToken(xAuthToken.toString())
                    .then((userData) => {
                    req.userData = userData;
                    next();
                })
                    .catch(() => {
                    res.status(http_status_codes_1.default.I_AM_A_TEAPOT)
                        .json({ message: 'X-UserData-Token is expired or invalid' })
                        .end();
                })
                : res.status(http_status_codes_1.default.UNAUTHORIZED)
                    .json({ message: 'X-UserData-Token not provided!' })
                    .end();
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: e.message })
                .end();
        }
    }
    isOwner(req, res, next) {
        const { params: { id: resource }, userData: { id: user }, } = req;
        (user === resource) ? next()
            : res.status(http_status_codes_1.default.FORBIDDEN)
                .json({ message: 'You are not the owner of this resource' })
                .end();
    }
    notOwner(req, res, next) {
        const { params: { id: resource }, userData: { id: user }, } = req;
        (user === resource) ? res.status(http_status_codes_1.default.CONFLICT)
            .json({ message: 'Interaction forbidden for resource owner' })
            .end()
            : next();
    }
}
exports.default = AuthMiddleware;
