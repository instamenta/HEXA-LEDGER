const {Router} = require('express')
    , TransactionController = require('../controllers/transaction.controller')
;

/** @class HttpRouter */
class HttpRouter {
    /** @type {Router} */ #router = Router();
    /** @type {TransactionController} */ #controller;

    /**
     * @constructor HttpRouter
     * @param {TransactionController} controller
     */
    constructor(controller) {
        this.#controller = controller

        this.initialize(this.#controller);
    }

    /**
     * @param {TransactionController} c
     * @private
     */
    initialize(c) {
        this.#router.route('/transaction/:hash')
            .get(c.getTransactionByHash.bind(c));

        this.#router.route('/transaction/receipt/:hash')
            .get(c.getTransactionReceiptByHash.bind(c));

        this.#router.route('/address/balance/:address')
            .get(c.getAddressBalanceByAddress.bind(c));

        this.#router.route('/block/')
            .get(c.getBlockLatest.bind(c));

        this.#router.route('/block/:hash')
            .get(c.getBlockByHash.bind(c));

        this.#router.route('/block/number/:number')
            .get(c.getBlockByNumber.bind(c));
    }

    /**
     * @returns {Router}
     * @public
     */
    getRouter() {
        return this.#router;
    }
}

module.exports = HttpRouter;