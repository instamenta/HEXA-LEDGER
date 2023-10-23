import { IdRequest, StatsModel, Pagination, ThreadModel, PromotedStats, CreateRequest, PromotedObject, DonationsStats, DonationObject, PingPongMessage, AmountWithAuthRequest, WalletWithAuthRequest } from "../typescript/threads_pb";
export declare class ThreadModelExtractor {
    #private;
    constructor(message: ThreadModel);
    getId(): string | null;
    getName(): string | null;
    getDescription(): string | null;
    getContent(): string | null;
    getImagesList(): string[];
    getCreatedAt(): Date | null;
    getUpdatedAt(): Date | null;
    getOwner(): string | null;
    getDeleted(): boolean | null;
    getPromotedList(): PromotedObjectValues[];
    getDonationsList(): DonationObjectValues[];
    getLikesList(): string[];
    getDislikesList(): string[];
    getTagsList(): string[];
    getLikesCount(): number | null;
    getDislikesCount(): number | null;
    extract(): ThreadModelValues;
}
export declare class PromotedObjectExtractor {
    #private;
    constructor(message: PromotedObject);
    getPromoter(): string | null;
    getDate(): Date | null;
    getAmount(): number | null;
    extract(): PromotedObjectValues;
}
export declare class DonationObjectExtractor {
    #private;
    constructor(message: DonationObject);
    getDonator(): string | null;
    getDate(): Date | null;
    getAmount(): number | null;
    extract(): DonationObjectValues;
}
export declare class CreateRequestExtractor {
    #private;
    constructor(message: CreateRequest);
    getName(): string | null;
    getDescription(): string | null;
    getContent(): string | null;
    getOwner(): string | null;
    getImagesList(): string[];
    getTagsList(): string[];
    getIsPromoted(): boolean | null;
    getAuth(): string | null;
    extract(): CreateRequestValues;
}
export declare class AmountWithAuthRequestExtractor {
    #private;
    constructor(message: AmountWithAuthRequest);
    getAuth(): string | null;
    getAmount(): number | null;
    getThreadId(): string | null;
    extract(): AmountWithAuthRequestValues;
}
export declare class PaginationExtractor {
    #private;
    constructor(message: Pagination);
    getPage(): number | null;
    getLimit(): number | null;
    extract(): PaginationValues;
}
export declare class WalletWithAuthRequestExtractor {
    #private;
    constructor(message: WalletWithAuthRequest);
    getWallet(): string | null;
    getId(): string | null;
    extract(): WalletWithAuthRequestValues;
}
export declare class IdRequestExtractor {
    #private;
    constructor(message: IdRequest);
    getId(): string | null;
    extract(): IdRequestValues;
}
export declare class StatsModelExtractor {
    #private;
    constructor(message: StatsModel);
    getId(): string | null;
    getName(): string | null;
    getPromoted(): PromotedStatsValues;
    getDonations(): DonationsStatsValues;
    getLikesCount(): number | null;
    getDislikesCount(): number | null;
    extract(): StatsModelValues;
}
export declare class PromotedStatsExtractor {
    #private;
    constructor(message: PromotedStats);
    getCount(): number | null;
    getAmount(): number | null;
    extract(): PromotedStatsValues;
}
export declare class PingPongExtractor {
    #private;
    constructor(message: PingPongMessage);
    getTimestamp(): number | null;
    getName(): string | null;
    extract(): {
        timestamp: number | null;
        name: string | null;
    };
}
export declare class DonationsStatsExtractor {
    #private;
    constructor(message: DonationsStats);
    getCount(): number | null;
    getAmount(): number | null;
    extract(): DonationsStatsValues;
}
type ThreadModelValues = {
    id: string | null;
    name: string | null;
    description: string | null;
    content: string | null;
    imagesList: string[];
    createdAt: Date | null;
    updatedAt: Date | null;
    owner: string | null;
    deleted: boolean | null;
    promotedList: PromotedObjectValues[];
    donationsList: DonationObjectValues[];
    likesList: string[];
    dislikesList: string[];
    tagsList: string[];
    likesCount: number | null;
    dislikesCount: number | null;
};
type PromotedObjectValues = {
    promoter: string | null;
    date: Date | null;
    amount: number | null;
};
type DonationObjectValues = {
    donator: string | null;
    date: Date | null;
    amount: number | null;
};
type CreateRequestValues = {
    name: string | null;
    description: string | null;
    content: string | null;
    owner: string | null;
    imagesList: string[];
    tagsList: string[];
    isPromoted: boolean | null;
    auth: string | null;
};
type AmountWithAuthRequestValues = {
    auth: string | null;
    amount: number | null;
    threadId: string | null;
};
type PaginationValues = {
    page: number | null;
    limit: number | null;
};
type WalletWithAuthRequestValues = {
    wallet: string | null;
    id: string | null;
};
type IdRequestValues = {
    id: string | null;
};
type StatsModelValues = {
    id: string | null;
    name: string | null;
    promoted: PromotedStatsValues;
    donations: DonationsStatsValues;
    likesCount: number | null;
    dislikesCount: number | null;
};
type PromotedStatsValues = {
    count: number | null;
    amount: number | null;
};
type DonationsStatsValues = {
    count: number | null;
    amount: number | null;
};
export {};
