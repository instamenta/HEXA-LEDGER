import { Pagination } from '../../generated/grpc/typescript/threads_pb';
import {UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";

export function build_Pagination(page: number, limit: number): Pagination {
   return new Pagination()
      .setLimit(new UInt64Value().setValue(limit))
      .setPage(new UInt64Value().setValue(page))
}


