'use strict';

const EXPRESS = require('express')
	, CORS = require('cors')
	, ROUTER = require('./routes/router')
	, AUTH_ROUTER = require('./routes/auth-routes')
	, USER_ROUTER = require('./routes/user-routes')
	, COOKIE_PARSER = require('cookie-parser')
	, CONNECT_DATABASE = require('./mongodb')
;
require('dotenv').config();

const API_PORT = process.env.ROUTER_PORT || 5050
	, API = EXPRESS()
	, SERVICE_NAME = process.env.SERVICE_NAME || 'FAIL'
;
API.use(CORS());
API.use(COOKIE_PARSER());
API.use(EXPRESS.json());
API.use('/user', USER_ROUTER);
API.use('/auth', AUTH_ROUTER);
API.use('/', ROUTER);

(async function initializeService() {
	await API.listen(API_PORT, async () => {
		console.log(`Server is running on port: ${API_PORT}`);
		console.log(`SERVICE_NAME: ${SERVICE_NAME}`);
		await CONNECT_DATABASE();
	});
	API.on('error', async (error) => {
		console.log('API ran into Error: ', error);
	});
})().catch(error => {
	console.log('#ERROR: Ran into Error white running ~ START_API: ', error);
});

// Following part is important for handling process shutdown properly
['unhandledRejection', 'uncaughtException'].map(type => {
	process.on(type, async (error) => {
		try {
			console.error(`process.on ${ type }`);
			console.error(error);
		} catch (_) {
			process.exit(1);
		}
	});
});

['SIGTERM', 'SIGINT', 'SIGUSR2'].map(type => {
	process.once(type, async (error) => {
		try {
			console.error(`process.on ${ type }`, error);
			process.exit(0);
		} finally {
			process.kill(process.pid, type);
		}
	});
});