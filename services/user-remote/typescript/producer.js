"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendLogMessage = exports.disconnectProducer = exports.connectProducer = void 0;
const kafkajs_1 = require("kafkajs");
const BROKER_URL = process.env.BROKER_URL || 'redpanda-0', BROKER_PORT = process.env.BROKER_PORT || '9092', Redpanda = new kafkajs_1.Kafka({ brokers: ['redpanda-0:9092'] }), Producer = Redpanda.producer();
/**
 * Connects kafka producer
 */
async function connectProducer() {
    try {
        await Producer.connect();
        console.log(`Producer connected: ${BROKER_URL}:${BROKER_PORT}
        ===============================================
        `);
    }
    catch (error) {
        console.error(`Producer disconnected: ${BROKER_URL}:${BROKER_PORT} :`, error);
    }
}
exports.connectProducer = connectProducer;
/**
 * @param message
 * @param event
 * @returns
 */
async function sendLogMessage(message, event = 'UNDEFINED') {
    await Producer.send({
        topic: 'logger_topic',
        // compression: CompressionTypes.GZIP,
        messages: [
            {
                headers: { event: event },
                value: JSON.stringify({ message }),
            },
        ],
    });
}
exports.sendLogMessage = sendLogMessage;
/**
 * @returns
 */
async function disconnectProducer() {
    await Producer.disconnect()
        .then(() => console.log('Disconnected producer'))
        .catch((error) => console.error('Kafka Producer Error:', error));
}
exports.disconnectProducer = disconnectProducer;
