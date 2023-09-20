import {z} from 'zod';
import {MongoClientOptions} from 'mongodb';

const env = z.object({
   PORT: z.string().default('4002'),
   SERVICE_NAME: z.string().default('HTTP_POST'),
   DB_URI: z.string(),
   DB_NAME: z.string().default('main'),
});

env.parse(process.env);

declare global {
   namespace NodeJS {
      interface ProcessEnv extends z.infer<typeof env> {

      }
   }
}

export const config = {
   SERVICE_NAME: process.env.SERVICE_NAME,
   PORT: process.env.PORT,
   DB_URI: process.env.DB_URI,
   DB_NAME: process.env.DB_NAME,
   DB_OPTIONS: {
      appName: process.env.SERVICE_NAME,
   } as MongoClientOptions,
};