, activateXpubValidation = require("../validation/constraints/activateXpub")
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

/**
 * @param call
 * @param callback
 * @return {Promise<void>}
 */
async activateXpub(call, callback) {
	const requestMessage = call.request;
	const request = {
		xpub: requestMessage.hasXpub() ? requestMessage.getXpub().getValue() : null,
		network: requestMessage.hasNetwork() ? requestMessage.getNetwork().getValue().toLowerCase() : null,
		blockchain: requestMessage.hasBlockchain() ? requestMessage.getBlockchain().getValue().toLowerCase() : null,
	};

	if(requestMessage.hasSystemMeta() && requestMessage.getSystemMeta().hasClientId()) {
		request.clientId = call.request.getSystemMeta().getClientId().getValue();
	}

	if(requestMessage.getDerivation() > 0) request.derivation = requestMessage.getDerivation() === 1
		? XpubDerivations['ACCOUNT'] : XpubDerivations['BIP32'];

	this.logger.debug(`Received ${ this.getServiceName() }.activateXpub() request:`, request);

	const validationResult = this.validator.validate(request, activateXpubValidation);
	if(validationResult) {
		callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['INVALID_DATA'], {}, validationResult));

		return this.logger.debug(`${ this.getServiceName() }.activateXpub(): Invalid request received:`, request);
	}

	/** @type {string} */
	const blockchain = Blockchains[mapIncomingBlockchain(request.blockchain)]

	const isXpubInvalid = this._validateXpub(blockchain, request.network, request.xpub);
	if(isXpubInvalid) {
		callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['INVALID_XPUB']));

		return this.logger.debug(`${ this.getServiceName() }.activateXpub(): Invalid xpub error: (${ isXpubInvalid }) received.`);
	}

	const isMainnet = request.network === NETWORK_MAINNET;

	/** @type {{valid: boolean, error: (string|null)}} */
	const constraintsCheck = await this._checkConstraints(request.clientId, requestMessage, isMainnet);
	if(constraintsCheck.valid === false) {
		callback(constraintsCheck.error);

		return this.logger.debug(`${ this.getServiceName() }.syncXpub()._checkConstraints(): Invalid constraints`, request.clientId);
	}

	const xpubContainsClient = await this.xpubStateRepository.checkXpubContainsClientId(request.xpub, blockchain, isMainnet, request.clientId);

	/** @type {XpubBalanceModel|null} */
	let doc;
	if(request.derivation) {
		doc = await this.xpubStateRepository.findByXpubBlockchainNetworkAndType(blockchain, request.network, request.xpub, request.derivation);

		if(!doc || (doc.clients && doc.clients.length > 0 && !xpubContainsClient)) {
			callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['XPUB_NOT_SYNCED']));

			return this.logger.debug(`${ this.getServiceName() }.getXpubBalance(): Invalid request received. `, request);
		} else if(doc && !doc.clients) {
			await this.xpubStateRepository.addClientIdToExistingXpub(request.xpub, blockchain, isMainnet, request.clientId);
		}

		if(doc.active) {
			callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['XPUB_IS_DISABLED'])); //! already activated

			return this.logger.debug(`${ this.getServiceName() }.activateXpub(): Request for already activated xpub. `, request);
		}

		if(doc.state === XPUB_STATE.IN_PROGRESS) {
			callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['XPUB_SYNC_IN_PROGRESS']));

			return this.logger.debug(`${ this.getServiceName() }.activateXpub(): Invalid request received: `, request);
		}
	} else {
		/** @type {Array<XpubStateModel>} */
		let xpubList;
		try {
			xpubList = await this.xpubStateRepository.findByXpubBlockchainNetwork(blockchain, request.network, request.xpub);
		} catch ( error ) {
			callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['UNEXPECTED_SERVER_ERROR']));

			return this.logger.error(`${ this.getServiceName() }.activateXpub(): this.xpubStateRepository.findByXpubBlockchainNetwork: `, error);
		}

		if(xpubList.length === 0 || (xpubList[0] && xpubList[0].clients && xpubList[0].clients.length > 0 && !xpubContainsClient)) {
			callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['XPUB_NOT_SYNCED']));

			return this.logger.debug(`${ this.getServiceName() }.activateXpub(): Invalid request received.`, request);
		} else if(xpubList.length > 0 && !xpubList[0].clients) {
			await this.xpubStateRepository.addClientIdToExistingXpub(request.xpub, blockchain, isMainnet, request.clientId);
		}

		const inProgress = this._checkXpubState(xpubList);
		if(inProgress) {
			callback(this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['XPUB_SYNC_IN_PROGRESS']));

			return this.logger.debug(`${ this.getServiceName() }.activateXpub(): Invalid request received: `, request);
		}
	}

	const status = await this.xpubStateRepository.activateXpub(
		blockchain,
		request.network,
		request.xpub,
		request.derivation ?? XpubDerivations.ACCOUNT
	);

	if(!status) {
		call.emit('error', this.appResponseBuilder.buildGrpcError(this.appResponseBuilder.ERROR_CODES['UNEXPECTED_SERVER_ERROR']));

		return this.logger.error(`${ this.getServiceName() }.activateXpub():`);
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

/**
 * @param {string} blockchain
 * @param {string} network
 * @param {string} xpub
 * @param {string} derivation
 *
 * @return {Promise<boolean>}
 */
async activateXpub(blockchain, network, xpub, derivation) {
	/** @type {Filter<XpubStateModel>} */
	const filters = {
		blockchain: blockchain,
		network: network,
		xpub: xpub,
		derivation: derivation,
	};
	/** @type {UpdateFilter<XpubStateModel>} */
	const update = {
		active: true
	};
	try {
		return this.collection.updateOne(filters, update)
			.then(d => !!d.modifiedCount)
	} catch ( error ) {
		this.logger.error(`${ this.constructor.name }.findByXpubBlockchainNetworkAndTypeAndMarkAsActive(): `, error);
	}
}

//! Activate xpub

const { mapIncomingStringBlockchain, Blockchains } = require("../../helpers/blockchains");
const { NETWORKS: NetworksEnumeration } = require("../../helpers/networks");
const { XPUB_DERIVATIONS: XpubDerivations } = require("../../helpers/xpubFormats");

module.exports = {
	xpub: {
		presence: {
			"allowEmpty": false
		},
		type: "string"
	},
	derivation: {
		presence: false,
		type: "string",
		inclusion: Object.keys(XpubDerivations)
	},
	clientId: {
		presence: {
			allowEmpty: false
		},
		type: "string",
		length: {
			is: 24
		}
	},
	blockchain: {
		presence: {
			"allowEmpty": false
		},
		type: "string",
	},
	network: {
		presence: {
			allowEmpty: false
		},
		type: 'string',
		equality: {
			attribute: 'blockchain',
			comparator: (network, blockchain) => {
				try {
					const internalUsageBlockchain = mapIncomingStringBlockchain(blockchain.toUpperCase());
					return network
						&& blockchain
						&& NetworksEnumeration[Blockchains[internalUsageBlockchain]]
						&& Object.values(NetworksEnumeration[Blockchains[internalUsageBlockchain]]).includes(network)
				} catch ( error ) {
					return false;
				}
			}
		}
	}
}

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