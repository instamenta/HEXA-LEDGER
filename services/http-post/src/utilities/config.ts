import {type MongoClientOptions} from 'mongodb';
import {z} from 'zod';

const envSchema = z.object({
    PORT: z.string().default('4002'),
    SERVICE_NAME: z.string().default('THREADS_SERVICE'),
    CLERK_JWT_PUBLIC_KEY: z.string(),
    GRPC_PORT: z.string().default('50054'),
    //! DATABASE
    DB_URI: z.string(),
    DB_NAME: z.string().default('main'),
    DB_THREADS_COLLECTION: z.string().default('threads'),
});

const env = envSchema.parse(process.env);

export const config = {
    SERVICE_NAME: env.SERVICE_NAME,
    PORT: env.PORT,
    DB_URI: env.DB_URI,
    DB_NAME: env.DB_NAME,
    DB_THREADS_COLLECTION: env.DB_THREADS_COLLECTION || 'threads',
    DB_OPTIONS: {appName: env.SERVICE_NAME,} as MongoClientOptions,
    CLERK_JWT_PUBLIC_KEY: env.CLERK_JWT_PUBLIC_KEY,
    GRPC_PORT: env.GRPC_PORT
};
