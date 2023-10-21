import 'dotenv/config';
import {config} from './utilities/config'
import StatRouter from "./routes/stat.router";
import UserRouter from "./routes/user.router";
import AuthRouter from "./routes/auth.router";
import StatController from "./controllers/stat.controller";
import UserController from "./controllers/user.controller";
import AuthController from "./controllers/auth.controller";
import StatRepository from "./repositories/stat.repository";
import UserRepository from "./repositories/user.repository";
import AuthRepository from "./repositories/auth.repository";
import {_404Handler, _errorHandler} from "./middlewares/error.middleware";
import {initialize_server, initialize_database, graceful_shutdown} from './utilities/initialize';
// import {start_grpc_server} from "./server";
import Vlogger from '@instamenta/vlogger'

(function initialize_service(): void {
   const _http_server = initialize_server();
   const database = initialize_database();
   const vlogger = Vlogger.getInstance();

   //! Components
    const statRepository = new StatRepository(database);
    const authRepository = new AuthRepository(database);
    const userRepository = new UserRepository(database);

    const statController = new StatController(statRepository, vlogger);
    const authController = new AuthController(authRepository, vlogger);
    const userController = new UserController(userRepository, vlogger);

    const statRouter = new StatRouter(statController).getRouter();
    const authRouter = new AuthRouter(authController).getRouter();
    const userRouter = new UserRouter(userController).getRouter();


    _http_server.use('/stat', statRouter)
    _http_server.use('/auth', authRouter)
    _http_server.use('/user', userRouter)

   //! Error & Not-Found Handling
   _http_server.use(_404Handler);
   _http_server.use(_errorHandler);

   //! Start Web APi
   _http_server.listen(config.PORT, () => vlogger.getVlogger(config.SERVICE_NAME).info({
      f : 'initialize_service', m: `[ [ ${config.SERVICE_NAME} ] Running on port: [ ${config.PORT} ]`}));
   _http_server.on('error', e => vlogger.getVlogger(config.SERVICE_NAME).error({
      f: 'initialize_service', m: `[ ${config.SERVICE_NAME} ] ran into Error:`, e}));

   // start_grpc_server(threadRepository, vlogger);
})();

graceful_shutdown.process_on(['unhandledRejection', 'uncaughtException']);
graceful_shutdown.process_once(['SIGTERM', 'SIGINT', 'SIGUSR2']);