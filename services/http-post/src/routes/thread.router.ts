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
         .get(c.getMany.bind(c))
         .post(c.create.bind(c));

      this.router.route('/:threadId')
         .get(c.getOne.bind(c))
         .put(c.update.bind(c))
         .delete(c.delete.bind(c));

      this.router.put('/:threadId/like', c.like.bind(c));
      this.router.put('/:threadId/dislike', c.dislike.bind(c));
      this.router.put('/:threadId/promote', c.dislike.bind(c));
      this.router.put('/:threadId/transfer', c.dislike.bind(c));
      this.router.put('/:threadId/donate', c.donate.bind(c));
      this.router.get('/owner/:ownerId', c.getByOwner.bind(c));
   }

   public getRouter(): Router {
      return this.router;
   }
}

