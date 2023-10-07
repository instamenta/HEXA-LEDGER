const config = require('../utilities/config')
    , {HandleMongoError} = require('../utilities/errors/error.handler')
    , {Db, Collection} = require('mongodb')
;

/** @class TransactionRepository */
class TransactionRepository {
    /** @type {Collection} */ #collection;

    /**
     * @constructor TransactionRepository
     * @param {Db} db
     */
    constructor(db) {
        this.#collection = db.collection(config.DB_THREADS_COLLECTION);
    }

    /**
     * @param {object} transaction
     * @return {Promise<void>}
     * @public
     */
    async saveTx(transaction) {
        return this.#collection.insertOne(transaction)
            .catch((error) => {
                HandleMongoError(error);
                throw error;
            });
    }

    /**
     * @param {string} hash
     * @return {Promise<object | null>}
     * @public
     */
    async getTransaction(hash) {
        return this.#collection.findOne(
            {hash}
        )
            .then(transaction => transaction ? transaction : null)
            .catch((error) => {
                HandleMongoError(error);
                throw error;
            });
    }

    /**
     * @return {Promise<number|null>}
     * @public
     */
    async countTransactions() {
        return this.#collection.countDocuments()
            .then(count => count ? count : null)
            .catch((error) => {
                HandleMongoError(error);
                throw error;
            });
    }
}

module.exports = TransactionRepository;