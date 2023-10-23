/// <reference types="node" />
import { ObjectId, WithId } from 'mongodb';
import * as I from '../../types/types';
export default class BaseStatistics {
    _id: ObjectId;
    n: Buffer;
    p: I.IPromotedObject[];
    do: I.IDonationObject[];
    li: Buffer[];
    di: Buffer[];
    constructor(props: WithId<I.IStatsModel>);
    get id(): string;
    get name(): string;
    get promoted(): {
        count: number;
        amount: number;
    };
    get donations(): {
        count: number;
        amount: number;
    };
    get likes(): number;
    get dislikes(): number;
}
