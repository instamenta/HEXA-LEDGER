import { PromotedStats } from "../typescript/threads_pb";
export default class PromotedStatsBuilder {
    private readonly message;
    constructor();
    withCount(count: number): this;
    withAmount(amount: number): this;
    build(): PromotedStats;
}
