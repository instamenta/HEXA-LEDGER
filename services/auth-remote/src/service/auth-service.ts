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
   UpdateResult,
   InsertOneResult,
} from 'mongodb';
import TokenTools from "../utility/token-tools";

export interface AuthData extends Document {
   u: Buffer;
   p: Buffer;
   a: Buffer;
}

export default class AuthService {
   private readonly vlog: IVlog;
   private readonly collection: Collection<AuthData>;
   private readonly tokenTools: TokenTools;

   constructor(vlogger: VLogger, db: Db, tokenTools: TokenTools) {
      this.vlog = vlogger.getVlog(this.constructor.name);
      this.collection = db.collection('auth');
      this.tokenTools = tokenTools;
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
            , username = r.hasUsername() ? r.getUsername()!.getValue() : null
            , picture = r.hasPicture() ? r.getPicture()!.getValue() : null
            , address = r.hasAddress() ? r.getAddress()!.getValue() : null
         ;
         if (!username || !picture || !address) throw new Error('Invalid Data');

         const result = await this.collection.insertOne({
            a: Buffer.from(address.replace(/^0x/, ''), 'hex'),
            u: Buffer.from(username),
            p: Buffer.from(picture),
         }) as InsertOneResult<AuthData>;

         callback(null, build_AuthResponse(
            this.tokenTools.generateToken({
               authId: result.insertedId.toString(),
               address: '0x' + address,
               username, picture,
            })
         ));

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
         const r = call.request
            , username = r.hasUsername() ? r.getUsername()!.getValue() : null
            , picture = r.hasPicture() ? r.getPicture()!.getValue() : null
            , address = r.hasAddress() ? r.getAddress()!.getValue() : null
         ;

         if (!address || !picture || !username) throw new Error('Invalid data');

         const result = await this.collection.updateOne(
            {a: Buffer.from(address.replace(/^0x/, ''), 'hex')},
            {p: Buffer.from(picture), u: Buffer.from(username)},
         ) as UpdateResult<WithId<AuthData>>;

         if (result.modifiedCount === 0) throw new Error('Unknown user');

         callback(null, build_AuthResponse(
            this.tokenTools.generateToken({
               authId: result.upsertedId.toString(),
               address: '0x' + address,
               username, picture,
            })
         ));
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
         const r = call.request
            , authId = r.hasAuthId() ? r.getAuthId()!.getValue() : null;

         if (!authId || !ObjectId.isValid(authId)) throw new Error('invalid Data')

         const result = await this.collection.findOne(
            {_id: new ObjectId(authId)}
         ) as WithId<AuthData> | null;

         if (!result) throw new Error('User not found');

         callback(null, build_UserResponse(
            result._id.toString(),
            '0x' + result.a.buffer.toString('hex'),
            result.u.buffer.toString(),
            result.p.buffer.toString(),
         ));
      } catch (e) {
         this.vlog.error({e, func: "getUserById", msg: "Unknown error"})
         callback(e);
      }
   }

   public async getUsers(
      call: ServerWritableStream<I.Pagination, I.UserResponse>,
   ): Promise<void> {
      try {
         const r = call.request
            , limit = r.hasLimit() ? r.getLimit()!.getValue() : 6
            , skip = r.hasSkip() ? r.getSkip()!.getValue() : 1;

         const result = await this.collection.find({
            $skip: ((skip - 1) * limit),
            $limit: (limit),
         }).toArray() as Array<WithId<AuthData>>;

         for (let i = 0; i < result.length; i++) {
            call.write(build_UserResponse(
               result[i]._id.toString(),
               '0x' + result[i].a.buffer.toString('hex'),
               result[i].u.buffer.toString(),
               result[i].p.buffer.toString(),
            ));
         }
      } catch (e) {
         this.vlog.error({e, func: "getUserById", msg: "Unknown error"});
         call.emit(e);
      } finally {
         call.end();
      }
   }


}
