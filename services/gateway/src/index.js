
const express = require('express')
	, cors = require('cors')
	, router = require('./routes/router')
;
require('dotenv').config();

const API_PORT = process.env.PORT || 5050;
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