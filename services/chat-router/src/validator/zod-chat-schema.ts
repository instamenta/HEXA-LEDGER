/** @file Zod validation Schema for Chat. */

import {z} from 'zod';

export const getMessagesSchema = z.object({
   query: z.object({
      limit: z.coerce.number().refine((v) => v > 0).default(5),
      page: z.coerce.number().refine((v) => v > 0).default(1),
      filter: z.string().default(''),
   }),
   params: z.object({
      userId: z.string().uuid()
   }),
   userData: z.object({
      _id: z.string().length(24, {
         message: 'Must be valid ObjectId',
      }),
   })
});

export const sendMessageSchema = z.object({
   body: z.object({
      content: z.string().min(1).max(10)
   }),
   params: z.object({
      userId: z.string().uuid()
   }),
   userData: z.object({
      id: z.string().uuid()
   })
});

export const editMessageSchema = z.object({
   params: z.object({
      userId: z.string().uuid(),
      messageId: z.string().uuid(),
   }),
   body: z.object({
      content: z.string().min(1).max(120)
   }),
   userData: z.object({
      id: z.string().uuid()
   })
});

export const userAndMessageIdSchema = z.object({
   params: z.object({
      limit: z.coerce.number().refine((v) => v > 0).default(5),
      page: z.coerce.number().refine((v) => v > 0).default(1),
      filter: z.string().default(''),
   }),
   userData: z.object({
      id: z.string().uuid()
   })
});

export const sendReplySchema = z.object({
   params: z.object({
      userId: z.string().uuid(),
      messageId: z.string().uuid()
   }),
   body: z.object({
      content: z.string().min(1).max(120)
   }),
   userData: z.object({
      id: z.string().uuid()
   })
});

export const editReplySchema = z.object({
   params: z.object({
      userId: z.string().uuid(),
      messageId: z.string().uuid(),
      replyId: z.string().uuid(),
   }),
   body: z.object({
      content: z.string().min(1).max(120)
   }),
   userData: z.object({
      id: z.string().uuid()
   })
});

export const userMessageAndReplyIdSchema = z.object({
   params: z.object({
      userId: z.string().uuid(),
      messageId: z.string().uuid(),
      replyId: z.string().uuid(),
   }),
   userData: z.object({
      id: z.string().uuid()
   })
});
