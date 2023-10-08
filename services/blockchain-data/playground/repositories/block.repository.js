const config = require('../utilities/config')
    , {HandleMongoError} = require('../utilities/errors/error.handler')
;

/** @class BlockRepository */
class BlockRepository {
    /** @type {import('mongodb').Collection} */ #collection;

    /**@constructor BlockRepository
     * @param {import('mongodb').Db} db
     */
    constructor(db) {
        this.#collection = db.collection(config.DB_BLOCK_COLLECTION);
    }

    /**@param {object} block
     * @return {Promise<void>}
     * @public
     * @throws {Error|import('mongodb').MongoError}
     */
    async save(block) {
        return this.#collection.insertOne(block)
            .catch((e) => HandleMongoError(e));
    }

    /**@param {bigint} number
     * @return {Promise<object | null>}
     * @public
     * @throws {Error|import('mongodb').MongoError}
     */
    async getByNumber(number) {
        return this.#collection.findOne({number})
            .then(block => block ? block : null)
            .catch((e) => HandleMongoError(e));
    }

    /**@param {string} hash
     * @return {Promise<object | null>}
     * @public
     * @throws {Error|import('mongodb').MongoError}
     */
    async getByHash(hash) {
        return this.#collection.findOne({hash})
            .then(block => block ? block : null)
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

module.exports = BlockRepository;