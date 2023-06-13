const express = require('express')
	, ROUTER = express.Router();

ROUTER.get('/', (request, response) => {
	response.send('user :333');
	response.end();
});


module.exports = ROUTER;
