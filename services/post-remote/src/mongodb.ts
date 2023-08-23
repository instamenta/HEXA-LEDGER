/** @file Connects to mongodbDatabase and makes it generally available. */
import Mongoose, {ConnectOptions} from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || 'NO URI';

/** Connect to MongoDB. */
function connectDatabase(): void {
   const options: ConnectOptions = {
      dbName: 'user-router',
      retryWrites: true,
   };
   Mongoose.connect(MONGODB_URI, options)
      .then(() => console.log('Connected to MongoDB'))
      .catch((e: Error) => console.log('Disconnected from MongoDB:', e));
}

export default connectDatabase;
