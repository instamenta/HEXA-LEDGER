/** @file Router for auth. */ 'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AuthRouter {
    router = (0, express_1.Router)();
    auth;
    handler;
    constructor(handler, auth) {
        this.handler = handler;
        this.auth = auth;
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.get('/', this.handler.getUsers.bind(this.handler));
        this.router.get('/:userId', this.handler.getUser.bind(this.handler));
        this.router.post('/:userId', this.auth.isAuth, this.handler.createUser.bind(this.handler));
        this.router.patch('/:userId', this.auth.isAuth, this.auth.isUser, this.handler.editUser.bind(this.handler));
    }
    static getInstance(handler, auth) {
        return new AuthRouter(handler, auth);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = AuthRouter;
