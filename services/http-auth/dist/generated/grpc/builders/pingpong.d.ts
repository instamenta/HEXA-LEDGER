import { PingPongMessage } from "../typescript/threads_pb";
export default class PingPongBuilder {
    #private;
    private readonly message;
    constructor();
    withName(name: string): this;
    build(): PingPongMessage;
}
