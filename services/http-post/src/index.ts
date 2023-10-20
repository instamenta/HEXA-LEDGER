import 'dotenv/config';
import {config} from './utilities/config'
import ThreadRouter from "./routes/thread.router";
import ThreadController from "./controllers/thread.controller";
import ThreadRepository from "./repositories/thread.repository";
import {_404Handler, _errorHandler} from "./middlewares/error.middleware";
import {initialize_server, initialize_database, Graceful_Shutdown} from './utilities/initialize';
import {start_grpc_server} from "./server";
import Vlogger from '@instamenta/vlogger'

(function initializeService(): void {
   const _http_server = initialize_server();
   const db = initialize_database();
   const vlogger = Vlogger.getInstance();

   //! Components
   const threadRepository = new ThreadRepository(db);
   const threadController = new ThreadController(threadRepository, vlogger);
   const threadRouter = new ThreadRouter(threadController).getRouter();
   _http_server.use('/thread', threadRouter)

   //! Error & Not-Found Handling
   _http_server.use(_404Handler);
   _http_server.use(_errorHandler);

   //! Start Web APi
   _http_server.listen(config.PORT, () => vlogger.getVlogger(config.SERVICE_NAME).info({
      f : 'initializeService', m: `[ ${config.SERVICE_NAME} ] Running on port: [ ${config.PORT} ]`}));
   _http_server.on('error', e => vlogger.getVlogger(config.SERVICE_NAME).error({
      f: 'initializeService', m: `[ ${config.SERVICE_NAME} ] ran into Error:`, e}));

   start_grpc_server(threadRepository, vlogger);
})();

Graceful_Shutdown.process_on(['unhandledRejection', 'uncaughtException']);
Graceful_Shutdown.process_once(['SIGTERM', 'SIGINT', 'SIGUSR2']);