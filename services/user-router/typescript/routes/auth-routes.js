"use strict";
/** @file Router for auth. */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_validator_1 = require("../validator/auth-validator");
const auth_middleware_1 = require("../middleware/auth-middleware");
/**
 * @class AuthRouter
 * @property router
 * @property authController
 */
class AuthRouter {
    router = (0, express_1.Router)();
    authController;
    /**
     * @constructor AuthRouter
     * @param authController
     */
    constructor(authController) {
        this.authController = authController;
        this.router.post('/login', auth_middleware_1.isGuest, auth_validator_1.loginValidator, this.authController.login);
        this.router.post('/register', auth_middleware_1.isGuest, auth_validator_1.registerValidator, this.authController.register);
        this.router.route('/:id')
            .put(auth_middleware_1.isAuthenticated, auth_middleware_1.isOwner, this.authController.updateUserById)
            .delete(auth_middleware_1.isAuthenticated, auth_middleware_1.isOwner, this.authController.deleteUserById);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = AuthRouter;
