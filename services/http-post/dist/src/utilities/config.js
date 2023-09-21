"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabase = exports.getServer = exports.config = void 0;
const zod_1 = require("zod");
const mongodb_1 = require("mongodb");
const clerk_sdk_node_1 = require("@clerk/clerk-sdk-node");
const express_1 = __importDefault(require("express"));
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().default('4002'),
    SERVICE_NAME: zod_1.z.string().default('HTTP_POST'),
    DB_URI: zod_1.z.string(),
    DB_NAME: zod_1.z.string().default('main'),
    DB_THREADS_COLLECTION: zod_1.z.string().default('threads'),
    CLERK_JWT_PUBLIC_KEY: zod_1.z.string(),
});
const env = envSchema.parse(process.env);
exports.config = {
    SERVICE_NAME: env.SERVICE_NAME,
    PORT: env.PORT,
    DB_URI: env.DB_URI,
    DB_NAME: env.DB_NAME,
    DB_THREADS_COLLECTION: env.DB_THREADS_COLLECTION || 'threads',
    DB_OPTIONS: { appName: env.SERVICE_NAME, },
    CLERK_JWT_PUBLIC_KEY: env.CLERK_JWT_PUBLIC_KEY,
};
function getServer() {
    const _server = (0, express_1.default)();
    _server.use(require('cors')());
    _server.use(express_1.default.json());
    _server.use(require('cookie-parser')());
    console.log(exports.config.CLERK_JWT_PUBLIC_KEY);
    _server.use((0, clerk_sdk_node_1.ClerkExpressWithAuth)({ jwtKey: exports.config.CLERK_JWT_PUBLIC_KEY }));
    return _server;
}
exports.getServer = getServer;
function getDatabase() {
    console.log('[Connecting to Mongo Client]');
    const db_client = new mongodb_1.MongoClient(exports.config.DB_URI, exports.config.DB_OPTIONS);
    console.log(`[Connecting to Database "${exports.config.DB_NAME}]`);
    return db_client.db(exports.config.DB_NAME);
}
exports.getDatabase = getDatabase;
