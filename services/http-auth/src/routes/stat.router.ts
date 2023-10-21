import {Router} from 'express';
import StatController from '../controllers/stat.controller';

export default class StatRouter {

    private readonly router: Router = Router();
    private readonly statController: StatController;

    constructor(controller: StatController) {
        this.statController = controller;
        this.initialize(this.statController);
    }

    private initialize(c: StatController) {
        this.router.route('/')
            .get(c.getMany.bind(c))
            .post(c.create.bind(c));

        this.router.get('/count', c.getTotalCount.bind(c));

    }

    public getRouter(): Router {
        return this.router;
    }
}

