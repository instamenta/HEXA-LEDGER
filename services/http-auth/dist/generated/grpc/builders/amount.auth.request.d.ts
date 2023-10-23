import { AmountWithAuthRequest } from "../typescript/threads_pb";
export default class AmountWithAuthRequestBuilder {
    private readonly message;
    constructor();
    withAuth(auth: string): this;
    withAmount(amount: number): this;
    withThreadId(threadId: string): this;
    build(): AmountWithAuthRequest;
}
