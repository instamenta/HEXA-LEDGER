const {_metrics_endpoint, _metrics_middleware} = require('../middlewares/monitoring.middleware')
    , {MongoClient, Long} = require('mongodb')
    , config = require('./config')
    , express = require('express')
    , {Web3} = require('web3')
;

BigInt.prototype.toJSON = function() {
    return this.toString();
};

Long.prototype.toJSON = function () {
    return this.toString(); // Convert the Long to a string
};

/** @return {express.Express} */
function initialize_server() {
    /** @type {express.Express} */
    const _server = express();

    //* Extensions
    _server.use(require('cors')());
    _server.use(require('helmet')());
    _server.use(require('compression')());
    _server.use(require('cookie-parser')());
    _server.use(require('morgan')('combined'));
    _server.use(express.json());

    //* Prometheus
    _server.use(_metrics_middleware);
    _server.get('/metrics', _metrics_endpoint);

    return _server;
}

/** @return {import('mongodb').Db} */
function initialize_database() {
    console.log('[Connecting to Mongo Client]');
    const db_client = new MongoClient(config.DB_URI, config.DB_OPTIONS);

    console.log(`[Connecting to Database "${config.DB_NAME}]"`);
    return db_client.db(config.DB_NAME);
}

/**
 * @class Graceful_Shutdown
 */
class Graceful_Shutdown {
    /**
     * @param {string[]} _cases_
     * @public
     */
    static process_on(_cases_) {
        _cases_.forEach(/**@param {string} _type_*/_type_ => {
            process.on(_type_, (error) => {
                try {
                    console.error({message: `[${config.SERVICE_NAME}] ~ process.on: [${_type_}] `, error});
                } catch {
                    process.exit(1);
                }
            });
        });
    }

    /**
     * @param {string[]} _cases_
     * @public
     */
    static process_once(_cases_) {
        _cases_.forEach(/**@param {string} _type_*/_type_ => {
            process.once(_type_, (error) => {
                try {
                    console.error({message: `[${config.SERVICE_NAME}] - process.on: [${_type_}] `, error});
                    process.exit(0);
                } finally {
                    process.kill(process.pid, _type_);
                }
            });
        });
    }
}

/** @return {Web3} */
function initializeWeb3Provider() {
    console.log(`[Connected Web3 Provider on network: ${config.ETHEREUM_NETWORK}]`);
    return new Web3(new Web3.providers.HttpProvider(
        `https://${config.ETHEREUM_NETWORK}.infura.io/v3/${config.PROVIDER_API_KEY}`
    ));
}

module.exports = {
    initialize_server,
    initialize_database,
    Graceful_Shutdown,
    initializeWeb3Provider,
};