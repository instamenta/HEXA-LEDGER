import {z} from 'zod';
import {MongoClient, MongoClientOptions} from 'mongodb';

const envSchema = z.object({
   PORT: z.string().default('4002'),
   SERVICE_NAME: z.string().default('HTTP_POST'),
   DB_URI: z.string(),
   DB_NAME: z.string().default('main'),
   DB_THREADS_COLLECTION: z.string().default('threads')
});

const env = envSchema.parse(process.env);

export const config = {
   SERVICE_NAME: env.SERVICE_NAME,
   PORT: env.PORT,
   DB_URI: env.DB_URI,
   DB_NAME: env.DB_NAME,
   DB_THREADS_COLLECTION: env.DB_THREADS_COLLECTION || 'threads',
   DB_OPTIONS: {
      appName: env.SERVICE_NAME,
   } as MongoClientOptions,
};

export function getDatabase() {
   console.log('[Connecting to Mongo Client]');
   const db_client = new MongoClient(config.DB_URI, config.DB_OPTIONS);

   console.log(`[Connecting to Database "${config.DB_NAME}]`);
   return db_client.db(config.DB_NAME);
}