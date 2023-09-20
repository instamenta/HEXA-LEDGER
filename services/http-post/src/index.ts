import 'dotenv/config';
import express from 'express';
import ThreadRouter from "./routes/thread.router";
import ThreadController from "./controllers/thread.controller";
import ThreadRepository from "./repositories/thread.repository";
import {MongoClient} from "mongodb";
import {config} from './utilities/config'
import {_404Handler, _errorHandler} from "./middlewares/error.middleware";

(function initializeService(): void {
   const _server = getServer();
   const db = new MongoClient(config.DB_URI, config.DB_OPTIONS)
      .db(config.DB_NAME);

   const threadRepository = new ThreadRepository(db);
   const threadController = new ThreadController(threadRepository);
   const threadRouter = new ThreadRouter(threadController).getRouter();

   _server.use('/thread', threadRouter)

   _server.use(_404Handler);
   _server.use(_errorHandler);

   _server.listen(config.PORT, () => console.log(
      `[${config.SERVICE_NAME}] running on port: [${config.PORT}]`));
   _server.on('error', e => console.log(
      `${config.SERVICE_NAME} ran into Error:`, e));
})();

function getServer(): express.Express {
   const _server = express();

   _server.use(require('cors')());
   _server.use(express.json());
   _server.use(require('cookie-parser')());

   return _server;
}