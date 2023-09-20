"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const zod_1 = require("zod");
const env = zod_1.z.object({
    PORT: zod_1.z.string().default('4002'),
    SERVICE_NAME: zod_1.z.string().default('HTTP_POST'),
});
env.parse(process.env);
exports.config = {};
