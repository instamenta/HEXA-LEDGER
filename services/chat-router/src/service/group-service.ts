/** @file Service that handles Chat. */

import {PrismaClient, Message, MessageReply, Prisma} from '../../prisma/prisma/client';

interface IGetMessages {
   page: number,
   limit: number,
   filter: string,
   userId: string,
   senderId: string
}

export default class GroupService {

   private prisma: PrismaClient;

   constructor(prisma: PrismaClient) {
      this.prisma = prisma;
   }

   public static getInstance(prisma: PrismaClient): GroupService {
      return new GroupService(prisma);
   }

   public getMessages({page, limit, userId, senderId}: IGetMessages): Promise<Message[]> {
      return this.prisma.message.findMany({
         where: {
            OR: [
               {senderId: senderId, recieverId: userId},
               {recieverId: senderId, senderId: userId}
            ]
         },
         skip: (page - 1) * limit,
         take: limit,
         orderBy: {
            createdAt: Prisma.SortOrder.asc
         }
      });
   }

   public sendMessage(userId: string, content: string, senderId: string): Promise<Message> {
      return this.prisma.message.create({
         data: {
            senderId,
            recieverId: userId,
            content
         }
      });
   }

   public editMessage(senderId: string, messageId: string, content: string): Promise<Message | null> {
      return this.prisma.message.update({
         where: {
            id: messageId,
            senderId
         },
         data: {content}
      });
   }

   public deleteMessage(senderId: string, messageId: string): Promise<Message | null> {
      return this.prisma.message.delete({
         where: {
            id: messageId,
            senderId
         }
      });
   }

   public upvoteMessage(senderId: string, messageId: string): Promise<Message | null> {
      return this.prisma.message.update({
         where: {id: messageId},
         data: {upvotes: {push: senderId}}
      });
   }

   public downvoteMessage(senderId: string, messageId: string): Promise<Message | null> {
      return this.prisma.message.update({
         where: {id: messageId},
         data: {downvotes: {push: senderId}}
      });
   }

   public sendReply(senderId: string, messageId: string, content: string): Promise<MessageReply> {
      return this.prisma.messageReply.create({
         data: {
            messageId,
            senderId,
            content
         }
      });
   }

   public editReply(senderId: string, replyId: string, content: string): Promise<MessageReply | null> {
      return this.prisma.messageReply.update({
         where: {
            id: replyId,
            senderId
         },
         data: {content}
      });
   }

   public deleteReply(senderId: string, replyId: string): Promise<MessageReply | null> {
      return this.prisma.messageReply.delete({
         where: {
            id: replyId,
            senderId
         }
      });
   }

   public upvoteReply(senderId: string, replyId: string): Promise<MessageReply | null> {
      return this.prisma.messageReply.update({
         where: {id: replyId},
         data: {upvotes: {push: senderId}}
      });
   }

   public downvoteReply(senderId: string, replyId: string): Promise<MessageReply | null> {
      return this.prisma.messageReply.update({
         where: {id: replyId},
         data: {downvotes: {push: senderId}}
      });
   }

}
