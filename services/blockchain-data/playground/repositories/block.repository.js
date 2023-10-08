const config = require('../utilities/config')
    , {HandleMongoError} = require('../utilities/errors/error.handler')
    , {Db, Collection, MongoError} = require('mongodb')
;

/** @class BlockRepository */
class BlockRepository {
    /** @type {Collection} */ #collection;

    /**
     * @constructor BlockRepository
     * @param {Db} db
     */
    constructor(db) {
        this.#collection = db.collection(config.DB_BLOCK_COLLECTION);
    }

    /**
     * @param {object} block
     * @return {Promise<void>}
     * @public
     * @throws {Error|MongoError}
     */
    async save(block) {
        return this.#collection.insertOne(block)
            .catch((e) => HandleMongoError(e));
    }

    /**
     * @param {bigint} number
     * @return {Promise<object | null>}
     * @public
     * @throws {Error|MongoError}
     */
    async getByNumber(number) {
        return this.#collection.findOne({number})
            .then(block => block ? block : null)
            .catch((e) => HandleMongoError(e));
    }

    /**
     * @param {string} hash
     * @return {Promise<object | null>}
     * @public
     * @throws {Error|MongoError}
     */
    async getByHash(hash) {
        return this.#collection.findOne({hash})
            .then(block => block ? block : null)
            .catch((e) => HandleMongoError(e));
    }

    /**
     * @return {Promise<number|null>}
     * @public
     * @throws {Error|MongoError}
     */
    async count() {
        return this.#collection.countDocuments()
            .then(count => count ? count : null)
            .catch((e) => HandleMongoError(e));
    }
}

module.exports = BlockRepository;