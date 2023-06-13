'use strict';

const {Kafka} = require('kafkajs')
	, REDPANDA = new Kafka({brokers: ['redpanda-0:9092']})
	, PRODUCER = REDPANDA.producer()
;

/**
 * @returns {Promise}
 */
async function connectProducer() {
	try {
		await PRODUCER.connect();
		return async (message) => {
			await PRODUCER.send({
				topic: 'user_events_topic',
				messages: [{value: JSON.stringify({message})}],
			});
		};
	} catch (error) {
		console.error('Error:', error);
	}
}

/**
 * @returns {Promise<void>}
 */
async function disconnectProducer() {
	try {
		await PRODUCER.disconnect();
	} catch (error) {
		console.error('Error:', error);
	}
}

module.exports = {connectProducer, disconnectProducer};