/** @file Start and initializes all services and the router. */
import EXPRESS, {Express} from 'express';
import CORS from 'cors';
import MORGAN from 'morgan';
import HELMET from 'helmet';
import COMPRESSION from 'compression';
import COOKIER_PARSER from 'cookie-parser';
import {VLogger} from '@instamenta/vlogger';
import DotConfig from 'dot_configurator';
import PostRouter from './routes/post-routes';
import PostController from './controller/post-controller';
import errorMiddleware from './middleware/error-middleware';
import CommentController from './controller/comment-controller';
import CommentRouter from './routes/comment-routes';
import PostClient from './client/post-client';
import CommentClient from './client/comment-client';
import {collectDefaultMetrics} from 'prom-client';
import {metricsMiddleware, metricsEndpoint, processOn, processOnce} from './utility/hexa-module';

import GrpcClient from './client/grpc-client';

export const dot = new DotConfig(process.env as Record<string, string>);

(function initializeService(): void {
   const API: Express = EXPRESS();
   const vlogger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true));

   const grpcClient = (GrpcClient.getInstance(dot)).connectClient();
   const postClient = PostClient.getInstance(grpcClient);
   const commentClient = CommentClient.getInstance(grpcClient);

   const postController = PostController.getInstance(vlogger, postClient);
   const commentController = CommentController.getInstance(vlogger, commentClient);

   const postRouter = PostRouter.getInstance(postController).getRouter();
   const commentRouter = CommentRouter.getInstance(commentController).getRouter();

   collectDefaultMetrics();
   API.use(CORS());
   API.use(HELMET());
   API.use(COMPRESSION());
   API.use(EXPRESS.json());
   API.use(COOKIER_PARSER());
   API.use(MORGAN('combined'));

   API.use(metricsMiddleware);
   API.get('/metrics', metricsEndpoint);
   API.use('/post', postRouter);
   API.use('/comment', commentRouter);
   API.use(errorMiddleware);

   API.listen(+dot.GET('ROUTER_PORT', 5095), () => console.log(
      `[${dot.GET('SERVICE_NAME', 'Post-Router-Service')}] is running on port: [${+dot.GET('ROUTER_PORT', 5095)}]`,
   ));
   API.on('error', (error: Error | any) => console.log('API ran into Error:', error));
})();

processOn(['unhandledRejection', 'uncaughtException']);
processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
