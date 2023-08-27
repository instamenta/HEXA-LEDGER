"use strict";
/** @file Router for auth. */
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ChatRouter {
    router = (0, express_1.Router)();
    auth;
    handler;
    constructor(handler, auth) {
        this.handler = handler;
        this.auth = auth;
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.get('/:userId', this.auth.isUser, this.handler.getMessages.bind(this.handler));
        this.router.post('/:userId', this.auth.isUser, this.handler.sendMessage.bind(this.handler));
        this.router.patch('/:userId/:messageId', this.auth.isUser, this.handler.editMessage.bind(this.handler));
        this.router.delete('/:userId/:messageId', this.auth.isUser, this.handler.deleteMessage.bind(this.handler));
        this.router.put('/:userId/:messageId/upvote', this.auth.isUser, this.handler.upvoteMessage.bind(this.handler));
        this.router.put('/:userId/:messageId/downvote', this.auth.isUser, this.handler.downvoteMessage.bind(this.handler));
        this.router.post('/:userId/:messageId', this.auth.isUser, this.handler.sendReply.bind(this.handler));
        this.router.patch('/:userId/:messageId/:replyId', this.auth.isUser, this.handler.editReply.bind(this.handler));
        this.router.delete('/:userId/:messageId/:replyId', this.auth.isUser, this.handler.deleteReply.bind(this.handler));
        this.router.put('/:userId/:messageId/:replyId/upvote', this.auth.isUser, this.handler.upvoteReply.bind(this.handler));
        this.router.put('/:userId/:messageId/:replyId/downvote', this.auth.isUser, this.handler.downvoteReply.bind(this.handler));
    }
    static getInstance(handler, auth) {
        return new ChatRouter(handler, auth);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = ChatRouter;
