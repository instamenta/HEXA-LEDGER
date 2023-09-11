"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.limitSkip = exports.authId = exports.authData = void 0;
const zod_1 = require("zod");
exports.authData = zod_1.z.object({
    body: zod_1.z.object({
        address: zod_1.z.string().min(3),
        username: zod_1.z.string().min(3),
        picture: zod_1.z.string().min(3),
    })
});
exports.authId = zod_1.z.object({
    params: zod_1.z.object({
        authId: zod_1.z.string().length(24),
    }),
});
exports.limitSkip = zod_1.z.object({
    query: zod_1.z.object({
        limit: zod_1.z.coerce.number(),
        skip: zod_1.z.coerce.number(),
    }),
});
