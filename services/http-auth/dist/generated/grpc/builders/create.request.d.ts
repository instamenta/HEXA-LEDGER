import { CreateRequest } from "../typescript/threads_pb";
export default class CreateRequestBuilder {
    private readonly message;
    constructor();
    withName(name: string): this;
    withDescription(description: string): this;
    withContent(content: string): this;
    withOwner(owner: string): this;
    withImages(images: string[]): this;
    withTags(tags: string[]): this;
    withIsPromoted(isPromoted: boolean): this;
    withAuth(auth: string): this;
    build(): CreateRequest;
}
