import {Router} from 'express';
import TxController from '../controllers/tx.controller';

export default class HttpRouter {

    private readonly router: Router = Router();

    constructor(private readonly controller: TxController) {
        this.initialize(this.controller);
    }

    private initialize(c: TxController) {
        this.router.route('/:hash')
            .get(c.getTxById.bind(c));
    }

    public getRouter(): Router {
        return this.router;
    }
}

