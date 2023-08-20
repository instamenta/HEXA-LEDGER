/** @file The controller that handles routes request for user. */
import {Request, Response} from 'express';
import {iRequestWithUser} from '../middleware/auth-middleware';

import StatusCode from '@instamenta/http-status-codes';
import {IVlog, VLogger} from '@instamenta/vlogger';
import UserClient from '../client/user-client';
import * as zod from '../validator/zod-schema';
import {zParse} from '../validator/zod';
import {idAndAuthSchema, idPageLimitSchema, limitPageFilterSchema, limitPageSchema} from '../validator/zod-schema';

export default class UserController {

   private readonly vlog: IVlog;
   private client: UserClient;

   constructor(vloggger: VLogger, client: UserClient) {
      this.vlog = vloggger.getVlog(this.constructor.name);
      this.client = client;
   }

   public static getInstance(vloggger: VLogger, client: UserClient): UserController {
      return new UserController(vloggger, client);
   }

   /**
    *! Get a list of users.
    *
    * @param req - The req object.
    * @param res - The res object.
    * @example
    * ! fetch('/users?page=1&limit=10')
    */
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

   /**
    *! Get a list of all users.
    *
    * @param req - The req object.
    * @param res - The res object.
    * @example
    * ! fetch('/users/all?page=1&limit=10')
    */
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

   /**
    *! Get a user by their ID.
    *
    * @param req - The req object.
    * @param res - The res object.
    * @example
    * ! fetch('/users/:id')
    */
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

   /**
    *! Get followers of a user.
    *
    * @param req - The req object.
    * @param res - The res object.
    * @example
    * ! fetch('/users/:id/followers?page=1&limit=10')
    */
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

   /**
    *! Get users that a user is following.
    *
    * @param req - The req object.
    * @param res - The res object.
    * @example
    * ! fetch('/users/:id/following?page=1&limit=10')
    */
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

   /**
    *! Follow a user.
    *
    * @param req - The req object.
    * @param res - The res object.
    * @example
    *!  fetch('/users/follow/:id', {
    *!   method: 'POST',
    *!   headers: {
    *!     Authorization: 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
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

   /**
    *! Unfollow a user.
    * @param req - The req object.
    * @param res - The res object.
    * @example
    *! fetch('/users/unfollow/:id', {
    *!  method: 'POST',
    *!  headers: {
    *!    Authorization: 'Bearer YOUR_ACCESS_TOKEN'
    *!  }
    *!})
    */
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


// /**
//  *
//  * @param req
//  * @param res
//  */
// Async function getUserComments(req: Request, res: Response): void {
// 	Try {
// 		Const { id } = req.params;
// 		Const comments = await this.client.getUserComments(id);
// 		Response.json(comments).status(StatusCode.OK).end();
// 	} catch (e: Error | any) {
// 		Console.e(e);
// 		Response.json({ message: e.message }).status(StatusCode.INTERNAL_SERVER_ERROR).end();
// 	}
// }
