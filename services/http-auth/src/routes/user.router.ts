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

        this.router.route('/:param')
            .get(c.getOne.bind(c))
            .delete(c.delete.bind(c))
            .put(c.update.bind(c))

        this.router.route('/add-ref/:param/:refId/:service')
            .put(c.addReferenceId.bind(c));

        this.router.route('/assign/:param/:refId/:type')
            .put(c.assignOwnership)

    }

    public getRouter(): Router {
        return this.router;
    }
}

