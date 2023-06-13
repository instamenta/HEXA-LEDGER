const {CREATE_TOPIC} = require('./admin')
    // , {CONNECT_PRODUCER, DISCONNECT_PRODUCER} = require('./producer')
    , {CONNECT_CONSUMER, DISCONNECT_CONSUMER} = require('./consumer')
    //, READLINE = require('node:readline')

;

// const RL = READLINE.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

(async function START() {
    const TOPIC = 'user_events_topic';

    await CREATE_TOPIC(TOPIC);
    await CONNECT_CONSUMER();

    // RL.question('Enter user name: \n', async function (username) {
    // 	const sendMessage = await CONNECT_PRODUCER(username);
    // 	if (sendMessage) {
    // 		console.log('Connected, press Ctrl+C to exit');
    // 		RL.on('line', (input) => {
    // 			READLINE.moveCursor(process.stdout, 0, -1);
    // 			sendMessage(input);
    // 		});
    // 	} else {
    // 		console.error('Failed to initialize sendMessage function');
    // 	}
    // });
})();

process.on('SIGINT', async () => {
    console.log('Closing app...');
    try {
        // await DISCONNECT_PRODUCER();
        await DISCONNECT_CONSUMER();
        // RL.close();
    } catch (err) {
        console.error('Error during cleanup:', err);
        process.exit(1);
    } finally {
        console.log('Cleanup finished. Exiting');
        process.exit(0);
    }
});
