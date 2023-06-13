const EXPRESS = require('express')
	, AUTH_ROUTER = EXPRESS.Router()
	, {register, login} = require('../controller/auth-controller')
;

AUTH_ROUTER.get('/', (request, response) => {
	response.send('auth :333');
	response.end();
});

AUTH_ROUTER.route('/register').post(register);
AUTH_ROUTER.route('/login').post(login);

module.exports = AUTH_ROUTER;
