import {Request, Response} from 'express';
import http from '@instamenta/http-status-codes';
import AuthClient from '../client/auth-client';
import {IVlog, VLogger} from '@instamenta/vlogger';
import {zParse} from '../validator/zod';
import * as zod from '../validator/zod-schema';
import {z} from 'zod';
import {AnyZodObject} from 'zod'
import {authData} from "../validator/zod-schema";

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

   public async authenticate(
      req: Request<null, z.infer<typeof zod.authData>>,
      res: Response
   ): Promise<void> {
      const {
         body: {address, username, picture}
      } = await zod.authData.parseAsync(req)
         .catch((e) => {
            res.status(http.I_AM_A_TEAPOT).json(e).end();
            return this.vlog.error({e, func: 'authenticate'})
         });

      const result = await this.client.authenticate({username, address, picture})
         .catch(console.log)

   }

   public async update(
      req: Request<null, z.infer<typeof zod.authData>>,
      res: Response
   ): Promise<void> {
      const {
         body: {address, username, picture}
      } = await zod.authData.parseAsync(req)
         .catch((e) => {
            res.status(http.I_AM_A_TEAPOT).json(e).end();
            return this.vlog.error({e, func: 'update'})
         });

      const result = await this.client.update({username, address, picture})
         .catch(console.log)

   }

   public async getUser(
      req: Request<z.infer<typeof zod.authId>>,
      res: Response
   ): Promise<void> {
      const data = await zod.authId.parseAsync(req)
         .catch((e) => {
            res.status(http.I_AM_A_TEAPOT).json(e).end();
            return this.vlog.error({e, func: 'getUser'})
         });

      const {param: {authId}}: z.infer<typeof zod.authId> = data;

      const result = await this.client.getUser({authId})
         .catch(console.log)
   }

   public async getUsers(
      req: Request<null, null, z.infer<typeof zod.limitSkip>>,
      res: Response
   ): Promise<void> {
      let data;
      try {
         data = await zod.limitSkip.parseAsync(req) as z.infer<typeof zod.limitSkip>;

      } catch (e) {
         res.status(http.I_AM_A_TEAPOT).json(e).end();
         return this.vlog.error({e, func: 'getUsers'})
      }

      const {query: {limit, skip}} = data;

      const result = await this.client.getUsers({limit, skip})
         .catch(console.log)
   }

}
