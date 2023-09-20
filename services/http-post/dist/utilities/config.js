"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const zod_1 = require("zod");
const env = zod_1.z.object({
    PORT: zod_1.z.string().default('4002'),
    SERVICE_NAME: zod_1.z.string().default('HTTP_POST'),
    DB_URI: zod_1.z.string(),
    DB_NAME: zod_1.z.string().default('main'),
});
env.parse(process.env);
exports.config = {
    SERVICE_NAME: process.env.SERVICE_NAME,
    PORT: process.env.PORT,
    DB_URI: process.env.DB_URI,
    DB_NAME: process.env.DB_NAME,
    DB_OPTIONS: {
        appName: process.env.SERVICE_NAME,
    },
};
