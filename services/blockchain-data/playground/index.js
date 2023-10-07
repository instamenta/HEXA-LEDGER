require('dotenv').config();
const config = require('./utilities/config')
    , ThreadRouter = require("./routes/router")
    , TxRepository = require("./repositories/tx.repository")
    , BalanceRepository = require("./repositories/balance.repository")
    , TransactionController = require("./controllers/transaction.controller")
    , ReceiptRepository = require("./repositories/receipt.repository")
const {
    _404Handler,
    _errorHandler
} = require("./middlewares/error.middleware");
const {
    Graceful_Shutdown, initialize_server, initialize_database, initializeWeb3Provider
} = require('./utilities/initialize');

(function initializeService() {
    const _server = initialize_server()
        , web3 = initializeWeb3Provider()
        , db = initialize_database()
    ;
    //! Components
    const transactionRepository = new TxRepository(db)
        , receiptRepository = new ReceiptRepository(db)
        , balanceRepository = new BalanceRepository(db)
    ;

    const controller = new TransactionController(
        web3,
        transactionRepository,
        receiptRepository,
        balanceRepository,
    );

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