/** @file Controller for handling chat request. */

import {Request, Response} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import {IVlog, VLogger} from '@instamenta/vlogger';
import * as zod from '../validator/zod-chat-schema';
import {zParse} from '../validator/zod';
import ChatService from '../service/chat-service';
import {AnyZodObject} from 'zod';

interface IClassParams {
   vlogger: VLogger,
   chatService: ChatService
}

export default class ChatController {

   private readonly vlog: IVlog;
   private readonly service: ChatService;

   constructor(vloggger: VLogger, service: ChatService) {
      this.vlog = vloggger.getVlog(this.constructor.name);
      this.service = service;
   }

   public static getInstance({vlogger, chatService}: IClassParams): ChatController {
      return new ChatController(vlogger, chatService);
   }

   public async getMessages(req: Request, res: Response): Promise<void> {
      try {
         const {
            query: {limit, page, filter},
            params: {userId},
            userData: {id: senderId}
         } = await zParse(zod.getMessagesSchema as AnyZodObject, req);

         this.service.getMessages({page, limit, filter, userId, senderId})
            .then((messages) =>
               res.status(StatusCode.OK)
                  .json(messages)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to get Messages'})
            .end();

         this.vlog.error({e, func: 'getMessages'});
      }
   }

   public async sendMessage(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {userId},
            body: {content},
            userData: {id: senderId}
         } = await zParse(zod.sendMessageSchema as AnyZodObject, req);

         this.service.sendMessage(userId, content, senderId)
            .then((message) =>
               res.status(StatusCode.OK)
                  .json(message)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to send message'})
            .end();

         this.vlog.error({e, func: 'sendMessage'});
      }
   }

   public async editMessage(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {messageId},
            userData: {id: senderId},
            body: {content}
         } = await zParse(zod.editMessageSchema as AnyZodObject, req);

         this.service.editMessage(senderId, messageId, content)
            .then((message) =>
               res.status(StatusCode.OK)
                  .json(message)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to edit message'})
            .end();

         this.vlog.error({e, func: 'editMessage'});
      }
   }

   public async deleteMessage(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {messageId},
            userData: {id: senderId},
         } = await zParse(zod.userAndMessageIdSchema as AnyZodObject, req);

         this.service.deleteMessage(senderId, messageId)
            .then((message) =>
               res.status(StatusCode.OK)
                  .json(message)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to delete message'})
            .end();

         this.vlog.error({e, func: 'deleteMessage'});
      }
   }

   public async upvoteMessage(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {messageId},
            userData: {id: senderId},
         } = await zParse(zod.userAndMessageIdSchema as AnyZodObject, req);

         this.service.upvoteMessage(senderId, messageId)
            .then((message) =>
               res.status(StatusCode.OK)
                  .json(message)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to upvote message'})
            .end();

         this.vlog.error({e, func: 'upvoteMessage'});
      }
   }

   public async downvoteMessage(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {messageId},
            userData: {id: senderId}
         } = await zParse(zod.userAndMessageIdSchema as AnyZodObject, req);

         this.service.downvoteMessage(senderId, messageId)
            .then((message) =>
               res.status(StatusCode.OK)
                  .json(message)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to downvote message'})
            .end();

         this.vlog.error({e, func: 'downvoteMessage'});
      }
   }

   public async sendReply(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {messageId},
            body: {content},
            userData: {id: senderId},
         } = await zParse(zod.sendReplySchema as AnyZodObject, req);

         this.service.sendReply(senderId, messageId, content)
            .then((reply) =>
               res.status(StatusCode.OK)
                  .json(reply)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to send reply'})
            .end();

         this.vlog.error({e, func: 'sendReply'});
      }
   }

   public async editReply(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {replyId},
            body: {content},
            userData: {id: senderId}
         } = await zParse(zod.editReplySchema as AnyZodObject, req);

         this.service.editReply(senderId, replyId, content)
            .then((reply) =>
               res.status(StatusCode.OK)
                  .json(reply)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to edit reply'})
            .end();

         this.vlog.error({e, func: 'editReply'});
      }
   }

   public async deleteReply(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {replyId},
            userData: {id: senderId}
         } = await zParse(zod.userMessageAndReplyIdSchema as AnyZodObject, req);

         this.service.deleteReply(senderId, replyId)
            .then((reply) =>
               res.status(StatusCode.OK)
                  .json(reply)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to delete reply'})
            .end();

         this.vlog.error({e, func: 'deleteReply'});
      }
   }

   public async upvoteReply(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {replyId},
            userData: {id: senderId}
         } = await zParse(zod.userMessageAndReplyIdSchema as AnyZodObject, req);

         this.service.upvoteReply(senderId, replyId)
            .then((reply) =>
               res.status(StatusCode.OK)
                  .json(reply)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to upvote reply'})
            .end();

         this.vlog.error({e, func: 'upvoteReply'});
      }
   }

   public async downvoteReply(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {replyId},
            userData: {id: senderId}
         } = await zParse(zod.userMessageAndReplyIdSchema as AnyZodObject, req);

         this.service.downvoteReply(senderId, replyId)
            .then((reply) =>
               res.status(StatusCode.OK)
                  .json(reply)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to downvote reply'})
            .end();

         this.vlog.error({e, func: 'downvoteReply'});
      }
   }

}
