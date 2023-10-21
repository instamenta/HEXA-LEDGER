import {Router} from 'express';
import UserController from '../controllers/user.controller';

export default class UserRouter {

    private readonly router: Router = Router();
    private readonly userController: UserController;

    constructor(controller: UserController) {
        this.userController = controller;
        this.initialize(this.userController);
    }

    private initialize(c: UserController) {
        this.router.route('/')
            .get(c.getMany.bind(c))
            .post(c.create.bind(c));

        this.router.get('/count', c.getTotalCount.bind(c));

    }

    public getRouter(): Router {
        return this.router;
    }
}

