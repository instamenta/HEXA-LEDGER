import * as GRPC from '@grpc/grpc-js';

import {
   AuthResponse as IAuthResponse,
} from '../protos/generated/types/auth_pb';

import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import {ServiceClient} from '@grpc/grpc-js/build/src/make-client';
import {build_AuthRequest} from "../protos/builder/builder";

const {AuthRequest} = require('../protos/generated/auth_pb');

interface IAuthData {
   address: string,
   username: string,
   picture: string
}


export default class AuthClient {

   private client: ServiceClient;

   constructor(client: ServiceClient) {
      this.client = client;
   }

   public static getInstance(client: ServiceClient): AuthClient {
      return new AuthClient(client);
   }

   public authenticate({address, username, picture}: IAuthData): Promise<string> {
      return new Promise((resolve, reject) => {
         this.client.auth(build_AuthRequest(address, username, picture),
            (e: GRPC.ServiceError, r: IAuthResponse) =>
            e ? reject(e) : resolve(r.hasToken() ? r.getToken()!.getValue() : null));
      });
   }

   public update({address, username, picture}: IAuthData): Promise<string> {
      return new Promise((resolve, reject) => {
         const m = new AuthRequest()
            .setAddress(new StringValue().setValue(address))
            .setUsername(new StringValue().setValue(username))
            .setPicture(new StringValue().setValue(picture))
         ;
         this.client.deleteUserById(m, (e: GRPC.ServiceError, r: IAuthResponse) =>
            e ? reject(e) : resolve(r.hasToken() ? r.getToken()!.getValue() : null));
      });
   }

}
