import 'dotenv/config';
import ThreadRouter from "./routes/thread.router";
import ThreadController from "./controllers/thread.controller";
import ThreadRepository from "./repositories/thread.repository";
import {config, getDatabase, getServer} from './utilities/config'
import {_404Handler, _errorHandler} from "./middlewares/error.middleware";

(function initializeService(): void {
   const _server = getServer();
   const db = getDatabase();

   const threadRepository = new ThreadRepository(db);
   const threadController = new ThreadController(threadRepository);
   const threadRouter = new ThreadRouter(threadController).getRouter();

   _server.use('/thread', threadRouter)

   _server.use(_404Handler);
   _server.use(_errorHandler);

   _server.listen(config.PORT, () => console.log(
      `[${config.SERVICE_NAME}] Running on port: [${config.PORT}]`));
   _server.on('error', e => console.log(
      `${config.SERVICE_NAME} ran into Error:`, e));
})();