'use strict';

const {Kafka} = require('kafkajs')
    , REDPANDA = new Kafka({brokers: ['redpanda-0:9092']})
    , ADMIN = REDPANDA.admin()
;

/**
 * @param {string} TOPIC
 * @param {number} PARTITION
 * @param {number} REPLICAS
 */
async function CREATE_TOPIC(TOPIC, PARTITION, REPLICAS) {
    await ADMIN.connect();
    const EXISTING_TOPIC = await ADMIN.listTopics();
    if (!EXISTING_TOPIC.includes(TOPIC)) {
        await ADMIN.createTopics({
            topics: [
                {
                    topic: TOPIC,
                    numPartitions: PARTITION ? PARTITION : 1,
                    replicationFactor: REPLICAS ? REPLICAS : 1,
                },
            ],
        });
    }
    await ADMIN.disconnect();
}

module.exports = {CREATE_TOPIC};