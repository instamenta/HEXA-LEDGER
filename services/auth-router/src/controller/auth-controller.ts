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

   async authenticate(req: Request, res: Response): Promise<void> {
      // const { username, picture, address } = ;
      console.log("Received data:", req.body);
      res.sendStatus(200);
   }

   async update(req: Request, res: Response): Promise<void> {
      // const { username, picture, address } = ;
      console.log("Received data:", req.body);
      res.sendStatus(200);
   }

}
