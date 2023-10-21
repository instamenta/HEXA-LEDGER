import 'dotenv/config';
import {config} from './utilities/config'
import AuthRouter from "./routes/auth.router";
import StatController from "./controllers/stat.controller";
import StatRepository from "./repositories/stat.repository";
import {_404Handler, _errorHandler} from "./middlewares/error.middleware";
import {initialize_server, initialize_database, graceful_shutdown} from './utilities/initialize';
import {start_grpc_server} from "./server";
import Vlogger from '@instamenta/vlogger'

(function initialize_service(): void {
   const _http_server = initialize_server();
   const database = initialize_database();
   const vlogger = Vlogger.getInstance();

   //! Components
   const threadRepository = new StatRepository(database);
   const threadController = new StatController(threadRepository, vlogger);
   const threadRouter = new AuthRouter(threadController).getRouter();
   _http_server.use('/thread', threadRouter)

   //! Error & Not-Found Handling
   _http_server.use(_404Handler);
   _http_server.use(_errorHandler);

   //! Start Web APi
   _http_server.listen(config.PORT, () => vlogger.getVlogger(config.SERVICE_NAME).info({
      f : 'initialize_service', m: `[ [ ${config.SERVICE_NAME} ] Running on port: [ ${config.PORT} ]`}));
   _http_server.on('error', e => vlogger.getVlogger(config.SERVICE_NAME).error({
      f: 'initialize_service', m: `[ ${config.SERVICE_NAME} ] ran into Error:`, e}));

   start_grpc_server(threadRepository, vlogger);
})();

graceful_shutdown.process_on(['unhandledRejection', 'uncaughtException']);
graceful_shutdown.process_once(['SIGTERM', 'SIGINT', 'SIGUSR2']);