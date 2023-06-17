'use strict';

const {Kafka} = require('kafkajs')
    , BROKER_URL = process.env.BROKER_URL || 'redpanda-0'
    , BROKER_PORT = process.env.BROKER_PORT || 9092
    , Redpanda = new Kafka({brokers: ['redpanda-0:9092']})
    , Producer = Redpanda.producer()
;

/**
 * @returns {Promise<void>}
 */
async function connectProducer() {
    try {
        await Producer.connect();
        console.log(`Producer connected: ${BROKER_URL}:${BROKER_PORT}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

/**
 * @param {object} message
 * @param {string} event
 * @returns {Promise<void>}
 */
async function sendMessage(message, event = 'default') {
    await Producer.send({
        topic: 'user_events_topic',
        // compression: CompressionTypes.GZIP,
        messages: [{
            headers: {event: event},
            value: JSON.stringify({message})
        }],
    });
}

/**
 * @returns {Promise<void>}
 */
async function disconnectProducer() {
    await Producer.disconnect()
        .then(() => console.log('Disconnected producer'))
        .catch((error) => console.error('Error:', error));
}


module.exports = {connectProducer, disconnectProducer, sendMessage};