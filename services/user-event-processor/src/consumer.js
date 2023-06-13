'use strict';

const {Kafka} = require('kafkajs')
	, {v4} = require('uuid')
	, REDPANDA = new Kafka({brokers: ['redpanda-0:9092']})
	, CONSUMER = REDPANDA.consumer({groupId: v4()})
;

/**
 * @returns {Promise<void>}
 */
async function CONNECT_CONSUMER() {
	try {
		await CONSUMER.connect();
		await CONSUMER.subscribe({topic: 'user_events_topic'});
		await CONSUMER.run({
			eachMessage: async ({topic, partition, message}) => {
				const parsedMessage = JSON.parse(
					(message.value).toString()
				);
				console.log(parsedMessage);
			}
		});
	} catch (error) {
		console.error('Error:', error);
	}
}

/**
 *
 */
async function DISCONNECT_CONSUMER() {
	try {
		await CONSUMER.disconnect();
	} catch (error) {
		console.error('Error:', error);
	}
}

module.exports = {CONNECT_CONSUMER, DISCONNECT_CONSUMER};