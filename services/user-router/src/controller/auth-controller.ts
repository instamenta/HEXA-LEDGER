/** @file Controller used for handling auth related requests. */

import {Request, Response} from 'express';
import StatusCode from '@instamenta/http-status-codes';
import AuthClient from '../client/auth-client';
import {IVlog, VLogger} from '@instamenta/vlogger';
import {zParse} from '../validator/zod';
import * as zod from '../validator/zod-schema';

export default class AuthController {

   private readonly vlog: IVlog;
   private client: AuthClient;

   constructor(vloggger: VLogger, client: AuthClient) {
      this.vlog = vloggger.getVlog(this.constructor.name);
      this.client = client;
   }

   public static getInstance(vloggger: VLogger, client: AuthClient): AuthController {
      return new AuthController(vloggger, client);
   }

   /**
    *! Register a new user.
    *
    * @param req - The req object.
    * @param res - The res object.
    * @example
    *! fetch('/auth/register', {
    *!   method: 'POST',
    *!   body: JSON.stringify({
    *!     username: 'example_user',
    *!     email: 'example@example.com',
    *!     password: 'example_password'
    *!   }),
    *!   headers: {
    *!     'Content-Type': 'application/json'
    *!   }
    *! })
    */
   async register(req: Request, res: Response): Promise<void> {
      try {
         const {
            body: {username, email, password},
         } = await zParse(zod.registerSchema, req);

         this.client.registerUser(username, email, password)
            .then((User) =>
               res.status(StatusCode.OK)
                  .json(User)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to register user'})
            .end();

         this.vlog.error({e, func: 'register'});
      }
   }

   /**
    *! Log in a user.
    *
    * @param req - The req object.
    * @param res - The res object.
    * @example
    *! fetch('/auth/login', {
    *!   method: 'POST',
    *!   body: JSON.stringify({
    *!     email: 'example@example.com',
    *!     password: 'example_password'
    *!   }),
    *!   headers: {
    *!     'Content-Type': 'application/json'
    *!   }
    *! })
    */
   async login(req: Request, res: Response): Promise<void> {
      try {
         const {
            body: {email, password},
         } = await zParse(zod.loginSchema, req);

         this.client.loginUser(email, password)
            .then((User) =>
               res.status(StatusCode.OK)
                  .json(User)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to login user'})
            .end();

         this.vlog.error({e, func: 'login'});
      }
   }

   /**
    *! Update a user by their ID.
    *
    * @param req - The req object.
    * @param res - The res object.
    * @example
    *! fetch('/auth/update', {
    *!   method: 'PUT',
    *!   body: JSON.stringify({
    *!     id: 'user_id',
    *!     username: 'new_username',
    *!     email: 'new_email@example.com',
    *!     password: 'new_password'
    *!   }),
    *!   headers: {
    *!     'Content-Type': 'application/json'
    *!   }
    *! })
    */
   async updateUser(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {id},
            body: {username, email, password},
         } = await zParse(zod.updateUserSchema, req);


         this.client.updateUserById(id, username, email, password)
            .then((User) =>
               res.status(StatusCode.OK)
                  .json(User)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to update user'})
            .end();

         this.vlog.error({e, func: 'updateUser'});
      }
   }

   /**
    *! Delete a user by their ID.
    *
    * @param req - The req object.
    * @param res - The res object.
    * @example
    *! fetch('/auth/delete', {
    *!   method: 'DELETE',
    *!   body: JSON.stringify({
    *!     id: 'user_id'
    *!   }),
    *!   headers: {
    *!     'Content-Type': 'application/json'
    *!   }
    *! })
    */
   async deleteUser(req: Request, res: Response): Promise<void> {
      try {
         const {
            params: {id},
         } = await zParse(zod.idSchema, req);

         this.client.deleteUserById(id)
            .then(() =>
               res.status(StatusCode.OK)
                  .end());
      } catch (e: Error | any) {
         res.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'failed to delete user'})
            .end();

         this.vlog.error({e, func: 'deleteUserById'});
      }
   }
}

