"use strict";
/** @file Controller for handling chat request. */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
const zod = __importStar(require("../validator/zod-chat-schema"));
const zod_1 = require("../validator/zod");
class ChatController {
    vlog;
    prisma;
    service;
    constructor(vloggger, prisma, service) {
        this.vlog = vloggger.getVlog(this.constructor.name);
        this.prisma = prisma;
        this.service = service;
    }
    static getInstance({ vlogger, prisma, chatService }) {
        return new ChatController(vlogger, prisma, chatService);
    }
    async getMessages(req, res) {
        try {
            const { query: { limit, page, filter }, params: { userId }, userData: { id: senderId } } = await (0, zod_1.zParse)(zod.getMessagesSchema, req);
            this.service.getMessages({ page, limit, filter, userId, senderId })
                .then((messages) => res.status(http_status_codes_1.default.OK)
                .json(messages)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to get Messages' })
                .end();
            this.vlog.error({ e, func: 'getMessages' });
        }
    }
    async sendMessage(req, res) {
        try {
            const { params: { userId }, body: { content }, userData: { id: senderId } } = await (0, zod_1.zParse)(zod.sendMessageSchema, req);
            this.service.sendMessage(userId, content, senderId)
                .then((message) => res.status(http_status_codes_1.default.OK)
                .json(message)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to send message' })
                .end();
            this.vlog.error({ e, func: 'sendMessage' });
        }
    }
    async editMessage(req, res) {
        try {
            const { params: { messageId }, userData: { id: senderId }, body: { content } } = await (0, zod_1.zParse)(zod.editMessageSchema, req);
            this.service.editMessage(senderId, messageId, content)
                .then((message) => res.status(http_status_codes_1.default.OK)
                .json(message)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to edit message' })
                .end();
            this.vlog.error({ e, func: 'editMessage' });
        }
    }
    async deleteMessage(req, res) {
        try {
            const { params: { messageId }, userData: { id: senderId }, } = await (0, zod_1.zParse)(zod.userAndMessageIdSchema, req);
            this.service.deleteMessage(senderId, messageId)
                .then((message) => res.status(http_status_codes_1.default.OK)
                .json(message)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to delete message' })
                .end();
            this.vlog.error({ e, func: 'deleteMessage' });
        }
    }
    async upvoteMessage(req, res) {
        try {
            const { params: { messageId }, userData: { id: senderId }, } = await (0, zod_1.zParse)(zod.userAndMessageIdSchema, req);
            this.service.upvoteMessage(senderId, messageId)
                .then((message) => res.status(http_status_codes_1.default.OK)
                .json(message)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to upvote message' })
                .end();
            this.vlog.error({ e, func: 'upvoteMessage' });
        }
    }
    async downvoteMessage(req, res) {
        try {
            const { params: { messageId }, userData: { id: senderId } } = await (0, zod_1.zParse)(zod.userAndMessageIdSchema, req);
            this.service.downvoteMessage(senderId, messageId)
                .then((message) => res.status(http_status_codes_1.default.OK)
                .json(message)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to downvote message' })
                .end();
            this.vlog.error({ e, func: 'downvoteMessage' });
        }
    }
    async sendReply(req, res) {
        try {
            const { params: { messageId }, body: { content }, userData: { id: senderId }, } = await (0, zod_1.zParse)(zod.sendReplySchema, req);
            this.service.sendReply(senderId, messageId, content)
                .then((reply) => res.status(http_status_codes_1.default.OK)
                .json(reply)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to send reply' })
                .end();
            this.vlog.error({ e, func: 'sendReply' });
        }
    }
    async editReply(req, res) {
        try {
            const { params: { replyId }, body: { content }, userData: { id: senderId } } = await (0, zod_1.zParse)(zod.editReplySchema, req);
            this.service.editReply(senderId, replyId, content)
                .then((reply) => res.status(http_status_codes_1.default.OK)
                .json(reply)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to edit reply' })
                .end();
            this.vlog.error({ e, func: 'editReply' });
        }
    }
    async deleteReply(req, res) {
        try {
            const { params: { replyId }, userData: { id: senderId } } = await (0, zod_1.zParse)(zod.userMessageAndReplyIdSchema, req);
            this.service.deleteReply(senderId, replyId)
                .then((reply) => res.status(http_status_codes_1.default.OK)
                .json(reply)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to delete reply' })
                .end();
            this.vlog.error({ e, func: 'deleteReply' });
        }
    }
    async upvoteReply(req, res) {
        try {
            const { params: { replyId }, userData: { id: senderId } } = await (0, zod_1.zParse)(zod.userMessageAndReplyIdSchema, req);
            this.service.upvoteReply(senderId, replyId)
                .then((reply) => res.status(http_status_codes_1.default.OK)
                .json(reply)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to upvote reply' })
                .end();
            this.vlog.error({ e, func: 'upvoteReply' });
        }
    }
    async downvoteReply(req, res) {
        try {
            const { params: { replyId }, userData: { id: senderId } } = await (0, zod_1.zParse)(zod.userMessageAndReplyIdSchema, req);
            this.service.downvoteReply(senderId, replyId)
                .then((reply) => res.status(http_status_codes_1.default.OK)
                .json(reply)
                .end());
        }
        catch (e) {
            res.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'failed to downvote reply' })
                .end();
            this.vlog.error({ e, func: 'downvoteReply' });
        }
    }
}
exports.default = ChatController;
