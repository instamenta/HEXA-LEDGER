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
import HexaModule from './utility/hexa-module';
import errorMiddleware from './middleware/error-middleware';
import {collectDefaultMetrics} from 'prom-client';
import CommentController from './controller/comment-controller';
import CommentRouter from './routes/comment-routes';
import GrpcClient from './client/grpc-client';
import PostClient from './client/post-client';
import CommentClient from './client/comment-client';

const API: Express = EXPRESS()
   , dot = new DotConfig(process.env as Record<string, string>)
   , vloggger = VLogger.getInstance(dot.GET('DEBUG_LEVEL', true))
   , hexaModule = HexaModule.getInstance(vloggger, dot)
   , grpcClient = GrpcClient.getInstance(dot).connectClient()

   , postClient = PostClient.getInstance(grpcClient)
   , commentClient = CommentClient.getInstance(grpcClient)

   , postController = PostController.getInstance(vloggger, postClient)
   , commentController = CommentController.getInstance(vloggger, commentClient)

   , postRouter = PostRouter.getInstance(postController).getRouter()
   , commentRouter = CommentRouter.getInstance(commentController).getRouter()
;

collectDefaultMetrics();
API.use(CORS());
API.use(HELMET());
API.use(COMPRESSION());
API.use(EXPRESS.json());
API.use(COOKIER_PARSER());
API.use(MORGAN('combined'));
API.use(hexaModule.metricsMiddleware);
API.get('/metrics', hexaModule.metricsEndpoint);
API.use('/post', postRouter);
API.use('/comment', commentRouter);
API.use(errorMiddleware);

(function initializeService(): void {
   API.listen(+dot.GET('ROUTER_PORT', 5095), () => {
      console.log(`[${dot.GET('SERVICE_NAME', 'Post-Router-Service')}] is running on port: [${+dot.GET('ROUTER_PORT', 5095)}]`);
   });
   API.on('error', (error: Error | any) => {
      console.log('API ran into Error:', error);
   });
})();

hexaModule.processOn(['unhandledRejection', 'uncaughtException']);
hexaModule.processOnce(['SIGTERM', 'SIGINT', 'SIGUSR2']);
