import {Router} from 'express';
import {isAuthenticated, notOwner} from '../middleware/auth-middleware';
import {pageLimit, pageLimitFilter} from '../validator/user-validator';
import {
	getAllUsers,
	getUserById,
	getUsers,
	// updateUserById,
	// deleteUserById,
	// getUserPosts,
	// createUserPost,
	// getUserComments,
	getUserFollowers,
	getUserFollowing,
	followUser,
	unfollowUser,
} from '../controller/user-controller';

const USER_ROUTER: Router = Router();

USER_ROUTER.route('/')
	.get(pageLimit, getAllUsers);

USER_ROUTER.route('/find')
	.get(pageLimitFilter,getUsers);

USER_ROUTER.route('/:id')
	.get(getUserById);
// .put(updateUserById)
// .delete(deleteUserById);
//
// USER_ROUTER.route('/:id/posts')
// 	.get(getUserPosts);
// // .post(createUserPost);
//
// USER_ROUTER.route('/:id/comments')
// 	.get(getUserComments);

USER_ROUTER.route('/:id/followers')
	.get(pageLimit, getUserFollowers);

USER_ROUTER.route('/:id/following')
	.get(pageLimit, getUserFollowing);

USER_ROUTER.route('/:id/follow')
	.put(<any>isAuthenticated, <any>notOwner, <any>followUser);

USER_ROUTER.route('/:id/unfollow')
	.put(<any>isAuthenticated, <any>notOwner, <any>unfollowUser);

export default USER_ROUTER;
