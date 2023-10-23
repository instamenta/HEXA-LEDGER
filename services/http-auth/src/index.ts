import 'dotenv/config';
import {config} from './utilities/config'
import UserRouter from "./routes/user.router";
import UserController from "./controllers/user.controller";
import UserRepository from "./repositories/user.repository";
import {_404Handler, _errorHandler} from "./middlewares/error.middleware";
import {initialize_server, initialize_database, graceful_shutdown} from './utilities/initialize';
// import {start_grpc_server} from "./server";
import Vlogger from '@instamenta/vlogger'

(function initialize_service(): void {
   const _http_server = initialize_server();
   const database = initialize_database();
   const vlogger = Vlogger.getInstance();

   //! Components
    const userRepository = new UserRepository(database);
    const userController = new UserController(userRepository, vlogger);
    const userRouter = new UserRouter(userController).getRouter();

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

// fix before reuse, no dublicates
// _http_server.use('/test', (async (req, res) => {
//     for (const client of (await users.getUserList())) {
//         if (client.web3Wallets.length) {
//             const d = {
//                 wallet: client.web3Wallets[0].web3Wallet,
//                 name: client.username ?? 'default',
//                 role: new ObjectId().toString(),
//                 image: client.imageUrl,
//                 clerkId: client.id,
//             }
//             await userRepository.create(d)
//         }
//     }
//     res.end()
// }));