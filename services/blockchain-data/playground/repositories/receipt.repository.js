const config = require('../utilities/config')
    , {HandleMongoError} = require('../utilities/errors/error.handler')
    , {Db, Collection} = require('mongodb')
;

/** @class ReceiptRepository */
class ReceiptRepository {
    /** @type {Collection} */ #collection;

    /**
     * @constructor
     * @param {Db} db
     */
    constructor(db) {
        this.#collection = db.collection(config.DB_RECEIPTS_COLLECTION);
    }

    /**
     * @param {object} receipt
     * @return {Promise<void>}
     * @public
     */
    async saveReceipt(receipt) {
        return this.#collection.insertOne(receipt)
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
    async getReceiptByTransactionHash(hash) {
        return this.#collection.findOne(
            {transactionHash: hash}
        )
            .then(receipt => receipt ? receipt : null)
            .catch((error) => {
                HandleMongoError(error);
                throw error;
            });
    }

    /**
     * @return {Promise<number | null>}
     * @public
     */
    async countReceipts() {
        return this.#collection.countDocuments()
            .then(count => count ? count : null)
            .catch((error) => {
                HandleMongoError(error);
                throw error;
            });
    }
}

module.exports = ReceiptRepository;
