/** @file Handles calls to auth endpoints of grpc client. */
import * as GRPC from '@grpc/grpc-js';
import {UserModel} from '../protos/generated/types/users_pb';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import UserGrpcModel from '../model/user-grpc-model';
import {ServiceClient} from '@grpc/grpc-js/build/src/make-client';

const {
   LoginForm,
   RegisterForm,
   UpdateForm,
   idRequest,
} = require('../protos/generated/users_pb');

export default class AuthClient {

   private client: ServiceClient;

   constructor(client: ServiceClient) {
      this.client = client;
   }

   public static getInstance(client: ServiceClient): AuthClient {
      return new AuthClient(client);
   }

   /**
    * @param email
    * @param password
    * @returns
    */
   public loginUser(
      email: string,
      password: string,
   ): Promise<UserGrpcModel> {
      return new Promise((resolve, reject) => {
         const m = new LoginForm()
            .setEmail(new StringValue().setValue(email))
            .setPassword(new StringValue().setValue(password));

         this.client.login(m, (e: GRPC.ServiceError, r: UserModel) =>
            e ? reject(e) : resolve(UserGrpcModel.fromResponse(r)));
      });
   }

   /**
    * @param username
    * @param email
    * @param password
    * @returns
    */
   public registerUser(
      username: string,
      email: string,
      password: string,
   ): Promise<UserGrpcModel> {
      return new Promise((resolve, reject) => {
         const m = new RegisterForm()
            .setUsername(new StringValue().setValue(username))
            .setEmail(new StringValue().setValue(email))
            .setPassword(new StringValue().setValue(password));

         this.client.register(m, (e: GRPC.ServiceError, r: UserModel) =>
            e ? reject(e) : resolve(UserGrpcModel.fromResponse(r)));
      });
   }

   /**
    * @param id
    * @returns
    */
   public deleteUserById(
      id: string,
   ): Promise<boolean> {
      return new Promise((resolve, reject) => {
         const m = new idRequest()
            .setId(new StringValue().setValue(id));

         this.client.deleteUserById(m, (e: GRPC.ServiceError) =>
            e ? reject(e) : resolve(true));
      });
   }

   /**
    * @param id
    * @param username
    * @param email
    * @param password
    * @returns
    */
   public updateUserById(
      id: string,
      username: string,
      email: string,
      password: string,
   ): Promise<UserGrpcModel> {
      return new Promise((resolve, reject) => {
         const m = new UpdateForm()
            .setId(new StringValue().setValue(id))
            .setUsername(new StringValue().setValue(username))
            .setEmail(new StringValue().setValue(email))
            .setPassword(new StringValue().setValue(password));

         this.client.updateUserById(m, (e: GRPC.ServiceError, r: UserModel) =>
            e ? reject(e) : resolve(UserGrpcModel.fromResponse(r)));
      });
   }
}
