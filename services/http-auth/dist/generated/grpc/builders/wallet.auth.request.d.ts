import { WalletWithAuthRequest } from "../typescript/threads_pb";
export default class WalletWithAuthRequestBuilder {
    private readonly message;
    constructor();
    withWallet(wallet: string): this;
    withId(id: string): this;
    build(): WalletWithAuthRequest;
}
