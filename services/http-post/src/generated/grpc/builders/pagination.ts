import {UInt64Value} from "google-protobuf/google/protobuf/wrappers_pb";
import {Pagination} from '../typescript/threads_pb'

export default class PaginationBuilder {
   private readonly message: Pagination;

   constructor() {
      this.message = new Pagination();
   }

   withPage(page: number): this {
      this.message.setPage(new UInt64Value().setValue(page));
      return this;
   }

   withLimit(limit: number): this {
      this.message.setLimit(new UInt64Value().setValue(limit));
      return this;
   }

   build(): Pagination {
      return this.message;
   }
}