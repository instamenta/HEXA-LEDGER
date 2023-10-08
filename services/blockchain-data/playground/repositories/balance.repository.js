const config = require('../utilities/config')
    , {HandleMongoError} = require('../utilities/errors/error.handler')
    , {Collection, Db, WithId, MongoError} = require('mongodb')
;

/** @class BalanceRepository */
class BalanceRepository {
    /** @type {Collection<{address: string, balance: bigint}>} */ #collection;

    /**
     * @constructor BalanceRepository
     * @param {Db} db
     */
    constructor(db) {
        this.#collection = db.collection(config.DB_BALANCE_COLLECTION);
    }

    /**
     * @param {string} address
     * @param {bigint} balance
     * @return {Promise<void>}
     * @public
     * @throws {Error|MongoError}
     */
    async save(address, balance) {
        return this.#collection.insertOne({address, balance})
            .catch((e) => HandleMongoError(e));
    }

    /**
     * @param {string} address
     * @return {Promise<WithId<{address: string, balance: bigint}>|null>}
     * @public
     * @throws {Error|MongoError}
     */
    async getByAddress(address) {
        return this.#collection.findOne({address})
            .then(data => data ? data : null)
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

module.exports = BalanceRepository;