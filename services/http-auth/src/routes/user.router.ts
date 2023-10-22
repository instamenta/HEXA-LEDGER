import {Router} from 'express';
import UserController from '../controllers/user.controller';

export default class UserRouter {

    private readonly router: Router = Router();
    private readonly controller: UserController;

    constructor(controller: UserController) {
        this.controller = controller;
        this.initialize(this.controller);
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

        this.router.put('/add-reference/:param/:refId/:service', c.addReferenceId.bind(c));
        this.router.put('/assign-ownership/:param/:refId/:type', c.assignOwnership.bind(c))

    }

    public getRouter(): Router {
        return this.router;
    }
}

