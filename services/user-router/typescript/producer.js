"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = exports.disconnectProducer = exports.connectProducer = void 0;
const kafkajs_1 = require("kafkajs");
const BROKER_URL = process.env.BROKER_URL || 'redpanda-0';
const BROKER_PORT = process.env.BROKER_PORT || '9092';
const Redpanda = new kafkajs_1.Kafka({ brokers: ['redpanda-0:9092'] });
const Producer = Redpanda.producer();
/**
 * @returns
 */
async function connectProducer() {
    try {
        await Producer.connect();
        console.log(`Producer connected: ${BROKER_URL}:${BROKER_PORT}`);
    }
    catch (error) {
        console.error('Error:', error);
    }
}
exports.connectProducer = connectProducer;
/**
 * @param message
 * @param event
 * @returns
 */
async function sendMessage(message, event = 'default') {
    await Producer.send({
        topic: 'user_events_topic',
        // compression: CompressionTypes.GZIP,
        messages: [
            {
                headers: { event: event },
                value: JSON.stringify({ message }),
            },
        ],
    });
}
exports.sendMessage = sendMessage;
/**
 * @returns
 */
async function disconnectProducer() {
    await Producer.disconnect()
        .then(() => console.log('Disconnected producer'))
        .catch((error) => console.error('Error:', error));
}
exports.disconnectProducer = disconnectProducer;
