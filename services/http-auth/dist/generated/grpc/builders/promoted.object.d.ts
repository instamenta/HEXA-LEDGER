import { PromotedObject } from "../typescript/threads_pb";
export default class PromotedObjectBuilder {
    private readonly message;
    constructor();
    withDate(date: Date): this;
    withAmount(amount: number): this;
    withPromoter(promoter: string): this;
    build(): PromotedObject;
}
