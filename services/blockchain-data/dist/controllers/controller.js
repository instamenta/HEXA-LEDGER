"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error_handler_1 = require("../utilities/errors/error.handler");
class Controller {
    constructor(repository, web3) {
        this.repository = repository;
        this.web3 = web3;
    }
    async getTxById(r, w) {
        try {
            const txId = r.params?.id;
            if (!txId && typeof txId !== 'string')
                throw new Error(`invalid data ${txId}`);
            const tx = await this.web3.eth.getTransaction(this.web3.utils.hexToBytes(txId));
            console.log(tx);
            if (tx) {
                w.json(tx);
            }
        }
        catch (e) {
            (0, error_handler_1.RespondGeneralPurpose)(e, w);
        }
    }
}
exports.default = Controller;
