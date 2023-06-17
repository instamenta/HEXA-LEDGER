'use strict';

const MONGOOSE = require('mongoose')
    , MONGODB_URI = process.env.MONGODB_URI
    || 'mongodb+srv://janoopsi:janoopsi9999@clickercluster.ltycehn.mongodb.net/?retryWrites=true&w=majority'
;

/**
 * @returns {Promise<void>}
 */
function connectDatabase() {
    MONGOOSE.connect(MONGODB_URI, {
        dbName: 'user-router',
        retryWrites: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error(`Error connecting to MongoDB: ${error.message}`));
}

module.exports = connectDatabase;
