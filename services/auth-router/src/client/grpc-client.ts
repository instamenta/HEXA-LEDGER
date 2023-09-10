import {credentials} from '@grpc/grpc-js';
import {AuthServiceClient} from '../protos/generated/auth_grpc_pb';
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
      return new AuthServiceClient(
         `${this.dot.GET('AUTH_REMOTE_REF', 'auth-remote-api')
         }:${this.dot.GET('AUTH_REMOTE_PORT', 50_053)}`,
         credentials.createInsecure(),
      );
   }
}
