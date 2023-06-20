import Mongoose, {ConnectOptions} from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'NO URI';

/**
 *
 */
function connectDatabase(): void {
	const options: ConnectOptions = {
		dbName: 'user-router',
		retryWrites: true,
	};
	Mongoose.connect(MONGODB_URI, options)
		.then(() => console.log(`Connected to MongoDB
		=================================================`))
		.catch((error: Error) => {
			console.error(`=================================================
            Error connecting to MongoDB ~  
            MONGODB's URI: ${MONGODB_URI} 
            ERROR MESSAGE: ${error.message} 
            =====================ERROR======================='
            `, error);
		});
}

export default connectDatabase;
