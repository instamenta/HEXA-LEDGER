import * as GRPC from '@grpc/grpc-js';
import * as I from '../protos/generated/types/auth_pb';
import {ServiceClient} from '@grpc/grpc-js/build/src/make-client';
import {build_AuthRequest, build_GetUserRequest, build_Pagination} from "../protos/builder/builder";

interface IAuthData {
   address: string,
   username: string,
   picture: string
}

export default class AuthClient {
   private client: ServiceClient

   constructor(client: ServiceClient) {
      this.client = client
   }

   public static getInstance(client: ServiceClient): AuthClient {
      return new AuthClient(client);
   }

   public authenticate({address, username, picture}: IAuthData): Promise<string> {
      return new Promise((resolve, reject) => {
         this.client.auth(build_AuthRequest(
            address,
            username,
            picture,
         ), (error: GRPC.ServiceError, message: I.AuthResponse) => !error
            ? resolve(this._getTokenFromResponse(message))
            : reject(error));
      });
   }

   public update({address, username, picture}: IAuthData): Promise<string> {
      return new Promise((resolve, reject) => {
         this.client.update(build_AuthRequest(
            address,
            username,
            picture,
         ), (error: GRPC.ServiceError, message: I.AuthResponse) => !error
            ? resolve(this._getTokenFromResponse(message))
            : reject(error));
      });
   }

   public getUser({authId}: { authId: string }): Promise<IAuthData> {
      return new Promise((resolve, reject) => {
         this.client.getUser(build_GetUserRequest(
            authId
         ), (error: GRPC.ServiceError, message: I.UserResponse) => !error
            ? resolve(this._getUserFromResponse(message))
            : reject(error));
      });
   }

   public getUsers({limit, skip}: { limit: number, skip: number }): Promise<Array<IAuthData>> {
      return new Promise((resolve, reject) => {
         const $ = this.client.getUsers(build_Pagination(
            limit,
            skip,
         )), list = [] as Array<IAuthData>;

         $.on('data', (m: I.UserResponse) => list.push(this._getUserFromResponse(m)));
         $.on('error', (error: GRPC.ServiceError) => reject(error));
         $.on('end', () => resolve(list));
      });
   }

   private _getUserFromResponse(m: I.UserResponse): IAuthData {
      return {
         address: m.hasAddress() ? m.getAddress()!.getValue() : '',
         username: m.hasUsername() ? m.getUsername()!.getValue() : '',
         picture: m.hasPicture() ? m.getPicture()!.getValue() : '',
      };
   }

   private _getTokenFromResponse(m: I.AuthResponse): string {
      return m.hasToken() ? m.getToken()!.getValue() : '';
   }

}
