/** @file Starts the grpc server and attach all handlers for each endpoints. */

import * as GRPC from '@grpc/grpc-js';
import {
   createPost,
   updatePost,
   deletePost,
   createComment,
   updateComment,
   deleteComment,
   getPostById,
   getPosts,
   getPostComments,
   upvotePost,
   downvotePost,
   upvoteComment,
   downvoteComment,
   getUserPosts,
} from './service/wrapper';

import connectDatabase from './mongodb';
import {processOn, processOnce} from './utility/hexa-module';
import {VLogger} from '@instamenta/vlogger';
import DotConfig from 'dot_configurator';

const {PostServiceService} = require('./protos/generated/posts_grpc_pb')
   , GRPC_PORT = process.env.GRPC_PORT || 50_052
;
export const dot = new DotConfig(process.env as Record<string, string>);

(function StartService() {

   const vlogger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true));


   const Server = new GRPC.Server();
   Server.addService(PostServiceService, {
      createPost, updatePost, deletePost, createComment, updateComment, deleteComment,
      getPostById, getPosts, getPostComments, upvotePost,
      downvotePost, upvoteComment, downvoteComment, getUserPosts
   });
   Server.bindAsync(`0.0.0.0:${GRPC_PORT}`, GRPC.ServerCredentials.createInsecure(), (e, port): void => {
      if (e) process.exit(1);
      Server.start();
      connectDatabase();
   });
})();

processOn(['unhandledRejection', 'uncaughtException']);
processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
