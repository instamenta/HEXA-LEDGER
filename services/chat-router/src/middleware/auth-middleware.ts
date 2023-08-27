/** @file Middleware used for auth and token related events. */

import {Request, Response, NextFunction} from 'express';
import HttpResponse from '@instamenta/http-status-codes';
import TokenTools, {IParsedAuthToken, IUserToken} from '../utility/token-tools';

export interface iRequestWithUser extends Request {
   userData: IUserToken;
}

export interface iRequestWithAuth extends Request {
   authData: IParsedAuthToken;
}

export default class AuthMiddleware {

   private readonly tokenTools: TokenTools;

   constructor(tokenTools: TokenTools) {
      this.tokenTools = tokenTools;
   }

   public static getInstance(tokenTools: TokenTools): AuthMiddleware {
      return new AuthMiddleware(tokenTools);
   }

   public isAuth(req: iRequestWithAuth, res: Response, next: NextFunction): void {
      try {
         const {headers: {'x-authorization-token': xAuthToken}} = req;
         xAuthToken
            ? this.tokenTools.parseAuthToken(xAuthToken.toString())
               .then((authData) => {
                  req.authData = authData;
                  next();
               })
               .catch(() => {
                  res.status(HttpResponse.I_AM_A_TEAPOT)
                     .json({message: 'X-Authorization-Token is expired or invalid'})
                     .end();
               })
            : res.status(HttpResponse.UNAUTHORIZED)
               .json({message: 'X-Authorization-Token not provided!'})
               .end();
      } catch (e: Error | any) {
         res.status(HttpResponse.INTERNAL_SERVER_ERROR)
            .json({message: e.message})
            .end();
      }
   }

   public isUser(req: iRequestWithUser, res: Response, next: NextFunction): void {
      try {
         const {headers: {'x-UserData-token': xAuthToken}} = req;
         xAuthToken
            ? this.tokenTools.parseUserToken(xAuthToken.toString())
               .then((userData) => {
                  req.userData = userData;
                  next();
               })
               .catch(() => {
                  res.status(HttpResponse.I_AM_A_TEAPOT)
                     .json({message: 'X-UserData-Token is expired or invalid'})
                     .end();
               })
            : res.status(HttpResponse.UNAUTHORIZED)
               .json({message: 'X-UserData-Token not provided!'})
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
         userData: {id: user},
      } = req;
      (user === resource) ? next()
         : res.status(HttpResponse.FORBIDDEN)
            .json({message: 'You are not the owner of this resource'})
            .end();
   }

   public notOwner(req: iRequestWithUser, res: Response, next: NextFunction): void {
      const {
         params: {id: resource},
         userData: {id: user},
      } = req;
      (user === resource) ? res.status(HttpResponse.CONFLICT)
         .json({message: 'Interaction forbidden for resource owner'})
         .end()
         : next();
   }

}
