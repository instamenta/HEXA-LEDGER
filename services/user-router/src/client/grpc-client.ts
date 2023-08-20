/** @file Connect and export the grpc client. */

import {credentials} from '@grpc/grpc-js';
import {UserServiceClient} from '../protos/generated/users_grpc_pb';
import DotConfigurator from 'dot_configurator';

export default class GrpcClient {

   private dot: DotConfigurator;

   constructor(dot: DotConfigurator) {
      this.dot = dot;
   }

   public static getInstance(dot: DotConfigurator): GrpcClient {
      return new GrpcClient(dot);
   }

   public connectClient() {
      return new UserServiceClient(
         `${this.dot.GET('USER_REMOTE_REF', 'user-remote-api')}:${this.dot.GET('USER_REMOTE_PORT', 50_051)}`,
         credentials.createInsecure(),
      );
   }
}
