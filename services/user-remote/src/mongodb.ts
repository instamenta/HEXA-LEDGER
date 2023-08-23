/** @file Connects mongoDb Client. */
import Mongoose, {ConnectOptions} from 'mongoose';

const MONGODB_URI = process.env['MONGODB_URI'] || 'NO URI';

/** Connect MongoDB. */
export default function connectDatabase(): void {
   const options: ConnectOptions = {dbName: 'user-router', retryWrites: true};
   Mongoose.connect(MONGODB_URI, options)
      .then(() => console.log('Connected to MongoDB'))
      .catch((e: Error) => console.log('Disconnected from MongoDB:', e));
}
