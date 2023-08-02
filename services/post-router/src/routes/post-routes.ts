/** @file Router for handling post route requests. */
import {Router} from 'express';
import {isAuthenticated, notOwner, isOwner} from '../middleware/auth-middleware';
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
    upvoteComment,
    downvoteComment,
    getUserPosts
} from '../controller/post-controller';

const POST_ROUTER: Router = Router();

POST_ROUTER.route('/')
    .get(getPosts)
    .post(<any>isAuthenticated, <any>createPost)
;
POST_ROUTER.route('/:id')
    .get(getPostById)
    .put(<any>isAuthenticated, <any>updatePost)
    .delete(<any>isAuthenticated, <any>deletePost)
;
POST_ROUTER.route('/:postId/comments')
    .get(getPostComments)
    .post(<any>isAuthenticated, <any>createComment)
;
POST_ROUTER.route('/:postId/comments/:commentId')
    .put(<any>isAuthenticated, <any>updateComment)
    .delete(<any>isAuthenticated, <any>deleteComment)
;
POST_ROUTER.route('/comment/:commentId/upvote')
    .put(<any>isAuthenticated, <any>upvoteComment)
;
POST_ROUTER.route('/comment/:commentId/downvote')
    .put(<any>isAuthenticated, <any>downvoteComment)
;
POST_ROUTER.route('/:id/upvote')
    .put(<any>isAuthenticated, <any>upvotePost)
;
POST_ROUTER.route('/:id/downvote')
    .put(<any>isAuthenticated, <any>downvotePost)
;
POST_ROUTER.route('/users/:userId')
    .get(<any>isAuthenticated, <any>getUserPosts)
;

export default POST_ROUTER;
