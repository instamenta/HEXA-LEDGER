const EXPRESS = require('express')
	, AUTH_ROUTER = EXPRESS.Router()
	, {register, login, validate} = require('../controller/auth-controller')
	, {isGuest, isAuthenticated} = require('../middlewares/auth-middleware')
;

AUTH_ROUTER.get('/', (request, response) => {
	response.send('auth :333');
	response.end();
});

AUTH_ROUTER.route('/register').post(isGuest, register);
AUTH_ROUTER.route('/login').post(isGuest, login);
AUTH_ROUTER.route('/validate').post(isAuthenticated, validate);

module.exports = AUTH_ROUTER;
