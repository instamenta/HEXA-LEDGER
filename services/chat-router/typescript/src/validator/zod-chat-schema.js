"use strict";
/** @file Zod validation Schema for Chat. */
Object.defineProperty(exports, "__esModule", { value: true });
exports.userMessageAndReplyIdSchema = exports.editReplySchema = exports.sendReplySchema = exports.userAndMessageIdSchema = exports.editMessageSchema = exports.sendMessageSchema = exports.getMessagesSchema = void 0;
const zod_1 = require("zod");
exports.getMessagesSchema = zod_1.z.object({
    query: zod_1.z.object({
        limit: zod_1.z.coerce.number().refine((v) => v > 0).default(5),
        page: zod_1.z.coerce.number().refine((v) => v > 0).default(1),
        filter: zod_1.z.string().default(''),
    }),
    params: zod_1.z.object({
        userId: zod_1.z.string().uuid()
    }),
    userData: zod_1.z.object({
        _id: zod_1.z.string().length(24, {
            message: 'Must be valid ObjectId',
        }),
    })
});
exports.sendMessageSchema = zod_1.z.object({
    body: zod_1.z.object({
        content: zod_1.z.string().min(1).max(10)
    }),
    params: zod_1.z.object({
        userId: zod_1.z.string().uuid()
    }),
    userData: zod_1.z.object({
        id: zod_1.z.string().uuid()
    })
});
exports.editMessageSchema = zod_1.z.object({
    params: zod_1.z.object({
        userId: zod_1.z.string().uuid(),
        messageId: zod_1.z.string().uuid(),
    }),
    body: zod_1.z.object({
        content: zod_1.z.string().min(1).max(120)
    }),
    userData: zod_1.z.object({
        id: zod_1.z.string().uuid()
    })
});
exports.userAndMessageIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        limit: zod_1.z.coerce.number().refine((v) => v > 0).default(5),
        page: zod_1.z.coerce.number().refine((v) => v > 0).default(1),
        filter: zod_1.z.string().default(''),
    }),
    userData: zod_1.z.object({
        id: zod_1.z.string().uuid()
    })
});
exports.sendReplySchema = zod_1.z.object({
    params: zod_1.z.object({
        userId: zod_1.z.string().uuid(),
        messageId: zod_1.z.string().uuid()
    }),
    body: zod_1.z.object({
        content: zod_1.z.string().min(1).max(120)
    }),
    userData: zod_1.z.object({
        id: zod_1.z.string().uuid()
    })
});
exports.editReplySchema = zod_1.z.object({
    params: zod_1.z.object({
        userId: zod_1.z.string().uuid(),
        messageId: zod_1.z.string().uuid(),
        replyId: zod_1.z.string().uuid(),
    }),
    body: zod_1.z.object({
        content: zod_1.z.string().min(1).max(120)
    }),
    userData: zod_1.z.object({
        id: zod_1.z.string().uuid()
    })
});
exports.userMessageAndReplyIdSchema = zod_1.z.object({
    params: zod_1.z.object({
        userId: zod_1.z.string().uuid(),
        messageId: zod_1.z.string().uuid(),
        replyId: zod_1.z.string().uuid(),
    }),
    userData: zod_1.z.object({
        id: zod_1.z.string().uuid()
    })
});
