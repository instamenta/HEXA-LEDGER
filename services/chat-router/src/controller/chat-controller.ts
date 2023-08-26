/** @file The controller that handles routes request for chat. */
import {Request, Response} from 'express';
import {iRequestWithUser} from '../middleware/auth-middleware';
import StatusCode from '@instamenta/http-status-codes';
import {IVlog, VLogger} from '@instamenta/vlogger';
import * as zod from '../validator/zod-schema';
import {zParse} from '../validator/zod';
import {PrismaClient} from '../../prisma/prisma/client'

export default class ChatController {

   private readonly vlog: IVlog;
   private readonly prisma: PrismaClient

   constructor(vloggger: VLogger, prisma: PrismaClient) {
      this.vlog = vloggger.getVlog(this.constructor.name);
      this.prisma = prisma;
   }

   public static getInstance(vloggger: VLogger, prisma: PrismaClient): ChatController {
      return new ChatController(vloggger, prisma);
   }

   public async getUsers(req: Request, res: Response): Promise<void> {
      try {
         const {
            query: {limit, page, filter},
         } = await zParse(zod.limitPageFilterSchema, req);

         this.client.getUsers(page, limit, filter)
            .then((users) =>
               res.status(StatusCode.OK)
                  .json(users)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to get users'})
            .end();

         this.vlog.error({e, func: 'getUsers'});
      }
   }

   async getAllUsers(req: Request, res: Response): Promise<void> {
      try {
         const {
            query: {limit, page},
         } = await zParse(zod.limitPageSchema, req);

         this.client.getAllUsers(page, limit).then((userList) =>
            res.status(StatusCode.OK)
               .json(userList)
               .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to get all users'})
            .end();

         this.vlog.error({e, func: 'getAllUsers'});
      }
   }

   async getUserById(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {id},
         } = await zParse(zod.idSchema, req);

         this.client.getUserById(id)
            .then((user) =>
               res.status(StatusCode.OK)
                  .json(user)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to get user user'})
            .end();

         this.vlog.error({e, func: 'getUserById'});
      }
   }

   async getUserFollowers(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {id},
            query: {page, limit},
         } = await zParse(zod.idPageLimitSchema, req);

         this.client.getUserFollowers(id, page, limit)
            .then((followers) =>
               res.status(StatusCode.OK)
                  .json(followers)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to get user followers'})
            .end();

         this.vlog.error({e, func: 'getUserFollowers'});
      }
   }

   async getUserFollowing(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {id},
            query: {page, limit},
         } = await zParse(zod.idPageLimitSchema, req);

         this.client.getUserFollowing(id, page, limit)
            .then((following) =>
               res.status(StatusCode.OK)
                  .json(following)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to get user following '})
            .end();

         this.vlog.error({e, func: 'getUserFollowing'});
      }
   }

   async followUser(req: iRequestWithUser, res: Response): Promise<void> {
      try {
         const {
            userData: {_id},
            params: {id},
         } = await zParse(zod.idAndAuthSchema, req);

         this.client.followUser(_id, id)
            .then(() =>
               res.status(StatusCode.OK)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to follow user'})
            .end();

         this.vlog.error({e, func: 'followUser'});
      }
   }

   async unfollowUser(req: iRequestWithUser, res: Response): Promise<void> {
      try {
         const {
            userData: {_id},
            params: {id},
         } = await zParse(zod.idAndAuthSchema, req);

         this.client.unfollowUser(_id, id)
            .then(() =>
               res.status(StatusCode.OK)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to unfollow user'})
            .end();

         this.vlog.error({e, func: 'unfollowUser'});
      }
   }
}
