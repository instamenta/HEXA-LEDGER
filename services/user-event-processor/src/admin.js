'use strict';

const {Kafka} = require('kafkajs')
	, BROKER_URL = process.env.BROKER_URL || 'redpanda-0'
	, BROKER_PORT = process.env.BROKER_PORT || 9092
	, REDPANDA = new Kafka({brokers: [`redpanda-0:9092`]})
	, ADMIN = REDPANDA.admin()
;

/**
 * @param {string} topic
 * @param {number} partition
 * @param {number} replicas
 */
async function createTopic(topic, partition, replicas) {
	await ADMIN.connect();
	const EXISTING_TOPIC = await ADMIN.listTopics();
	if (!EXISTING_TOPIC.includes(topic)) {
		await ADMIN.createTopics({
			topics: [
				{
					topic,
					numPartitions: partition ? partition : 1,
					replicationFactor: replicas ? replicas : 1,
				},
			],
		});
	}
	await ADMIN.disconnect();
}

module.exports = {createTopic};