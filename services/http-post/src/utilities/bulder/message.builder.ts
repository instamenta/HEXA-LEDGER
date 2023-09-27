import GRPC_I from '../../generated/grpc/types/threads_pb';
import {UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";

const proto = require('../../generated/grpc/javascript/threads_pb.js')

export function build_Pagination(page: number, limit: number): GRPC_I.Pagination {
   return new proto.Pagination()
      .setLimit(new UInt64Value().setValue(limit))
      .setPage(new UInt64Value().setValue(page))
}


