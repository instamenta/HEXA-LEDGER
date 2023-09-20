import {Router} from 'express';
import ThreadController from '../controllers/thread.controller';

export default class ThreadRouter {

    private readonly router: Router = Router();
    private readonly threadController: ThreadController;

    constructor(postController: ThreadController) {
        this.threadController = postController;
        this.initialize(this.threadController);
    }

    private initialize(c: ThreadController) {
        this.router.route('/')
            .get(c.getMany)
            .post(c.create);

        this.router.route('/:threadId')
            .get(c.getOne)
            .put(c.update)
            .delete(c.delete);

        this.router.put('/:threadId/like', c.like);
        this.router.put('/:threadId/dislike', c.dislike);
        this.router.put('/:threadId/promote', c.dislike);
        this.router.put('/:threadId/transfer', c.dislike);
        this.router.put('/:threadId/donate', c.donate);
        this.router.get('/owner/:ownerId', c.getByOwner);
    }

    public getRouter(): Router {
        return this.router;
    }
}

