import Mongoose, {ConnectOptions} from 'mongoose';
import Log from './utility/logger';

const MONGODB_URI = process.env.MONGODB_URI || 'NO URI';

/** Connect MongoDB */
function connectDatabase(): void {
	const options: ConnectOptions = {
		dbName: 'user-router',
		retryWrites: true,
	};
	Mongoose.connect(MONGODB_URI, options)
		.then(() => Log['mongo_start_log']())
		.catch((error: Error) => Log['mongo_disconnect_log'](MONGODB_URI, error));
}

export default connectDatabase;
