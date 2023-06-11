const express = require('express')
	, ROUTER = express.Router();

ROUTER.get('/', (request, response) => {
	response.send('Hellowy :333');
	response.end();
});

module.exports = ROUTER;
