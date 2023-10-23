"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config_1 = require("./utilities/config");
const user_router_1 = __importDefault(require("./routes/user.router"));
const user_controller_1 = __importDefault(require("./controllers/user.controller"));
const user_repository_1 = __importDefault(require("./repositories/user.repository"));
const error_middleware_1 = require("./middlewares/error.middleware");
const initialize_1 = require("./utilities/initialize");
// import {start_grpc_server} from "./server";
const vlogger_1 = __importDefault(require("@instamenta/vlogger"));
(function initialize_service() {
    const _http_server = (0, initialize_1.initialize_server)();
    const database = (0, initialize_1.initialize_database)();
    const vlogger = vlogger_1.default.getInstance();
    //! Components
    const userRepository = new user_repository_1.default(database);
    const userController = new user_controller_1.default(userRepository, vlogger);
    const userRouter = new user_router_1.default(userController).getRouter();
    _http_server.use('/user', userRouter);
    //! Error & Not-Found Handling
    _http_server.use(error_middleware_1._404Handler);
    _http_server.use(error_middleware_1._errorHandler);
    //! Start Web APi
    _http_server.listen(config_1.config.PORT, () => vlogger.getVlogger(config_1.config.SERVICE_NAME).info({
        f: 'initialize_service', m: `[ [ ${config_1.config.SERVICE_NAME} ] Running on port: [ ${config_1.config.PORT} ]`
    }));
    _http_server.on('error', e => vlogger.getVlogger(config_1.config.SERVICE_NAME).error({
        f: 'initialize_service', m: `[ ${config_1.config.SERVICE_NAME} ] ran into Error:`, e
    }));
    // start_grpc_server(threadRepository, vlogger);
})();
initialize_1.graceful_shutdown.process_on(['unhandledRejection', 'uncaughtException']);
initialize_1.graceful_shutdown.process_once(['SIGTERM', 'SIGINT', 'SIGUSR2']);
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
