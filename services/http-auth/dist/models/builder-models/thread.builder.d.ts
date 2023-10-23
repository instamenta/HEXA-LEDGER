import BaseUser from "../base/base.user";
import { ThreadModel } from "../../generated/grpc/typescript/threads_pb";
import { IThreadSchema } from "../../types/types";
import { WithId } from "mongodb";
export default class ThreadBuilder extends BaseUser {
    #private;
    constructor(props: WithId<IThreadSchema>);
    build_GRPC(): ThreadModel;
}
