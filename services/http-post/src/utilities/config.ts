import {z} from 'zod';
import {MongoClient, MongoClientOptions} from 'mongodb';
import {ClerkExpressWithAuth, LooseAuthProp} from '@clerk/clerk-sdk-node';
import express from 'express';

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

/* eslint-disable @typescript-eslint/no-var-requires */
export function getServer(): express.Express {
   const _server = express();

   _server.use(require('cors')());
   _server.use(express.json());
   _server.use(require('cookie-parser')());
   _server.use(ClerkExpressWithAuth({jwtKey: config.CLERK_JWT_PUBLIC_KEY }));

   return _server;
}

export function getDatabase() {
   console.log('[Connecting to Mongo Client]');
   const db_client = new MongoClient(config.DB_URI, config.DB_OPTIONS);

   console.log(`[Connecting to Database "${config.DB_NAME}]`);
   return db_client.db(config.DB_NAME);
}

declare global {
   namespace Express {
      interface Request extends LooseAuthProp {
      }
   }
}