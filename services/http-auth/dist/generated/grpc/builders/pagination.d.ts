import { Pagination } from '../typescript/threads_pb';
export default class PaginationBuilder {
    private readonly message;
    constructor();
    withPage(page: number): this;
    withLimit(limit: number): this;
    build(): Pagination;
}
