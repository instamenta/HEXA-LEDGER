import {Router} from 'express';
import WalletController from '../controllers/wallet.controller';

export default class WalletRouter {

    private readonly router: Router = Router();
    private readonly controller: WalletController;

    constructor(controller: WalletController) {
        this.controller = controller;
        this.initialize(this.controller);
    }

    private initialize(c: WalletController) {
        // this.router.get('/balance/:wallet', c.getBalanceByWallet.bind(c))
        this.router.get('/deposit/:amount', c.getUnsignedTransaction.bind(c));
        this.router.get('/address', c.getContractAddress.bind(c));
    }

    public getRouter(): Router {
        return this.router;
    }
}

