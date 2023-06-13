const {CREATE_TOPIC} = require('./admin')
	, {connectConsumer, disconnectConsumer} = require('./consumer')
;

(async function START() {
	const TOPIC = 'user_events_topic';
	await CREATE_TOPIC(TOPIC);
	await connectConsumer();
})();

process.on('SIGINT', async () => {
	console.log('Closing app...');
	try {
		await disconnectConsumer();
	} catch (err) {
		console.error('Error during cleanup:', err);
		process.exit(1);
	} finally {
		console.log('Cleanup finished. Exiting');
		process.exit(0);
	}
});
