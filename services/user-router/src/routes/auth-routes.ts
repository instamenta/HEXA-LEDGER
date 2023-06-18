import {Router} from 'express';
import {register, login} from '../controller/auth-controller';
import {loginValidator, registerValidator} from '../validator/auth-validator';
import {isGuest} from '../middlewares/auth-middleware';

const AUTH_ROUTER: Router = Router();

AUTH_ROUTER.route('/login')
    .post(isGuest, loginValidator, login);

AUTH_ROUTER.route('/register')
    .post(isGuest, registerValidator, register);

export default AUTH_ROUTER;

