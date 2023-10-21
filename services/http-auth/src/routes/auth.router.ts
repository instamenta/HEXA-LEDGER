import {Router} from 'express';
import AuthController from '../controllers/auth.controller';

export default class AuthRouter {

    private readonly router: Router = Router();
    private readonly authController: AuthController;

    constructor(controller: AuthController) {
        this.authController = controller;
        this.initialize(this.authController);
    }

    private initialize(c: AuthController) {
        this.router.route('/')
            .get(c.getMany.bind(c))
            .post(c.create.bind(c));

        this.router.get('/count', c.getTotalCount.bind(c));

    }

    public getRouter(): Router {
        return this.router;
    }
}

