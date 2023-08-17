/** @file Middleware used for auth and token related events. */
import {decodeToken} from '../utility/token-tools';
import {Request, Response, NextFunction} from 'express';

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

/**
 * Middleware: isAuthenticated
 * Description: Validates the authorization token and sets the user data in the request object if the token is valid.
 * Throws an error if the token is missing or invalid.
 * @param request
 * @param response
 * @param next
 */
async function isAuthenticated(request: iRequestWithUser, response: Response, next: NextFunction): Promise<void> {
   try {
      const token: string | string[] | undefined = request.headers['x-authorization-token'];
      if (!token) {
         throw new Error('Authorization token not provided');
      }
      console.log('in');
      const extracted = token.toString();
      await decodeToken(extracted)
         .then((decoded) => {
            request.userData = decoded;
            next();
         })
         .catch(() => {
            throw new Error('Invalid authorization token');
         });
   } catch (error: Error | any) {
      response.status(401).json({message: error.message}).end();
   }
}

/**
 * Middleware: isGuest
 * Description: Validates there is not token present and if there is not it lets you continue.
 * Throws an error if the token is valid or present.
 * @param request
 * @param response
 * @param next
 */
function isGuest(request: Request, response: Response, next: NextFunction): void {
   try {
      const token: string | string[] | undefined = request.headers['x-authorization-token'];
      if (token) {
         throw new Error('Valid authorization token');
      } else {
         next();
      }
   } catch (error: Error | any) {
      response.status(401).json({message: error.message}).end();
   }
}

/**
 * Middleware: isOwner
 * Description: Checks if the authenticated user is the owner of the requested resource.
 * Throws an error if the user is not the owner.
 * @param request
 * @param response
 * @param next
 */
function isOwner(
   request: iRequestWithUser,
   response: Response,
   next: NextFunction
): void {
   const resourceId: string = request.params?.id;
   const authenticatedUserId: string | undefined = request.userData._id;
   (authenticatedUserId === resourceId) /* Validates User === Owner */
      ? next()
      : response.json({message: 'You are not the owner of this resource'})
         .status(403).end();
}

/**
 * Middleware: notOwner
 * Description: Checks if the authenticated user is not the owner of the requested resource.
 * Throws an error if the user is the owner.
 * @param request
 * @param response
 * @param next
 */
function notOwner(request: iRequestWithUser, response: Response, next: NextFunction): void {
   const resourceId: string = request.params?.id;
   const authenticatedUserId: string | undefined = request.userData?._id;
   (authenticatedUserId === resourceId) /* Validates User !== Owner */
      ? response.json({message: 'You are the owner of this resource'})
         .status(403).end()
      : next();
}

export {isGuest, isOwner, notOwner, isAuthenticated};
