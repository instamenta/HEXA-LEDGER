const express = require('express')
    , cors = require('cors')
    , router = require('./routes/router')
;
require('dotenv').config();

const API_PORT = process.env.PORT || 5065;
const API = express();

API.use(cors());
API.use(express.json());
API.use('/', router);

async function START_API() {

    await API.listen(API_PORT, () => {
        console.log(`Server is running on port: ${API_PORT}`);
    });
    API.on('error', async (error) => {
        console.log('API ran into error: ', error);
    });
}

START_API().catch((ERROR) => {
    console.log('#ERROR: Ran into Error white running ~ START_API: ', ERROR);
});

// Following part is important for handling process shutdown properly
['unhandledRejection', 'uncaughtException'].map(type => {
    process.on(type, async () => {
        try {
            console.log(`process.on ${ type }`);
            process.exit(0);
        } catch ( _ ) {
            process.exit(1);
        }
    })
});

['SIGTERM', 'SIGINT', 'SIGUSR2'].map(type => {
    process.once(type, async () => {
        try {
            console.log(`process.on ${ type }`);
            process.exit(0);
        } finally {
            process.kill(process.pid, type);
        }
    })
});