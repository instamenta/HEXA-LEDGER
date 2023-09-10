import {ServerUnaryCall, sendUnaryData, ServerWritableStream} from '@grpc/grpc-js';
import {IVlog, VLogger} from "@instamenta/vlogger";
import * as I from '../protos/generated/types/auth_pb';

import {
   build_AuthResponse,
   build_UserResponse
} from "../protos/builder/builder";

import {
   Db,
   Binary,
   Collection,
   WithId,
   ObjectId,
   Document,
   InsertOneResult,
   InsertOneModel,
} from 'mongodb';
import TokenTools from "../utility/token-tools";

export interface AuthData {
   u: Binary;
   p: Binary;
   a: Binary;
}

export default class AuthService {
   private readonly vlog: IVlog;
   private readonly collection: Collection;
   private readonly tokenTools: TokenTools;

   constructor(vlogger: VLogger, db: Db, tokenTools: TokenTools) {
      this.vlog = vlogger.getVlog(this.constructor.name)
      this.collection = db.collection('auth');
   }

   public static getInstance(
      {vlogger, db, tokenTools}:
         { vlogger: VLogger, db: Db, tokenTools: TokenTools }
   ): AuthService {
      return new AuthService(vlogger, db, tokenTools);
   }

   public async auth(
      call: ServerUnaryCall<I.AuthRequest, I.AuthResponse>,
      callback: sendUnaryData<I.AuthResponse>
   ): Promise<void> {
      try {
         const r = call.request
         const username = r.hasUsername() ? r.getUsername()!.getValue() : null
            , picture = r.hasPicture() ? r.getPicture()!.getValue() : null
            , address = r.hasAddress() ? r.getAddress()!.getValue() : null
         ;
         if (!username || !picture || !address) throw new Error('Invalid Data');
         if (address.startsWith('0x')) address.replace('0x', '');

         this.collection.insertOne(
            {
               a: new Binary(Buffer.from(address, 'hex'), 0),
               u: new Binary(Buffer.from(username), 0),
               p: new Binary(Buffer.from(picture), 0),
            }
         ).then((d: InsertOneResult) => {
            callback(null, build_AuthResponse(
               this.tokenTools.generateToken({
                  authId: d.insertedId.toString(),
                  username,
                  picture,
                  address: '0x' + address,
               })
            ));
         });
      } catch (e) {
         this.vlog.error({e, func: "login", msg: "Unknown error"})
         callback(e)
      }
   }

   public async update(
      call: ServerUnaryCall<I.AuthRequest, I.AuthResponse>,
      callback: sendUnaryData<I.AuthResponse>
   ): Promise<void> {
      try {
         const r = call.request;
         const username = r.hasUsername() ? r.getUsername()!.getValue() : null
            , picture = r.hasPicture() ? r.getPicture()!.getValue() : null
            , address = r.hasAddress() ? r.getAddress()!.getValue() : null
         ;

         callback(null, build_AuthResponse());
      } catch (e) {
         this.vlog.error({e, func: "login", msg: "Unknown error"})
         callback(e)
      }
   }

   public async getUser(
      call: ServerUnaryCall<I.GetUserRequest, I.UserResponse>,
      callback: sendUnaryData<I.UserResponse>
   ): Promise<void> {
      try {
         const r = call.request;
         const authId = r.hasAuthId() ? r.getAuthId()!.getValue() : null;
         if (!authId || !ObjectId.isValid(authId)) throw new Error('invalid Data')

         this.collection.findOne(
            {_id: new ObjectId(authId)}
         ).then((d: WithId<AuthData>) => {
               callback(null, build_UserResponse(
                  d._id.toString(),
                  '0x' + d.a.buffer.toString('hex'),
                  d.u.buffer.toString(),
                  d.p.buffer.toString(),
               ))
         });
      } catch (e) {
         this.vlog.error({e, func: "getUserById", msg: "Unknown error"})
         callback(e);
      }
   }

   public async getUsers(
      call: ServerWritableStream<I.Pagination, I.UserResponse>,
   ): Promise<void> {
      try {
         const r = call.request;
         const limit = r.hasLimit() ? r.getLimit()!.getValue() : 6;
         const skip = r.hasSkip() ? r.getSkip()!.getValue() : 1;

         this.collection
            .find()
            .skip((skip - 1) * limit)
            .limit(limit)
            .toArray()
            .then(() => {

            })

         call.write()
      } catch (e) {
         this.vlog.error({e, func: "getUserById", msg: "Unknown error"})
         call.emit(e);
      }
   }


}
