'use strict';

import Mongoose, {ConnectOptions} from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://janoopsi:janoopsi9999@clickercluster.ltycehn.mongodb.net/?retryWrites=true&w=majority';

/**
 */
function connectDatabase(): void {
	const options: ConnectOptions = {
		dbName: 'user-router',
		retryWrites: true,
	};
	Mongoose.connect(MONGODB_URI, options)
		.then(() => console.log('Connected to MongoDB'))
		.catch((error: Error) => console.error(`Error connecting to MongoDB: ${error.message}`));
}

export default connectDatabase;
