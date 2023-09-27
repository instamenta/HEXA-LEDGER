
	, getXpubCountByClientIdValidation = require('../validation/constraints/getXpubCountByClientId')

async getXpubCountByClientId(call, callback) {
	const requestMessage = call.request;

	const request = {
		clientId: requestMessage.hasClientId() ? requestMessage.getClientId().getValue() : null,
	};

	this.logger.debug(`Received ${ this.getServiceName() }.getXpubCountByClientId() request:`, request);

	const validationResult = this.validator.validate(request, getXpubCountByClientIdValidation);
	if(validationResult) {
		callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['INVALID_DATA'], {}, validationResult));

		return this.logger.debug(`${ this.getServiceName() }.getXpubCountByClientId(): Invalid request received:`, request);
	}

	/** @type {number} */
	let xpubsCount;
	try {
		xpubsCount = await this.xpubStateRepository.countXpubsByClientId(request.clientId);
	} catch ( error ) {
		callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['UNEXPECTED_SERVER_ERROR']));

		return this.logger.error(`${ this.getServiceName() }.getXpubCountByClientId(): this.xpubStateRepository.findByXpubBlockchainNetwork: `, error);
	}

	try {
		callback(null, new Empty());
	} catch ( error ) {
		callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['UNEXPECTED_SERVER_ERROR']));

		return this.logger.error(`${ this.getServiceName() }.activateXpub(): `, error);
	}
}


//! REPOSITORY

/**
 * @param {string} clientId
 *
 * @return {Promise<{mainnet: number, testnet: number}>}
 */
getActiveXpubsCountByClientId(clientId) {
	return new Promise((resolve, reject) => {
		const filter = {
			clients: new ObjectId(clientId)
		};

		const count = {
			mainnet: 0,
			testnet: 0
		};

		const project = {
			network: 1,
			_id: 0
		};

		const stream = this.collection.find(filter).project(project).stream();

		stream.on('data', (doc) => doc.network === NETWORK_MAINNET ? count.mainnet++ : count.testnet++);
		stream.on('error', reject);
		stream.on('end', () => resolve(count));
	});
}

//! Activate xpub


//! List synced xpubs

//! get xpub count by client id

'use strict';

module.exports = {
	clientId: {
		presence: {
			allowEmpty: false
		},
		type: "string",
		length: {
			is: 24
		}
	}
}