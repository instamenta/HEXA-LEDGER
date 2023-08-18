/** @file Controller used for handling auth related requests. */
import * as AUTH_CLIENT from '../client/auth-client';
import {Request, Response} from 'express';
import StatusCode from '@instamenta/http-status-codes';

export default class AuthController {

constructor(vlogger: ) {
}

   /**
    *! Register a new user.
    *
    * @param request - The request object.
    * @param response - The response object.
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
   register(request: Request, response: Response): void {
      try {
         AUTH_CLIENT.registerUser(
            request.body?.username,
            request.body?.email,
            request.body?.password
         ).then((User) =>
            response.status(StatusCode.OK)
               .json(User)
               .end());
      } catch (error: Error | any) {
         response.status(400)
            .json({message: error.message})
            .end();
         console.log(error);
      }
   }

   /**
    *! Log in a user.
    *
    * @param request - The request object.
    * @param response - The response object.
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
   login(request: Request, response: Response): void {
      try {
         AUTH_CLIENT.loginUser(
            request.body?.email,
            request.body?.password
         ).then((User) =>
            response.status(StatusCode.OK)
               .json(User)
               .end());
      } catch (error: Error | any) {
         response.status(400)
            .json({message: error.message})
            .end();
         console.error(error);
      }
   }

   /**
    *! Update a user by their ID.
    *
    * @param request - The request object.
    * @param response - The response object.
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
   updateUserById(request: Request, response: Response): void {
      try {
         AUTH_CLIENT.updateUserById(
            request.body?.id,
            request.body?.username,
            request.body?.email,
            request.body?.password
         ).then((User) =>
            response.status(StatusCode.OK)
               .json(User)
               .end());
      } catch (error: Error | any) {
         response.status(400)
            .json({message: error.message})
            .end();
         console.error(error);
      }
   }

   /**
    *! Delete a user by their ID.
    *
    * @param request - The request object.
    * @param response - The response object.
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
   deleteUserById(request: Request, response: Response): void {
      try {
         AUTH_CLIENT.deleteUserById(
            request.body?.id
         ).then(() =>
            response.status(StatusCode.OK)
               .end());
      } catch (error: Error | any) {
         response.status(400)
            .json({message: error.message})
            .end();
         console.error(error);
      }
   }
}

