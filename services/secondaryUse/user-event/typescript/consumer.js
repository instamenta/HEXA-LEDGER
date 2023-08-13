"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectConsumer = exports.connectConsumer = void 0;
const kafkajs_1 = require("kafkajs");
const uuid_1 = require("uuid");
const SnappyCodec = require('kafkajs-snappy'), BROKER_URL = process.env.BROKER_URL || 'redpanda-0', BROKER_PORT = process.env.BROKER_PORT || 9092, REDPANDA = new kafkajs_1.Kafka({ brokers: ['redpanda-0:9092'] }), CONSUMER = REDPANDA.consumer({ groupId: (0, uuid_1.v4)() });
kafkajs_1.CompressionCodecs[kafkajs_1.CompressionTypes.Snappy] = SnappyCodec;
/**
 * Handles on each messages and connects to Broker
 */
async function connectConsumer() {
    try {
        await CONSUMER.connect();
        await CONSUMER.subscribe({ topic: 'logger_topic' });
        await CONSUMER.run({
            eachMessage: async ({ topic, partition, message }) => {
                const event = message.headers?.event.toString(), m = JSON.parse((message.value).toString());
                console.log(event, m);
            }
        });
    }
    catch (error) {
        console.error('Error:', error);
    }
}
exports.connectConsumer = connectConsumer;
/**
 * @returns
 */
async function disconnectConsumer() {
    try {
        await CONSUMER.disconnect();
    }
    catch (error) {
        console.error('Error:', error);
    }
}
exports.disconnectConsumer = disconnectConsumer;
