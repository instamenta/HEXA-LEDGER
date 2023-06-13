const EXPRESS = require('express')
	, AUTH_ROUTER = EXPRESS.Router()
	, {REGISTER, LOGIN} = require('../controller/auth-controller')
;

AUTH_ROUTER.get('/', (request, response) => {
	response.send('auth :333');
	response.end();
});

AUTH_ROUTER.route('/register').post(REGISTER);
AUTH_ROUTER.route('/login').post(LOGIN);

module.exports = AUTH_ROUTER;
