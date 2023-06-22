"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consumer_1 = require("./consumer");
const admin_1 = require("./admin");
const CONSUME_TOPIC = process.env.CONSUME_TOPIC || 'user_event';
(async function START() {
    await (0, admin_1.createTopic)(CONSUME_TOPIC);
    await (0, consumer_1.connectConsumer)();
})();
process.on('SIGINT', async () => {
    console.log('Closing app...');
    try {
        await (0, consumer_1.disconnectConsumer)();
    }
    catch (error) {
        console.error('Error during cleanup:', error);
        process.exit(1);
    }
    finally {
        console.log('Cleanup finished. Exiting');
        process.exit(0);
    }
});
