"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ThreadRouter {
    router = (0, express_1.Router)();
    threadController;
    constructor(postController) {
        this.threadController = postController;
        this.initialize(this.threadController);
    }
    initialize(c) {
        this.router.route('/')
            .get(c.getMany)
            .post(c.create);
        this.router.route('/:threadId')
            .get(c.getOne)
            .put(c.update)
            .delete(c.delete);
        this.router.put('/:threadId/like', c.like);
        this.router.put('/:threadId/dislike', c.dislike);
        this.router.put('/:threadId/promote', c.dislike);
        this.router.put('/:threadId/transfer', c.dislike);
        this.router.put('/:threadId/donate', c.donate);
        this.router.get('/owner/:ownerId', c.getByOwner);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = ThreadRouter;
