import {type MongoClientOptions} from 'mongodb';
import {z} from 'zod';

const envSchema = z.object({
   PORT: z.string().default('4002'),
   SERVICE_NAME: z.string().default('HTTP_POST'),
   DB_URI: z.string(),
   DB_NAME: z.string().default('main'),
   DB_THREADS_COLLECTION: z.string().default('threads'),
   CLERK_JWT_PUBLIC_KEY: z.string(),
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
};
