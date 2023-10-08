const config = require('../utilities/config')
    , {HandleMongoError} = require('../utilities/errors/error.handler')
;

/** @class ReceiptRepository */
class ReceiptRepository {
    /** @type {import('mongodb').Collection} */ #collection;

    /**@constructor
     * @param {import('mongodb').Db} db
     */
    constructor(db) {
        this.#collection = db.collection(config.DB_RECEIPT_COLLECTION);
    }

    /**@param {object} receipt
     * @return {Promise<void>}
     * @public
     * @throws {Error|import('mongodb').MongoError}
     */
    async save(receipt) {
        return this.#collection.insertOne(receipt)
            .catch((e) => HandleMongoError(e));
    }

    /**@param {string} hash
     * @return {Promise<object | null>}
     * @public
     * @throws {Error|import('mongodb').MongoError}
     */
    async getByHash(hash) {
        return this.#collection.findOne({transactionHash: hash})
            .then(receipt => receipt ? receipt : null)
            .catch((e) => HandleMongoError(e));
    }

    /**@return {Promise<number | null>}
     * @public
     * @throws {Error|import('mongodb').MongoError}
     */
    async count() {
        return this.#collection.countDocuments()
            .then(count => count ? count : null)
            .catch((e) => HandleMongoError(e));
    }
}

module.exports = ReceiptRepository;
