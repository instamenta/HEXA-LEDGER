const {connectConsumer, disconnectConsumer} = require('./consumer')
	, {createTopic} = require('./admin')
;

(async function START() {
	const TOPIC = 'logger_topic';
	await createTopic(TOPIC);
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
