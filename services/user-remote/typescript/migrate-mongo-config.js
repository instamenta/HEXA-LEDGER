"use strict";
const config = {
    mongodb: {
        url: 'mongodb+srv://janoopsi:janoopsi9999@clickercluster.ltycehn.mongodb.net/?retryWrites=true&w=majority',
        databaseName: "user-router",
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    },
    migrationsDir: "migrations",
    changelogCollectionName: "changelog",
    migrationFileExtension: ".js",
    useFileHash: false,
    moduleSystem: 'commonjs',
};
module.exports = config;
