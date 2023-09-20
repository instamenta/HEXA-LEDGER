"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatabase = exports.config = void 0;
const zod_1 = require("zod");
const mongodb_1 = require("mongodb");
const envSchema = zod_1.z.object({
    PORT: zod_1.z.string().default('4002'),
    SERVICE_NAME: zod_1.z.string().default('HTTP_POST'),
    DB_URI: zod_1.z.string(),
    DB_NAME: zod_1.z.string().default('main'),
    DB_THREADS_COLLECTION: zod_1.z.string().default('threads')
});
const env = envSchema.parse(process.env);
exports.config = {
    SERVICE_NAME: env.SERVICE_NAME,
    PORT: env.PORT,
    DB_URI: env.DB_URI,
    DB_NAME: env.DB_NAME,
    DB_THREADS_COLLECTION: env.DB_THREADS_COLLECTION || 'threads',
    DB_OPTIONS: {
        appName: env.SERVICE_NAME,
    },
};
function getDatabase() {
    console.log('[Connecting to Mongo Client]');
    const db_client = new mongodb_1.MongoClient(exports.config.DB_URI, exports.config.DB_OPTIONS);
    console.log(`[Connecting to Database "${exports.config.DB_NAME}]`);
    return db_client.db(exports.config.DB_NAME);
}
exports.getDatabase = getDatabase;
