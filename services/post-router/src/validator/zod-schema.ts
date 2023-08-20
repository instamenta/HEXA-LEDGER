/** @file Validation schemas for zod. */

import {z} from 'zod';

export const createPostSchema = z.object({
   body: z.object({
      title: z.string().min(3),
      description: z.string().max(100).optional(),
      authorId: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
      pictures: z.array(z.string()).optional(),
      isPromoted: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
   }),
});

export const updatePostSchema = z.object({
   params: z.object({
      id: z.string().length(24, {
         message: 'Must be valid Object id',
      }),
   }),
   body: z.object({
      title: z.string().min(3),
      description: z.string().max(100).optional(),
      authorId: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
      pictures: z.array(z.string()).optional(),
      isPromoted: z.boolean().optional(),
      tags: z.array(z.string()).optional(),
   }),
   userData: z.object({
      _id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
});

export const getPostsSchema = z.object({
   query: z.object({
      limit: z.string().transform((v) => +v).refine((v) => v > 0, {
         message: 'Limit must be a positive number',
      }).optional(),
      page: z.string().transform((v) => +v).refine((v) => v > 0, {
         message: 'Page must be a positive number',
      }).optional(),
      filter: z.string().optional(),
      match: z.string().optional(),
   }),
   body: z.object({
      ids: z.array(z.string().length(24, {
         message: 'Must be valid ObjectId',
      })).optional(),
   }),
});

export const idSchema = z.object({
   params: z.object({
      id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
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

export const getUserPostsSchema = z.object({
   params: z.object({
      userId: z.string().length(24, {
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
      filter: z.string().optional(),
      match: z.string().optional(),
   }),
});

export const getPostCommentsSchema = z.object({
   params: z.object({
      postId: z.string().length(24, {
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

export const createCommentSchema = z.object({
   params: z.object({
      postId: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
   userData: z.object({
      _id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
   body: z.object({
      content: z.string().min(1, {
         message: 'comment body must be present'
      }).max(100, {
         message: 'comment body must be less than 100 chars'
      })
   })
});

export const updateCommentSchema = z.object({
   params: z.object({
      postId: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
      commentId: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
   userData: z.object({
      _id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
   body: z.object({
      content: z.string().min(1, {
         message: 'comment body must be present'
      }).max(100, {
         message: 'comment body must be less than 100 chars'
      })
   })
});

export const deleteCommentSchema = z.object({
   params: z.object({
      commentId: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
   userData: z.object({
      _id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
});

export const voteCommentSchema = z.object({
   params: z.object({
      commentId: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
   userData: z.object({
      _id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   }),
});
