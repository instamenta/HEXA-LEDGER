"use strict";
/** @file Service that handles Chat. */
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("../../prisma/prisma/client");
class ChatService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    static getInstance(prisma) {
        return new ChatService(prisma);
    }
    getMessages({ page, limit, userId, senderId }) {
        return this.prisma.message.findMany({
            where: {
                OR: [
                    { senderId: senderId, recieverId: userId },
                    { recieverId: senderId, senderId: userId }
                ]
            },
            skip: (page - 1) * limit,
            take: limit,
            orderBy: {
                createdAt: client_1.Prisma.SortOrder.asc
            }
        });
    }
    sendMessage(userId, content, senderId) {
        return this.prisma.message.create({
            data: {
                senderId,
                recieverId: userId,
                content
            }
        });
    }
    editMessage(senderId, messageId, content) {
        return this.prisma.message.update({
            where: {
                id: messageId,
                senderId
            },
            data: { content }
        });
    }
    deleteMessage(senderId, messageId) {
        return this.prisma.message.delete({
            where: {
                id: messageId,
                senderId
            }
        });
    }
    upvoteMessage(senderId, messageId) {
        return this.prisma.message.update({
            where: { id: messageId },
            data: { upvotes: { push: senderId } }
        });
    }
    downvoteMessage(senderId, messageId) {
        return this.prisma.message.update({
            where: { id: messageId },
            data: { downvotes: { push: senderId } }
        });
    }
    sendReply(senderId, messageId, content) {
        return this.prisma.messageReply.create({
            data: {
                messageId,
                senderId,
                content
            }
        });
    }
    editReply(senderId, replyId, content) {
        return this.prisma.messageReply.update({
            where: {
                id: replyId,
                senderId
            },
            data: { content }
        });
    }
    deleteReply(senderId, replyId) {
        return this.prisma.messageReply.delete({
            where: {
                id: replyId,
                senderId
            }
        });
    }
    upvoteReply(senderId, replyId) {
        return this.prisma.messageReply.update({
            where: { id: replyId },
            data: { upvotes: { push: senderId } }
        });
    }
    downvoteReply(senderId, replyId) {
        return this.prisma.messageReply.update({
            where: { id: replyId },
            data: { downvotes: { push: senderId } }
        });
    }
}
exports.default = ChatService;
