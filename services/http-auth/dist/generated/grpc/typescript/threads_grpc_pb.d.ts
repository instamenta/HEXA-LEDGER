export namespace ThreadsService {
    export namespace pingPong {
        export let path: string;
        export let requestStream: boolean;
        export let responseStream: boolean;
        export let requestType: typeof threads_pb.PingPongMessage;
        export let responseType: typeof threads_pb.PingPongMessage;
        export { serialize_threads_PingPongMessage as requestSerialize };
        export { deserialize_threads_PingPongMessage as requestDeserialize };
        export { serialize_threads_PingPongMessage as responseSerialize };
        export { deserialize_threads_PingPongMessage as responseDeserialize };
    }
    export namespace create {
        let path_1: string;
        export { path_1 as path };
        let requestStream_1: boolean;
        export { requestStream_1 as requestStream };
        let responseStream_1: boolean;
        export { responseStream_1 as responseStream };
        let requestType_1: typeof threads_pb.CreateRequest;
        export { requestType_1 as requestType };
        let responseType_1: typeof threads_pb.ThreadModel;
        export { responseType_1 as responseType };
        export { serialize_threads_CreateRequest as requestSerialize };
        export { deserialize_threads_CreateRequest as requestDeserialize };
        export { serialize_threads_ThreadModel as responseSerialize };
        export { deserialize_threads_ThreadModel as responseDeserialize };
    }
    export namespace update {
        let path_2: string;
        export { path_2 as path };
        let requestStream_2: boolean;
        export { requestStream_2 as requestStream };
        let responseStream_2: boolean;
        export { responseStream_2 as responseStream };
        let requestType_2: typeof threads_pb.ThreadModel;
        export { requestType_2 as requestType };
        let responseType_2: typeof threads_pb.ThreadModel;
        export { responseType_2 as responseType };
        export { serialize_threads_ThreadModel as requestSerialize };
        export { deserialize_threads_ThreadModel as requestDeserialize };
        export { serialize_threads_ThreadModel as responseSerialize };
        export { deserialize_threads_ThreadModel as responseDeserialize };
    }
    export namespace _delete {
        let path_3: string;
        export { path_3 as path };
        let requestStream_3: boolean;
        export { requestStream_3 as requestStream };
        let responseStream_3: boolean;
        export { responseStream_3 as responseStream };
        let requestType_3: typeof threads_pb.IdRequest;
        export { requestType_3 as requestType };
        let responseType_3: typeof threads_pb.ThreadModel;
        export { responseType_3 as responseType };
        export { serialize_threads_IdRequest as requestSerialize };
        export { deserialize_threads_IdRequest as requestDeserialize };
        export { serialize_threads_ThreadModel as responseSerialize };
        export { deserialize_threads_ThreadModel as responseDeserialize };
    }
    export { _delete as delete };
    export namespace getMany {
        let path_4: string;
        export { path_4 as path };
        let requestStream_4: boolean;
        export { requestStream_4 as requestStream };
        let responseStream_4: boolean;
        export { responseStream_4 as responseStream };
        let requestType_4: typeof threads_pb.Pagination;
        export { requestType_4 as requestType };
        let responseType_4: typeof threads_pb.ThreadModel;
        export { responseType_4 as responseType };
        export { serialize_threads_Pagination as requestSerialize };
        export { deserialize_threads_Pagination as requestDeserialize };
        export { serialize_threads_ThreadModel as responseSerialize };
        export { deserialize_threads_ThreadModel as responseDeserialize };
    }
    export namespace getTotalCount {
        let path_5: string;
        export { path_5 as path };
        let requestStream_5: boolean;
        export { requestStream_5 as requestStream };
        let responseStream_5: boolean;
        export { responseStream_5 as responseStream };
        let requestType_5: typeof google_protobuf_empty_pb.Empty;
        export { requestType_5 as requestType };
        let responseType_5: typeof google_protobuf_wrappers_pb.Int32Value;
        export { responseType_5 as responseType };
        export { serialize_google_protobuf_Empty as requestSerialize };
        export { deserialize_google_protobuf_Empty as requestDeserialize };
        export { serialize_google_protobuf_Int32Value as responseSerialize };
        export { deserialize_google_protobuf_Int32Value as responseDeserialize };
    }
    export namespace getByOwner {
        let path_6: string;
        export { path_6 as path };
        let requestStream_6: boolean;
        export { requestStream_6 as requestStream };
        let responseStream_6: boolean;
        export { responseStream_6 as responseStream };
        let requestType_6: typeof threads_pb.IdRequest;
        export { requestType_6 as requestType };
        let responseType_6: typeof threads_pb.ThreadModel;
        export { responseType_6 as responseType };
        export { serialize_threads_IdRequest as requestSerialize };
        export { deserialize_threads_IdRequest as requestDeserialize };
        export { serialize_threads_ThreadModel as responseSerialize };
        export { deserialize_threads_ThreadModel as responseDeserialize };
    }
    export namespace getOne {
        let path_7: string;
        export { path_7 as path };
        let requestStream_7: boolean;
        export { requestStream_7 as requestStream };
        let responseStream_7: boolean;
        export { responseStream_7 as responseStream };
        let requestType_7: typeof threads_pb.IdRequest;
        export { requestType_7 as requestType };
        let responseType_7: typeof threads_pb.ThreadModel;
        export { responseType_7 as responseType };
        export { serialize_threads_IdRequest as requestSerialize };
        export { deserialize_threads_IdRequest as requestDeserialize };
        export { serialize_threads_ThreadModel as responseSerialize };
        export { deserialize_threads_ThreadModel as responseDeserialize };
    }
    export namespace getStatistics {
        let path_8: string;
        export { path_8 as path };
        let requestStream_8: boolean;
        export { requestStream_8 as requestStream };
        let responseStream_8: boolean;
        export { responseStream_8 as responseStream };
        let requestType_8: typeof threads_pb.Pagination;
        export { requestType_8 as requestType };
        let responseType_8: typeof threads_pb.StatsModel;
        export { responseType_8 as responseType };
        export { serialize_threads_Pagination as requestSerialize };
        export { deserialize_threads_Pagination as requestDeserialize };
        export { serialize_threads_StatsModel as responseSerialize };
        export { deserialize_threads_StatsModel as responseDeserialize };
    }
    export namespace getLikes {
        let path_9: string;
        export { path_9 as path };
        let requestStream_9: boolean;
        export { requestStream_9 as requestStream };
        let responseStream_9: boolean;
        export { responseStream_9 as responseStream };
        let requestType_9: typeof threads_pb.IdRequest;
        export { requestType_9 as requestType };
        let responseType_9: typeof google_protobuf_wrappers_pb.StringValue;
        export { responseType_9 as responseType };
        export { serialize_threads_IdRequest as requestSerialize };
        export { deserialize_threads_IdRequest as requestDeserialize };
        export { serialize_google_protobuf_StringValue as responseSerialize };
        export { deserialize_google_protobuf_StringValue as responseDeserialize };
    }
    export namespace getDislikes {
        let path_10: string;
        export { path_10 as path };
        let requestStream_10: boolean;
        export { requestStream_10 as requestStream };
        let responseStream_10: boolean;
        export { responseStream_10 as responseStream };
        let requestType_10: typeof threads_pb.IdRequest;
        export { requestType_10 as requestType };
        let responseType_10: typeof google_protobuf_wrappers_pb.StringValue;
        export { responseType_10 as responseType };
        export { serialize_threads_IdRequest as requestSerialize };
        export { deserialize_threads_IdRequest as requestDeserialize };
        export { serialize_google_protobuf_StringValue as responseSerialize };
        export { deserialize_google_protobuf_StringValue as responseDeserialize };
    }
    export namespace like {
        let path_11: string;
        export { path_11 as path };
        let requestStream_11: boolean;
        export { requestStream_11 as requestStream };
        let responseStream_11: boolean;
        export { responseStream_11 as responseStream };
        let requestType_11: typeof threads_pb.WalletWithAuthRequest;
        export { requestType_11 as requestType };
        let responseType_11: typeof google_protobuf_empty_pb.Empty;
        export { responseType_11 as responseType };
        export { serialize_threads_WalletWithAuthRequest as requestSerialize };
        export { deserialize_threads_WalletWithAuthRequest as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
    export namespace dislike {
        let path_12: string;
        export { path_12 as path };
        let requestStream_12: boolean;
        export { requestStream_12 as requestStream };
        let responseStream_12: boolean;
        export { responseStream_12 as responseStream };
        let requestType_12: typeof threads_pb.WalletWithAuthRequest;
        export { requestType_12 as requestType };
        let responseType_12: typeof google_protobuf_empty_pb.Empty;
        export { responseType_12 as responseType };
        export { serialize_threads_WalletWithAuthRequest as requestSerialize };
        export { deserialize_threads_WalletWithAuthRequest as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
    export namespace donate {
        let path_13: string;
        export { path_13 as path };
        let requestStream_13: boolean;
        export { requestStream_13 as requestStream };
        let responseStream_13: boolean;
        export { responseStream_13 as responseStream };
        let requestType_13: typeof threads_pb.AmountWithAuthRequest;
        export { requestType_13 as requestType };
        let responseType_13: typeof google_protobuf_empty_pb.Empty;
        export { responseType_13 as responseType };
        export { serialize_threads_AmountWithAuthRequest as requestSerialize };
        export { deserialize_threads_AmountWithAuthRequest as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
    export namespace promote {
        let path_14: string;
        export { path_14 as path };
        let requestStream_14: boolean;
        export { requestStream_14 as requestStream };
        let responseStream_14: boolean;
        export { responseStream_14 as responseStream };
        let requestType_14: typeof threads_pb.AmountWithAuthRequest;
        export { requestType_14 as requestType };
        let responseType_14: typeof google_protobuf_empty_pb.Empty;
        export { responseType_14 as responseType };
        export { serialize_threads_AmountWithAuthRequest as requestSerialize };
        export { deserialize_threads_AmountWithAuthRequest as requestDeserialize };
        export { serialize_google_protobuf_Empty as responseSerialize };
        export { deserialize_google_protobuf_Empty as responseDeserialize };
    }
}
export const ThreadsClient: grpc.ServiceClientConstructor;
import threads_pb = require("./threads_pb.js");
declare function serialize_threads_PingPongMessage(arg: any): Buffer;
declare function deserialize_threads_PingPongMessage(buffer_arg: any): threads_pb.PingPongMessage;
declare function serialize_threads_CreateRequest(arg: any): Buffer;
declare function deserialize_threads_CreateRequest(buffer_arg: any): threads_pb.CreateRequest;
declare function serialize_threads_ThreadModel(arg: any): Buffer;
declare function deserialize_threads_ThreadModel(buffer_arg: any): threads_pb.ThreadModel;
declare function serialize_threads_IdRequest(arg: any): Buffer;
declare function deserialize_threads_IdRequest(buffer_arg: any): threads_pb.IdRequest;
declare function serialize_threads_Pagination(arg: any): Buffer;
declare function deserialize_threads_Pagination(buffer_arg: any): threads_pb.Pagination;
import google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb.js");
import google_protobuf_wrappers_pb = require("google-protobuf/google/protobuf/wrappers_pb.js");
declare function serialize_google_protobuf_Empty(arg: any): Buffer;
declare function deserialize_google_protobuf_Empty(buffer_arg: any): google_protobuf_empty_pb.Empty;
declare function serialize_google_protobuf_Int32Value(arg: any): Buffer;
declare function deserialize_google_protobuf_Int32Value(buffer_arg: any): google_protobuf_wrappers_pb.Int32Value;
declare function serialize_threads_StatsModel(arg: any): Buffer;
declare function deserialize_threads_StatsModel(buffer_arg: any): threads_pb.StatsModel;
declare function serialize_google_protobuf_StringValue(arg: any): Buffer;
declare function deserialize_google_protobuf_StringValue(buffer_arg: any): google_protobuf_wrappers_pb.StringValue;
declare function serialize_threads_WalletWithAuthRequest(arg: any): Buffer;
declare function deserialize_threads_WalletWithAuthRequest(buffer_arg: any): threads_pb.WalletWithAuthRequest;
declare function serialize_threads_AmountWithAuthRequest(arg: any): Buffer;
declare function deserialize_threads_AmountWithAuthRequest(buffer_arg: any): threads_pb.AmountWithAuthRequest;
import grpc = require("@grpc/grpc-js");
export {};
