import {Router} from 'express';
import type TxController from '../controllers/tx.controller';

export default class HttpRouter {

    private readonly router: Router = Router();

    constructor(private readonly controller: TxController) {
        this.initialize(this.controller);
    }

    private initialize(c: TxController) {

        this.router.route('/transaction/:hash')
            .get(c.getTransactionByHash.bind(c));

        this.router.route('/transaction/receipt/:hash')
            .get(c.getTransactionReceiptByHash.bind(c));

        this.router.route('/address/balance/:address')
            .get(c.getBalanceByAddress.bind(c));
    }

    public getRouter(): Router {
        return this.router;
    }
}

