const config = require('../utilities/config')
    , {HandleMongoError} = require('../utilities/errors/error.handler')
    , {Collection, Db} = require('mongodb')
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
     * @return {Promise<boolean>}
     * @public
     */
    async saveAddressBalance(address, balance) {
        return this.#collection.insertOne({address, balance})
            .then(() => true)
            .catch((error) => {
                HandleMongoError(error);
                throw error;
            });
    }

    /**
     * @param {string} address
     * @return {Promise<{address: string, balance: bigint}|null>}
     * @public
     */
    async getAddressBalance(address) {
        return this.#collection.findOne(
            {address}
        )
            .then(data => data ? data : null)
            .catch((error) => {
                HandleMongoError(error);
                throw error;
            });
    }

    /**
     * @return {Promise<number | null>}
     * @public
     */
    async countAddressBalance() {
        return this.#collection.countDocuments()
            .then(count => count ? count : null)
            .catch((error) => {
                HandleMongoError(error);
                throw error;
            });
    }

}

module.exports = BalanceRepository;