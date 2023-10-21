import {Router} from 'express';
import StatController from '../controllers/stat.controller';

export default class AuthRouter {

    private readonly router: Router = Router();
    private readonly threadController: StatController;

    constructor(postController: StatController) {
        this.threadController = postController;
        this.initialize(this.threadController);
    }

    private initialize(c: StatController) {
        this.router.route('/')
            .get(c.getMany.bind(c))
            .post(c.create.bind(c));

        this.router.get('/count', c.getTotalCount.bind(c));
        this.router.get('/stream', c.getMany_$.bind(c));
        this.router.get('/stream/owner/:owner', c.getByOwner_$.bind(c));
        this.router.get('/statistics', c.getStatistics.bind(c));
        this.router.get('/owner/:owner', c.getByOwner.bind(c));

        this.router.route('/:threadId/like')
            .put(c.like.bind(c))
            .get(c.getLikes.bind(c));

        this.router.route('/:threadId/dislike')
            .put(c.dislike.bind(c))
            .get(c.getDislikes.bind(c));

        this.router.put('/:threadId/transfer', c.transferOwnership.bind(c));
        this.router.put('/:threadId/promote', c.promote.bind(c));
        this.router.put('/:threadId/donate', c.donate.bind(c));

        this.router.route('/:threadId')
            .get(c.getOne.bind(c))
            .put(c.update.bind(c))
            .delete(c.delete.bind(c));
    }

    public getRouter(): Router {
        return this.router;
    }
}

