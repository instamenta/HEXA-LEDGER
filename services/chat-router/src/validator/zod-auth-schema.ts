/** @file Zod validation Schema for User. */

import {z} from 'zod';

export const limitPageFilterSchema = z.object({
   query: z.object({
      limit: z.coerce.number().refine((v) => v > 0).default(5),
      page: z.coerce.number().refine((v) => v > 0).default(1),
      filter: z.string().default(''),
   })
});

export const userSchema = z.object({
   body: z.object({
      username: z.string().min(3),
   }),
   userData: z.object({
      _id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   })
});

export const getUserSchema = z.object({
   param: z.object({
      userId: z.string().uuid()
   })
});

