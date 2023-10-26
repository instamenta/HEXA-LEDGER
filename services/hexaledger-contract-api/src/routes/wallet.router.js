"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class WalletRouter {
    constructor(controller) {
        this.router = (0, express_1.Router)();
        this.controller = controller;
        this.initialize(this.controller);
    }
    initialize(c) {
        // this.router.get('/balance/:wallet', c.getBalanceByWallet.bind(c))
        this.router.get('/deposit/:amount', c.getUnsignedTransaction.bind(c));
        this.router.get('/address', c.getContractAddress.bind(c));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = WalletRouter;
