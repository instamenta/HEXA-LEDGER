/** @file Starts the grpc server and attach all handlers for each endpoints. */

import {Server, ServerCredentials} from '@grpc/grpc-js';
import {processOn, processOnce} from './utility/hexa-module';
import connectDatabase from './mongodb';
import {VLogger} from '@instamenta/vlogger';
import DotConfig from 'dot_configurator';

import CommentService from './service/comment-service';
import PostService from './service/post-service';

import Wrapper from './service/wrapper';

const {PostServiceService} = require('./protos/generated/posts_grpc_pb');
export const dot = new DotConfig(process.env as Record<string, string>);

(function StartService() {
   const vlogger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true));
   const grpc_server = new Server();

   const postService = PostService.getInstance();
   const commentService = CommentService.getInstance();

   const w = Wrapper.getInstance(vlogger, postService, commentService);

   grpc_server.addService(PostServiceService, {
      getPosts: w.getPosts.bind(w),
      createPost: w.createPost.bind(w),
      updatePost: w.updatePost.bind(w),
      deletePost: w.deletePost.bind(w),
      getPostById: w.getPostById.bind(w),
      upvotePost: w.upvotePost.bind(w),
      downvotePost: w.downvotePost.bind(w),
      getUserPosts: w.getUserPosts.bind(w),
      getPostComments: w.getPostComments.bind(w),
      createComment: w.createComment.bind(w),
      updateComment: w.updateComment.bind(w),
      deleteComment: w.deleteComment.bind(w),
      upvoteComment: w.upvoteComment.bind(w),
      downvoteComment: w.downvoteComment.bind(w),
   });
   grpc_server.bindAsync(`0.0.0.0:${dot.GET('GRPC_PORT', 50_052)}`, ServerCredentials.createInsecure(), (e, port): void => {
      if (e) process.exit(1);
      console.log('Service running on port', port);
      grpc_server.start();
      connectDatabase();
   });
})();

processOn(['unhandledRejection', 'uncaughtException']);
processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
