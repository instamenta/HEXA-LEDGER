/** @file The controller that handles routes request for user. */
import {Request, Response} from 'express';
import {iRequestWithUser} from '../middleware/auth-middleware';
import * as USER_CLIENT from '../client/user-client';

import StatusCode from '@instamenta/http-status-codes';

/** @class UserController */
export default class UserController {

   /**
    *! Get a list of users.
    *
    * @param request - The request object.
    * @param response - The response object.
    * @example
    * ! fetch('/users?page=1&limit=10')
    */
   getUsers(request: Request, response: Response): void {
      try {
         USER_CLIENT.getUsers(
            request.query?.page ? +request.query!.page : undefined,
            request.query?.limit ? +request.query!.limit : undefined,
            request.query?.filter as string,
         ).then((userList) =>
            response.status(StatusCode.OK)
               .json(userList)
               .end());
      } catch (error: Error | any) {
         response.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: error.message})
            .end();
         console.error(error);
      }
   }


   /**
    *! Get a list of all users.
    *
    * @param request - The request object.
    * @param response - The response object.
    * @example
    * ! fetch('/users/all?page=1&limit=10')
    */
   getAllUsers(request: Request, response: Response): void {
      try {
         USER_CLIENT.getAllUsers(
            request.query?.page ? +request.query!.page : undefined,
            request.query?.limit ? +request.query!.limit : undefined,
         ).then((userList) =>
            response.status(StatusCode.OK)
               .json(userList)
               .end());
      } catch (error: Error | any) {
         response.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: error.message})
            .end();
         console.error(error);
      }
   }

   /**
    *! Get a user by their ID.
    *
    * @param request - The request object.
    * @param response - The response object.
    * @example
    * ! fetch('/users/:id')
    */
   getUserById(request: Request, response: Response): void {
      try {
         USER_CLIENT.getUserById(
            request.params?.id
         ).then((user) =>
            response.status(StatusCode.OK)
               .json(user)
               .end());
      } catch (error: Error | any) {
         response.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: error.message})
            .end();
         console.error(error);
      }
   }


   /**
    *! Get followers of a user.
    *
    * @param request - The request object.
    * @param response - The response object.
    * @example
    * ! fetch('/users/:id/followers?page=1&limit=10')
    */
   getUserFollowers(request: Request, response: Response): void {
      try {
         USER_CLIENT.getUserFollowers(
            request.params?.id,
            request.query?.page ? +request.query!.page : undefined,
            request.query?.limit ? +request.query!.limit : undefined,
         ).then((followers) =>
            response.status(StatusCode.OK)
               .json(followers)
               .end());
      } catch (error: Error | any) {
         response.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: error.message})
            .end();
         console.error(error);
      }
   }

   /**
    *! Get users that a user is following.
    *
    * @param request - The request object.
    * @param response - The response object.
    * @example
    * ! fetch('/users/:id/following?page=1&limit=10')
    */
   getUserFollowing(request: Request, response: Response): void {
      try {
         USER_CLIENT.getUserFollowing(
            request.params?.id,
            request.query?.page ? +request.query!.page : undefined,
            request.query?.limit ? +request.query!.limit : undefined,
         ).then((following) =>
            response.status(StatusCode.OK)
               .json(following)
               .end());
      } catch (error: Error | any) {
         response.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: error.message})
            .end();
         console.error(error);
      }
   }

   /**
    *! Follow a user.
    *
    * @param request - The request object.
    * @param response - The response object.
    * @example
    *!  fetch('/users/follow/:id', {
    *!   method: 'POST',
    *!   headers: {
    *!     Authorization: 'Bearer YOUR_ACCESS_TOKEN'
    *!   }
    *! })
    */
   followUser(request: iRequestWithUser, response: Response): void {
      try {
         USER_CLIENT.followUser(
            request.userData._id,
            request.params?.id,
         ).then(() =>
            response.status(StatusCode.OK)
               .end());
      } catch (error: Error | any) {
         response.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: error.message})
            .end();
         console.error(error);
      }
   }

   /**
    *! Unfollow a user.
    * @param request - The request object.
    * @param response - The response object.
    * @example
    *! fetch('/users/unfollow/:id', {
    *!  method: 'POST',
    *!  headers: {
    *!    Authorization: 'Bearer YOUR_ACCESS_TOKEN'
    *!  }
    *!})
    */
   unfollowUser(request: iRequestWithUser, response: Response): void {
      try {
         USER_CLIENT.unfollowUser(
            request.userData._id,
            request.params?.id
         ).then(() =>
            response.status(StatusCode.OK)
               .end());
      } catch (error: Error | any) {
         response.status(StatusCode.INTERNAL_SERVER_ERROR)
            .json({message: error.message})
            .end();
         console.error(error);
      }
   }
}


// /**
//  *
//  * @param request
//  * @param response
//  */
// Async function getUserComments(request: Request, response: Response): void {
// 	Try {
// 		Const { id } = request.params;
// 		Const comments = await USER_CLIENT.getUserComments(id);
// 		Response.json(comments).status(StatusCode.OK).end();
// 	} catch (error: Error | any) {
// 		Console.error(error);
// 		Response.json({ message: error.message }).status(StatusCode.INTERNAL_SERVER_ERROR).end();
// 	}
// }
