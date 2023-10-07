import 'dotenv/config';
import {config} from './utilities/config'
import ThreadRouter from "./routes/router";
import TxController from "./controllers/tx.controller";
import TxRepository from "./repositories/tx.repository";
import {_404Handler, _errorHandler} from "./middlewares/error.middleware";
import {
    initialize_server,
    initialize_database,
    Graceful_Shutdown,
    initializeWeb3Provider
} from './utilities/initialize';
import BalanceRepository from "./repositories/balance.repository";

(function initializeService(): void {
    const _server = initialize_server();
    const db = initialize_database();
    const web3 = initializeWeb3Provider();

    //! Components
    const txRepository = new TxRepository(db);
    const balanceRepository = new BalanceRepository(db);

    const controller = new TxController(web3, txRepository, balanceRepository);
    const router = new ThreadRouter(controller).getRouter();
    _server.use('/blockchain', router)

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