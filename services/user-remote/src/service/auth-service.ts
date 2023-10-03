/** @file Service used for Auth related Server Endpoint Methods. */
import {ServerUnaryCall, sendUnaryData} from '@grpc/grpc-js';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import MongooseUserModel from '../model/schema/user-schema';
import TokenTools from '../utility/token-tools';
import GrpcTools from '../utility/grpc-tools';
import Validator from '../utility/validator';
import {IUser} from '../utility/types/base-types';
import {Empty} from 'google-protobuf/google/protobuf/empty_pb';
import {DeleteResult} from 'mongodb';
import {
   LoginForm as ILoginForm,
   RegisterForm as IRegisterForm,
   UserModel as IUserModel, UpdateForm,
   idRequest
} from '../protos/generated/types/users_pb';

export default class AuthService {

   public static getInstance(): AuthService {
      return new AuthService();
   }

   public async LOGIN(
      call: ServerUnaryCall<ILoginForm, IUserModel>,
      callback: sendUnaryData<IUserModel>
   ): Promise<void> {
      const u = <IUser>await MongooseUserModel.findOne({
         email: call.request.hasEmail() ? call.request.getEmail()!.getValue() : null
      });
      await Validator['VALIDATE_PASSWORD'](
         call.request.hasPassword() ? call.request.getPassword()!.getValue() : null,
         u as IUser
      );
      callback(null, GrpcTools.convertUserModel(u as IUser)
         .setToken(new StringValue().setValue(await TokenTools['GENERATE_TOKEN'](u))));
   }

   public REGISTER(
      call: ServerUnaryCall<IRegisterForm, IUserModel>,
      callback: sendUnaryData<IUserModel>
   ): void {
      Validator['VALIDATE_REGISTER'](
         call.request.hasUsername() ? call.request.getUsername()!.getValue() : null,
         call.request.hasEmail() ? call.request.getEmail()!.getValue() : null,
         call.request.hasPassword() ? call.request.getPassword()!.getValue() : null
      ).then(async (u: IUser) => callback(null, GrpcTools.convertUserModel(u as IUser)
         .setToken(new StringValue().setValue(await TokenTools['GENERATE_TOKEN'](u))))
      );
   }

   public DELETE_USER_BY_ID(
      call: ServerUnaryCall<idRequest, Empty>,
      callback: sendUnaryData<Empty>
   ): void {
      MongooseUserModel.deleteOne({
         _id: Validator['CONVERT_TO_OBJECT_ID'](call.request.hasId() ? call.request.getId()!.getValue() : null)
      }).then((res: DeleteResult) => (res.deletedCount === 1)
         ? callback(null, new Empty())
         : Validator['THROWER']('ERROR WHILE DELETING USER'));
   }

   public UPDATE_USER_BY_ID(
      call: ServerUnaryCall<UpdateForm, IUserModel>,
      callback: sendUnaryData<IUserModel>
   ): void {
      const username = call.request.hasUsername() ? call.request.getUsername()!.getValue() : null
         , email = call.request.hasEmail() ? call.request.getEmail()!.getValue() : null
         , password = call.request.hasPassword() ? call.request.getPassword()!.getValue() : null
      ;
      Validator['VALIDATE_USER_DATA'](username, email, password);
      MongooseUserModel.findOneAndUpdate(
         {_id: Validator['CONVERT_TO_OBJECT_ID'](call.request.hasId() ? call.request.getId()!.getValue() : null)},
         {
            $set: {
               username,
               email,
               password
            }
         },
         {new: true}
      ).then(async (updatedUser: IUser | null) =>
         updatedUser ? callback(null, GrpcTools.convertUserModel(updatedUser)
               .setToken(new StringValue().setValue(await TokenTools['GENERATE_TOKEN'](updatedUser))))
            : Validator['THROWER']('ERROR WHILE UPDATING USER')
      );
   }


}
