import { Router } from 'express';
import { isAuthenticated, notOwner, isOwner} from '../middleware/auth-middleware';
import {
	createPost,
	updatePost,
	deletePost,
	createComment,
	updateComment,
	deleteComment,
	getPostById,
	getPosts,
	getPostComments,
	upvotePost,
	downvotePost,
} from '../controller/post-controller';

const POST_ROUTER: Router = Router();

POST_ROUTER.route('/')
	.get(getPosts)
	.post(<any>isAuthenticated, <any>createPost);

POST_ROUTER.route('/:id')
	.get(getPostById)
	.put(<any>isAuthenticated, <any>isOwner, <any>updatePost)
	.delete(<any>isAuthenticated, <any>isOwner, <any>deletePost);

POST_ROUTER.route('/:postId/comments')
	.get(getPostComments)
	.post(<any>isAuthenticated, <any>createComment);

POST_ROUTER.route('/:postId/comments/:commentId')
	.put(<any>isAuthenticated, <any>isOwner, <any>updateComment)
	.delete(<any>isAuthenticated, <any>isOwner, <any>deleteComment);

POST_ROUTER.route('/:id/upvote')
	.post(<any>isAuthenticated, <any>notOwner, <any>upvotePost);

POST_ROUTER.route('/:id/downvote')
	.post(<any>isAuthenticated, <any>notOwner, <any>downvotePost);

export default POST_ROUTER;
