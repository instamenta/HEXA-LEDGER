"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTopic = void 0;
const kafkajs_1 = require("kafkajs");
const BROKER_URL = process.env.BROKER_URL || 'redpanda-0', BROKER_PORT = process.env.BROKER_PORT || 9092, REDPANDA = new kafkajs_1.Kafka({ brokers: ['redpanda-0:9092'] }), ADMIN = REDPANDA.admin();
/**
 * @param topic
 * @param partition
 * @param replicas
 */
async function createTopic(topic, partition = 1, replicas = 1) {
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
exports.createTopic = createTopic;
