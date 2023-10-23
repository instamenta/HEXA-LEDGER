import { IdRequest } from "../typescript/threads_pb";
export default class IdRequestBuilder {
    private readonly message;
    constructor();
    withId(id: string): this;
    build(): IdRequest;
}
