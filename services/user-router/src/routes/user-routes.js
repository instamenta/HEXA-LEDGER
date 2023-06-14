const EXPRESS = require('express')
	, USER_ROUTER = EXPRESS.Router();

USER_ROUTER.get('/', (request, response) => {
	response.send('user :333');
	response.end();
});


module.exports = USER_ROUTER;
