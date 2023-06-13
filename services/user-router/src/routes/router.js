const EXPRESS = require('express')
	, ROUTER = EXPRESS.Router();

ROUTER.get('/', (request, response) => {
	response.send('Hellowy :333');
	response.end();
});

module.exports = ROUTER;
