import {connectConsumer, disconnectConsumer} from './consumer';
import {createTopic} from './admin';

const CONSUME_TOPIC: string = process.env.CONSUME_TOPIC || 'user_event';

(async function START() {
	await createTopic(CONSUME_TOPIC);
	await connectConsumer();
})();

process.on('SIGINT', async () => {
	console.log('Closing app...');
	try {
		await disconnectConsumer();
	} catch (error) {
		console.error('Error during cleanup:', error);
		process.exit(1);
	} finally {
		console.log('Cleanup finished. Exiting');
		process.exit(0);
	}
});
