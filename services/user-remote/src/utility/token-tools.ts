/** @file Token tools used for Authenticating. */

import {sign, verify, VerifyErrors} from 'jsonwebtoken';
import {ObjectId} from 'bson';

const TOKEN_SECRET = process.env['TOKEN_SECRET'] || 'SECRET';

class TokenTools {

   public static GENERATE_TOKEN(
      {
         username,
         email,
         _id,
         picture
      }: {
            username: string,
            email: string,
            _id: ObjectId,
            picture: string
        }
   ): Promise<string> {
      const PAYLOAD = {username, email, _id, picture};
      return new Promise((resolve, reject) => {
         sign(PAYLOAD, TOKEN_SECRET, {expiresIn: '60 days'},
            (error, token) => error ? reject(error)
               : resolve(<string>token)
         );
      });
   }

   public static DECODE_TOKEN(token: string): Promise<string> {
      return new Promise((resolve, reject) => {
         verify(token, TOKEN_SECRET, (err: VerifyErrors | null, decoded: any) =>
            err ? reject(err)
               : resolve(<string>decoded)
         );
      });
   }

   public static VERIFY_TOKEN(token: string): string {
      return <string>verify(token, TOKEN_SECRET);
   }
}

export default TokenTools;