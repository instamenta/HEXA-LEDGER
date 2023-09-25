import 'dotenv/config';
import {config} from './utilities/config'
import ThreadRouter from "./routes/thread.router";
import ThreadController from "./controllers/thread.controller";
import ThreadRepository from "./repositories/thread.repository";
import {_404Handler, _errorHandler} from "./middlewares/error.middleware";
import {initialize_server, initialize_database, Graceful_Shutdown} from './utilities/initialize';

(function initializeService(): void {
   const _server = initialize_server();
   const db = initialize_database();

   //! Components
   const threadRepository = new ThreadRepository(db);
   const threadController = new ThreadController(threadRepository);
   const threadRouter = new ThreadRouter(threadController).getRouter();
   _server.use('/thread', threadRouter)

   //! Error & Not-Found Handling
   _server.use(_404Handler);
   _server.use(_errorHandler);

   //! Start Web APi
   _server.listen(config.PORT, () => console.log(
      `[${config.SERVICE_NAME}] Running on port: [${config.PORT}]`));
   _server.on('error', e => console.log(
      `${config.SERVICE_NAME} ran into Error:`, e));
})();

Graceful_Shutdown.process_on(['unhandledRejection', 'uncaughtException']);
Graceful_Shutdown.process_once(['SIGTERM', 'SIGINT', 'SIGUSR2']);