/** @file Connect and export the grpc client. */

import {credentials} from '@grpc/grpc-js';
import {PostServiceClient} from '../protos/generated/posts_grpc_pb';
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
      return new PostServiceClient(
         `${this.dot.GET('POST_REMOTE_REF', 'post-remote')}:${this.dot.GET('POST_REMOTE_PORT', 50_052)}`,
         credentials.createInsecure(),
      );
   }
}
