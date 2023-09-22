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
            .get(c.getMany.bind(c))
            .post(c.create.bind(c));
        this.router.get('/stream', c.getMany_$.bind(c));
        this.router.route('/:threadId')
            .get(c.getOne.bind(c))
            .put(c.update.bind(c))
            .delete(c.delete.bind(c));
        this.router.put('/:threadId/like', c.like.bind(c));
        this.router.put('/:threadId/dislike', c.dislike.bind(c));
        this.router.put('/:threadId/promote', c.dislike.bind(c));
        this.router.put('/:threadId/transfer', c.dislike.bind(c));
        this.router.put('/:threadId/donate', c.donate.bind(c));
        this.router.get('/owner/:ownerId', c.getByOwner.bind(c));
    }
    getRouter() {
        return this.router;
    }
}
exports.default = ThreadRouter;
