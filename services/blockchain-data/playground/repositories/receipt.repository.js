const config = require('../utilities/config')
    , {HandleMongoError} = require('../utilities/errors/error.handler')
    , {Db, Collection, MongoError} = require('mongodb')
;

/** @class ReceiptRepository */
class ReceiptRepository {
    /** @type {Collection} */ #collection;

    /**
     * @constructor
     * @param {Db} db
     */
    constructor(db) {
        this.#collection = db.collection(config.DB_RECEIPT_COLLECTION);
    }

    /**
     * @param {object} receipt
     * @return {Promise<void>}
     * @public
     * @throws {Error|MongoError}
     */
    async save(receipt) {
        return this.#collection.insertOne(receipt)
            .catch((e) => HandleMongoError(e));
    }

    /**
     * @param {string} hash
     * @return {Promise<object | null>}
     * @public
     * @throws {Error|MongoError}
     */
    async getByHash(hash) {
        return this.#collection.findOne({transactionHash: hash})
            .then(receipt => receipt ? receipt : null)
            .catch((e) => HandleMongoError(e));
    }

    /**
     * @return {Promise<number | null>}
     * @public
     * @throws {Error|MongoError}
     */
    async count() {
        return this.#collection.countDocuments()
            .then(count => count ? count : null)
            .catch((e) => HandleMongoError(e));
    }
}

module.exports = ReceiptRepository;
