const express = require('express')
	, ROUTER = express.Router();

ROUTER.get('/', (request, response) => {
	response.send('Hellowy :3');
	response.end();
});

module.exports = ROUTER;
