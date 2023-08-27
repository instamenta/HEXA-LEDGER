/** @file Token tools used for cookies and jwt. */

import {sign, verify, VerifyErrors} from 'jsonwebtoken';
import DotConfigurator from 'dot_configurator';

export interface IUserToken {
   id: string,
   username: string,
   authId: string,
   picture: string,
   createdAt: Date
}

export interface IParsedAuthToken {
   _id: string;
   username: string;
   email: string;
   picture: string;
   iat: number;
   exp: number;
}

export default class TokenTools {

   private readonly token_secret: string;

   constructor(dot: DotConfigurator) {
      this.token_secret = dot.GET('TOKEN_SECRET', 'SECRET');
   }

   public static getInstance(dot: DotConfigurator): TokenTools {
      return new TokenTools(dot);
   }

   public generateToken(payload: IUserToken): Promise<string> {
      return new Promise((resolve, reject) => {
         sign(payload, this.token_secret, {expiresIn: '60 days'},
            (error, token) => error ? reject(error)
               : resolve(<string>token)
         );
      });
   }

   public parseUserToken(token: string): Promise<IUserToken> {
      return new Promise((resolve, reject) => {
         verify(token, this.token_secret, (err: VerifyErrors | null, decoded: any) =>
            err ? reject(err)
               : resolve(JSON.parse(decoded.toString()))
         );
      });
   }

   public parseAuthToken(token: string): Promise<IParsedAuthToken> {
      return new Promise((resolve, reject) => {
         verify(token, this.token_secret, (err: VerifyErrors | null, decoded: any) =>
            err ? reject(err)
               : resolve(JSON.parse(decoded.toString()))
         );
      });
   }

   public verifyToken(token: string): string {
      return <string>verify(token, this.token_secret);
   }

}
