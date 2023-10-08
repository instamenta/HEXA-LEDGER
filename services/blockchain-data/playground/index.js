const TransactionController = require("./controllers/transaction.controller")
    , TransactionRepository = require("./repositories/transaction.repository")
    , BalanceRepository = require("./repositories/balance.repository")
    , ReceiptRepository = require("./repositories/receipt.repository")
    , BlockRepository = require("./repositories/block.repository")
    , ThreadRouter = require("./routes/router")
    , config = require('./utilities/config')
    , {_404Handler, _errorHandler} = require("./middlewares/error.middleware")
    , {
        Graceful_Shutdown,
        initialize_server,
        initialize_database,
        initializeWeb3Provider
    } = require('./utilities/initialize')
;

(function initializeService() {
    const _server = initialize_server()
        , web3 = initializeWeb3Provider()
        , db = initialize_database();
    //! Components
    const controller = new TransactionController({
        transaction: new TransactionRepository(db),
        receipt: new ReceiptRepository(db),
        balance: new BalanceRepository(db),
        block: new BlockRepository(db),
    }, web3);
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