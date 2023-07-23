import {Router} from 'express';
import {
	register,
	login,
	updateUserById,
	deleteUserById
} from '../controller/auth-controller';
import {loginValidator, registerValidator} from '../validator/auth-validator';
import {isGuest, isAuthenticated, isOwner} from '../middleware/auth-middleware';

const AUTH_ROUTER: Router = Router();

AUTH_ROUTER.route('/login')
	.post(isGuest, <any>loginValidator, login);

AUTH_ROUTER.route('/register')
	.post(isGuest, <any>registerValidator, register);

AUTH_ROUTER.route('/:id')
	.put(<any>isAuthenticated, <any>isOwner, updateUserById)
	.delete(<any>isAuthenticated, <any>isOwner, deleteUserById)
;

export default AUTH_ROUTER;

