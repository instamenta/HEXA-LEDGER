"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRouter {
    router = (0, express_1.Router)();
    controller;
    constructor(controller) {
        this.controller = controller;
        this.initialize(this.controller);
    }
    initialize(c) {
        this.router.route('/')
            .get(c.getMany.bind(c))
            .post(c.create.bind(c));
        this.router.get('/count', c.getTotalCount.bind(c));
        this.router.route('/:param')
            .get(c.getOne.bind(c))
            .delete(c.delete.bind(c))
            .put(c.update.bind(c));
        this.router.put('/add-reference/:param/:refId/:service', c.addReferenceId.bind(c));
        this.router.put('/assign-ownership/:param/:refId/:type', c.assignOwnership.bind(c));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = UserRouter;
