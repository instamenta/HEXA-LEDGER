const config = require('../utilities/config')
    , {HandleMongoError} = require('../utilities/errors/error.handler')
;

/** @class TransactionRepository */
class TransactionRepository {
    /** @type {import('mongodb').Collection} */ #collection;

    /**@constructor TransactionRepository
     * @param {import('mongodb').Db} db
     */
    constructor(db) {
        this.#collection = db.collection(config.DB_TRANSACTION_COLLECTION);
    }

    /**@param {object} transaction
     * @return {Promise<void>}
     * @public
     * @throws {Error|import('mongodb').MongoError}
     */
    async save(transaction) {
        return this.#collection.insertOne(transaction)
            .catch((e) => HandleMongoError(e));
    }

    /**@param {string} hash
     * @return {Promise<object | null>}
     * @public
     * @throws {Error|import('mongodb').MongoError}
     */
    async getByHash(hash) {
        return this.#collection.findOne({hash})
            .then(transaction => transaction ? transaction : null)
            .catch((e) => HandleMongoError(e));
    }

    /**@return {Promise<number|null>}
     * @public
     * @throws {Error|import('mongodb').MongoError}
     */
    async count() {
        return this.#collection.countDocuments()
            .then(count => count ? count : null)
            .catch((e) => HandleMongoError(e));
    }
}

module.exports = TransactionRepository;