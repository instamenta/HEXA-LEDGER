/** @file Validation schemas for zod. */

import {z} from 'zod';

export const limitPageFilterSchema = z.object({
   query: z.object({
      limit: z.coerce.number().refine(v => v > 0).optional(),
      page: z.coerce.number().refine(v => v > 0).optional(),
      filter: z.string().optional(),
   }),
   params: z.object({
      userId: z.string().uuid()
   }),
   userData: z.object({

   })
});
