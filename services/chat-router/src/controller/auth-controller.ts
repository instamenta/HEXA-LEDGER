/** @file Controller for handling user request. */

import {Response, Request} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import {IVlog, VLogger} from '@instamenta/vlogger';
import * as zod from '../validator/zod-auth-schema';
import {zParse} from '../validator/zod';
import AuthService from '../service/auth-service';
import {AnyZodObject} from 'zod';

interface IClassParams {
   vlogger: VLogger,
   authService: AuthService
}

export default class AuthController {

   private readonly vlog: IVlog;
   private readonly service: AuthService;

   constructor(vloggger: VLogger, service: AuthService) {
      this.vlog = vloggger.getVlog(this.constructor.name);
      this.service = service;
   }

   public static getInstance({vlogger, authService}: IClassParams): AuthController {
      return new AuthController(vlogger, authService);
   }

   public async createUser(req: Request, res: Response): Promise<void> {
      try {
         const {
            body: {username},
            userData: {_id: authId}
         } = await zParse(zod.userSchema as AnyZodObject, req);

         this.service.createUser(username, authId)
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

   public async editUser(req: Request, res: Response): Promise<void> {
      try {
         const {
            body: {username},
            userData: {_id: authId}
         } = await zParse(zod.userSchema as AnyZodObject, req);

         this.service.editUser(res, username, authId)
            .then((user) =>
               res.status(StatusCode.OK)
                  .json(user)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to get user followers'})
            .end();

         this.vlog.error({e, func: 'getUserFollowers'});
      }
   }

   public async getUsers(req: Request, res: Response): Promise<void> {
      try {
         const {
            query: {limit, page, filter},
         } = await zParse(zod.limitPageFilterSchema as AnyZodObject, req);

         this.service.getUsers(page, limit, filter)
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

   public async getUser(req: Request, res: Response): Promise<void> {
      try {
         const {
            param: {userId: id},
         } = await zParse(zod.getUserSchema as AnyZodObject, req);

         this.service.getUser(id)
            .then((user) =>
               res.status(StatusCode.OK)
                  .json(user)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to get all users'})
            .end();

         this.vlog.error({e, func: 'getAllUsers'});
      }
   }

}
