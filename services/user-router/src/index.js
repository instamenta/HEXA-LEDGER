'use strict';

const EXPRESS = require('express')
    , CORS = require('cors')
    , ROUTER = require('./routes/router')
    , AUTH_ROUTER = require('./routes/auth-routes')
    , USER_ROUTER = require('./routes/user-routes')
    , COOKIE_PARSER = require('cookie-parser')
    , ERROR_MIDDLEWARE = require('./middlewares/error-middleware')
    , API_PORT = process.env.ROUTER_PORT || 5065
    , API = EXPRESS()
    , SERVICE_NAME = process.env.SERVICE_NAME || 'FAIL'
    // , {disconnectProducer, connectProducer} = require('./producer')
;

API.use(CORS());
API.use(COOKIE_PARSER());
API.use(EXPRESS.json());
API.use('/user', USER_ROUTER);
API.use('/auth', AUTH_ROUTER);
API.use('/', ROUTER);

API.use(ERROR_MIDDLEWARE);

(async function initializeService() {
    await API.listen(API_PORT, () => console.log(`Server is running on port: ${API_PORT}`));
    API.on('error', error => console.log('API ran into Error:', error));
})().catch(error => console.log(error));

['unhandledRejection', 'uncaughtException'].forEach(type => {
    process.on(type, (error) => {
        try {
            console.error(`process.on ${type}`);
            console.error(error);
        } catch {
            process.exit(1);
        }
    });
});

['SIGTERM', 'SIGINT', 'SIGUSR2'].forEach(type => {
    process.once(type, (error) => {
        try {
            console.error(`process.on ${type}`, error);
            process.exit(0);
        } finally {
            process.kill(process.pid, type);
        }
    });
});