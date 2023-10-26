import 'dotenv/config';
import {config} from './utilities/config'
import WalletRouter from "./routes/wallet.router";
import WalletController from "./controllers/wallet.controller";
import WalletRepository from "./repositories/wallet.repository";
import {_404Handler, _errorHandler} from "./middlewares/error.middleware";
import Initialize, {graceful_shutdown} from './utilities/initialize';
import Vlogger from '@instamenta/vlogger'

(async function initialize_service(): Promise<void> {
    const database = Initialize.database();
    const _http_server = Initialize.server();
    const [contract, owner, users] = await Initialize.wallet_contract();

    const vlogger = Vlogger.getInstance();

    //! Components
    const walletRepository = new WalletRepository(database);
    const walletController = new WalletController(walletRepository, vlogger, contract);
    const walletRouter = new WalletRouter(walletController).getRouter();

    _http_server.use('/wallet', walletRouter)

    //! Error & Not-Found Handling
    _http_server.use(_404Handler);
    _http_server.use(_errorHandler);

    //! Start Web APi
    _http_server.listen(config.PORT, () => vlogger.getVlogger(config.SERVICE_NAME).info({
        f: 'initialize_service', m: `[ [ ${config.SERVICE_NAME} ] Running on port: [ ${config.PORT} ]`
    }));
    _http_server.on('error', e => vlogger.getVlogger(config.SERVICE_NAME).error({
        f: 'initialize_service', m: `[ ${config.SERVICE_NAME} ] ran into Error:`, e
    }));
})();

graceful_shutdown.process_on(['unhandledRejection', 'uncaughtException']);
graceful_shutdown.process_once(['SIGTERM', 'SIGINT', 'SIGUSR2']);
