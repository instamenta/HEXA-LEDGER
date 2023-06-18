import { Router } from 'express';
import { isAuthenticated, notOwner, isOwner} from '../middlewares/auth-middleware';
import {
	getAllUsers,
	getUserById,
	getUsers,
	// updateUserById,
	// deleteUserById,
	getUserPosts,
	// createUserPost,
	getUserComments,
	getUserFollowers,
	getUserFollowing,
	followUser,
	unfollowUser,
} from '../controller/user-controller';
const USER_ROUTER: Router = Router();

USER_ROUTER.route('/')
	.get(getAllUsers)

USER_ROUTER.route('/find')
	.get(getUsers)

USER_ROUTER.route('/:id')
	.get(getUserById)
	// .put(updateUserById)
	// .delete(deleteUserById);

USER_ROUTER.route('/:id/posts')
	.get(getUserPosts)
	// .post(createUserPost);

USER_ROUTER.route('/:id/comments')
	.get(getUserComments);

USER_ROUTER.route('/:id/followers')
	.get(getUserFollowers);

USER_ROUTER.route('/:id/following')
	.get(getUserFollowing);

USER_ROUTER.route('/:id/follow')
	.post(isAuthenticated, followUser);

USER_ROUTER.route('/:id/unfollow')
	.post(isAuthenticated, unfollowUser);

export default USER_ROUTER;
