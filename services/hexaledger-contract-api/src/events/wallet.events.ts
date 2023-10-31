import Vlogger, {type IVlog} from '@instamenta/vlogger';
import WalletRepository from '../repositories/wallet.repository';
import {SimpleWallet} from '../../typechain-types';
import {JsonRpcProvider, Wallet} from 'ethers';
// import {config} from "../utilities/config";

export default class WalletEvents {
   readonly #repository: WalletRepository;
   readonly #contract: SimpleWallet;
   readonly #vlog: IVlog;
   readonly #signer: Wallet;
   readonly #provider: JsonRpcProvider;

   constructor(
      repository: WalletRepository,
      vlogger: Vlogger,
      contract: SimpleWallet,
      signer: Wallet,
      provider: JsonRpcProvider,
   ) {
      this.#repository = repository;
      this.#contract = contract;
      this.#vlog = vlogger.getVlogger('UserController');
      this.#signer = signer;
      this.#provider = provider;
   }

}