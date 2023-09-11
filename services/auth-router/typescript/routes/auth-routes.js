"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class AuthRouter {
    router = (0, express_1.Router)();
    authController;
    constructor(authController) {
        this.authController = authController;
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.post('/auth', this.authController.authenticate.bind(this.authController));
        this.router.put('/auth', this.authController.update.bind(this.authController));
        this.router.get('/user', this.authController.getUser.bind(this.authController));
        this.router.get('/users', this.authController.getUsers.bind(this.authController));
    }
    static getInstance(postController) {
        return new AuthRouter(postController);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = AuthRouter;
