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
      this.router.get('/', c.getMany.bind(c));
      this.router.get('/address', c.getContractAddress.bind(c));
      this.router.get('/:wallet', c.getBalanceByWallet.bind(c));
   }

   public getRouter(): Router {
      return this.router;
   }
}

