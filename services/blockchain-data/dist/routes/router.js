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
        this.router.route('/:hash')
            .get(c.getTxById.bind(c));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = HttpRouter;
