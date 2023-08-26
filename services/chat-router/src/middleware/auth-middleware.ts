/** @file Middleware used for auth and token related events. */
import {decodeToken} from '../utility/token-tools';
import {Request, Response, NextFunction} from 'express';
import HttpResponse from '@instamenta/http-status-codes'

export type ITokenData = {
   _id: string;
   username: string;
   email: string;
   picture: string;
   iat: number;
   exp: number;
}

export interface iRequestWithUser extends Request {
   userData: ITokenData
}

export default class AuthMiddleware {

   public static getInstance(): AuthMiddleware {
      return new AuthMiddleware();
   }

   public isAuth(req: iRequestWithUser, res: Response, next: NextFunction): void {
      try {
         const {headers: {'x-authorization-token': xAuthToken}} = req;
         !xAuthToken
            ? res.status(HttpResponse.UNAUTHORIZED)
               .json({message: 'X-Authorization-Token not provided!'})
               .end()
            : decodeToken(xAuthToken.toString())
               .then((userData) => {
                  req.userData = userData;
                  next();
               })
               .catch(() => {
                  res.status(HttpResponse.I_AM_A_TEAPOT)
                     .json({message: 'X-Authorization-Token is expired or invalid'})
                     .end()
               });
      } catch (e: Error | any) {
         res.status(HttpResponse.INTERNAL_SERVER_ERROR)
            .json({message: e.message})
            .end();
      }
   }

   public isGuest(req: Request, res: Response, next: NextFunction): void {
      try {
         const {headers: {'x-authorization-token': token}} = req;
         !token ? next()
            : res.status(HttpResponse.CONFLICT)
               .json({message: 'This resource is only for Guest users'})
               .end();
      } catch (e: Error | any) {
         res.status(HttpResponse.INTERNAL_SERVER_ERROR)
            .json({message: e.message})
            .end();
      }
   }

   public isOwner(req: iRequestWithUser, res: Response, next: NextFunction): void {
      const {
         params: {id: resource},
         userData: {_id: user},
      } = req;
      (user === resource) ? next()
         : res.status(HttpResponse.FORBIDDEN)
            .json({message: 'You are not the owner of this resource'})
            .end();
   }

   public notOwner(req: iRequestWithUser, res: Response, next: NextFunction): void {
      const {
         params: {id: resource},
         userData: {_id: user},
      } = req;
      (user !== resource) ? next()
         : res.status(HttpResponse.CONFLICT)
            .json({message: "Interaction forbidden for resource owner"})
            .end();
   }

}
