import {Kafka} from 'kafkajs';

const BROKER_URL = process.env.BROKER_URL || 'redpanda-0'
	, BROKER_PORT = process.env.BROKER_PORT || 9092
	, REDPANDA = new Kafka({brokers: ['redpanda-0:9092']})
	, ADMIN = REDPANDA.admin()
;
export {createTopic};

/**
 * @param topic
 * @param partition
 * @param replicas
 */
async function createTopic(
	topic: string,
	partition = 1,
	replicas = 1
): Promise<void> {
	await ADMIN.connect();
	const EXISTING_TOPIC = await ADMIN.listTopics();
	if (!EXISTING_TOPIC.includes(topic)) {
		await ADMIN.createTopics({
			topics: [
				{
					topic,
					numPartitions: partition,
					replicationFactor: replicas,
				},
			],
		});
	}
	await ADMIN.disconnect();
}

