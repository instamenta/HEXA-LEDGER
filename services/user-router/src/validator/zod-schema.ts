/** @file Validation schemas for zod. */

import {z} from 'zod';

export const limitPageFilterSchema = z.object({
   query: z.object({
      limit: z.string().transform((v) => +v).refine((v) => v > 0, {
         message: 'Limit must be a positive number',
      }).optional(),
      page: z.string().transform((v) => +v).refine((v) => v > 0, {
         message: 'Page must be a positive number',
      }).optional(),
      filter: z.string().optional(),
   }),
});

export const limitPageSchema = z.object({
   query: z.object({
      limit: z.string().transform((v) => +v).refine((v) => v > 0, {
         message: 'Limit must be a positive number',
      }).optional(),
      page: z.string().transform((v) => +v).refine((v) => v > 0, {
         message: 'Page must be a positive number',
      }).optional(),
   }),
});

export const idSchema = z.object({
   params: z.object({
      id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
});

export const idPageLimitSchema = z.object({
   params: z.object({
      id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
   query: z.object({
      limit: z.string().transform((v) => +v).refine((v) => v > 0, {
         message: 'Limit must be a positive number',
      }).optional(),
      page: z.string().transform((v) => +v).refine((v) => v > 0, {
         message: 'Page must be a positive number',
      }).optional(),
   }),
});

export const idAndAuthSchema = z.object({
   params: z.object({
      id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
   userData: z.object({
      _id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
});

export const registerSchema = z.object({
   body: z.object({
      username: z.string()
         .min(3, 'Username must be at least 3 characters long')
         .max(30, 'Username can\'t exceed 30 characters'),
      email: z.string()
         .email('Invalid email address'),
      password: z.string()
         .min(8, 'Password must be at least 8 characters long')
         .regex(/[\w!#$%&()*+,./:;<>?@[\\\]^{}~-]+/,
            'Password must contain at least one special character or number'),
   }),
});

export const loginSchema = z.object({
   body: z.object({
      email: z.string()
         .email('Invalid email address'),
      password: z.string()
         .min(8, 'Password must be at least 8 characters long')
         .regex(/[\w!#$%&()*+,./:;<>?@[\\\]^{}~-]+/,
            'Password must contain at least one special character or number'),
   }),
});

export const updateUserSchema = z.object({
   params: z.object({
      id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
   body: z.object({
      username: z.string()
         .min(3, 'Username must be at least 3 characters long')
         .max(30, 'Username can\'t exceed 30 characters'),
      email: z.string()
         .email('Invalid email address'),
      password: z.string()
         .min(8, 'Password must be at least 8 characters long')
         .regex(/[\w!#$%&()*+,./:;<>?@[\\\]^{}~-]+/,
            'Password must contain at least one special character or number'),
   }),
});
