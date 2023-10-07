"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class HttpRouter {
    constructor(controller) {
        this.controller = controller;
        this.router = (0, express_1.Router)();
        this.initialize(this.controller);
    }
    initialize(c) {
        this.router.route('/transaction/:hash')
            .get(c.getTransactionByHash.bind(c));
        this.router.route('/transaction/receipt/:hash')
            .get(c.getTransactionReceiptByHash.bind(c));
        this.router.route('/address/balance/:address')
            .get(c.getBalanceByAddress.bind(c));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = HttpRouter;
