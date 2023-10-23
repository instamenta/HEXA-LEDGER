import { ThreadModel } from "../../generated/grpc/typescript/threads_pb";
import { EO_build_ThreadModel } from "../../types/grpc.types";
export default class ThreadExtract {
    #private;
    private readonly id;
    private readonly name;
    private readonly description;
    private readonly content;
    private readonly created_at;
    private readonly updated_at;
    private readonly owner;
    private readonly deleted;
    private readonly likes_count;
    private readonly dislikes_count;
    private readonly images;
    private readonly promoted;
    private readonly donations;
    private readonly likes;
    private readonly dislikes;
    private readonly tags;
    constructor(m: ThreadModel);
    get(): EO_build_ThreadModel;
}
