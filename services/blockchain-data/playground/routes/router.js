const {Router} = require('express')
    , TxController = require('../controllers/transaction.controller')
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
            .get(c.getAddressBalance.bind(c));
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