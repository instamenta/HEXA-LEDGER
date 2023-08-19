/** @file Used for validating post routes. */

import {z, AnyZodObject, ZodError, TypeOf} from 'zod';
import {Request, Response, NextFunction} from 'express';

// Export const zValidate = (schema: AnyZodObject) =>
//    (request: Request, response: Response, next: NextFunction) => {
//       Try {
//          Schema.parse({
//             Body: request.body,
//             Query: request.query,
//             Params: request.params,
//          });
//          Next();
//       } catch (error: ZodError | Error | any) {
//          Return response.status(400).send(error.errors);
//       }
//    };

export const createPostSchema = z.object({
   title: z.string({required_error: 'Title is required', invalid_type_error: 'Title must be at least 2 symbols long '}),
   description: z.string().optional(),
   authorId: z.string().optional(),
   pictures: z.array(z.string()).optional(),
   isPromoted: z.boolean().optional().default(false),
   tags: z.array(z.string()).optional(),
});

export type CreatePostSchema = TypeOf<typeof createPostSchema>;


export const getPostsSchema = z.object({
   ids: z.array(z.string()).optional(),
   limit: z.number().optional(),
   page: z.number().optional(),
   filter: z.string().optional(),
   match: z.string().optional(),
});


export const getByIdSchema = z.object({
   id: z.string(),
});

export const updatePostSchema = z.object({
   title: z.string(),
   description: z.string().optional(),
   authorId: z.string(),
   pictures: z.array(z.string()).optional(),
   isPromoted: z.boolean().optional(),
   tags: z.array(z.string()).optional(),
});


export const createCommentSchema = z.object({
   content: z.string(),
   userId: z.string(),
   postId: z.string(),
});


export const updateCommentSchema = z.object({
   content: z.string().optional(),
   userId: z.string().optional(),
   postId: z.string().optional(),
});