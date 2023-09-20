"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const zod_1 = require("zod");
exports.create = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1).max(48).trim(),
        description: zod_1.z.string().min(3).max(120).trim().default('No Description!'),
        content: zod_1.z.string().min(26).max(360).trim().default('No Content Provided!'),
        images: zod_1.z.array(zod_1.z.string()).default([]),
        owner: zod_1.z.string().length(24),
        promoted: zod_1.z.number().optional().default(0),
        tags: zod_1.z.array(zod_1.z.string()).default([]),
    }),
});
