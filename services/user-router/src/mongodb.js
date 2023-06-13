'use strict';
require('dotenv').config();

const MONGOOSE = require('mongoose')
	, MONGODB_URI = process.env.MONGODB_URI
    || 'mongodb+srv://janoopsi:janoopsi9999@clickercluster.ltycehn.mongodb.net/?retryWrites=true&w=majority'
;

/**
 * @returns {Promise<void>}
 */
async function CONNECT_DATABASE () {
	await MONGOOSE.connect(MONGODB_URI, {
		dbName: 'user-router',
		retryWrites: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	}).catch((error) => {
		console.error(`Error connecting to MongoDB: ${error.message}`);
		process.exit(1);
	});
	console.log('Connected to MongoDB');
}

module.exports = CONNECT_DATABASE;
