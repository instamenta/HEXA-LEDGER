import Mongoose, {ConnectOptions} from 'mongoose';
import {mongo_desconnect_log, mongo_start_log} from './utilities/logger';

const MONGODB_URI = process.env.MONGODB_URI || 'NO URI';

/**
 */
function connectDatabase(): void {
	const options: ConnectOptions = {
		dbName: 'user-router',
		retryWrites: true,
	};
	Mongoose.connect(MONGODB_URI, options)
		.then(() => mongo_start_log())
		.catch((error: Error) => mongo_desconnect_log(MONGODB_URI, error));
}

export default connectDatabase;
