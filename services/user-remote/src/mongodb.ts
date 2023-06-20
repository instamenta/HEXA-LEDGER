import Mongoose, {ConnectOptions} from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'NO URI';

function connectDatabase(): void {
    const options: ConnectOptions = {
        dbName: 'user-router',
        retryWrites: true,
    };
    Mongoose.connect(MONGODB_URI, options)
        .then(() => console.log('Connected to MongoDB'))
        .catch((error: Error) => {
            console.error(`
            =================================================\n
            Error connecting to MongoDB ~ \n 
            MONGODB's URI: ${MONGODB_URI} \n
            ERROR MESSAGE: ${error.message} \n
            =====================ERROR=======================\n'
            `, error);
        });
}

export default connectDatabase;
