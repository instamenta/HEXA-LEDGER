"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonationsStatsExtractor = exports.PingPongExtractor = exports.PromotedStatsExtractor = exports.StatsModelExtractor = exports.IdRequestExtractor = exports.WalletWithAuthRequestExtractor = exports.PaginationExtractor = exports.AmountWithAuthRequestExtractor = exports.CreateRequestExtractor = exports.DonationObjectExtractor = exports.PromotedObjectExtractor = exports.ThreadModelExtractor = void 0;
const threads_pb_1 = require("../typescript/threads_pb");
class ThreadModelExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getId() {
        return this.#message.getId()?.getValue() ?? null;
    }
    getName() {
        return this.#message.getName()?.getValue() ?? null;
    }
    getDescription() {
        return this.#message.getDescription()?.getValue() ?? null;
    }
    getContent() {
        return this.#message.getContent()?.getValue() ?? null;
    }
    getImagesList() {
        return this.#message.getImagesList().map((value) => value?.getValue());
    }
    getCreatedAt() {
        const data = this.#message.getCreatedAt()?.getValue();
        return data ? new Date(data) : null;
    }
    getUpdatedAt() {
        const data = this.#message.getUpdatedAt()?.getValue();
        return data ? new Date(data) : null;
    }
    getOwner() {
        return this.#message.getOwner()?.getValue() ?? null;
    }
    getDeleted() {
        return this.#message.getDeleted()?.getValue() ?? null;
    }
    getPromotedList() {
        return this.#message.getPromotedList().map((promoted) => new PromotedObjectExtractor(promoted).extract());
    }
    getDonationsList() {
        return this.#message.getDonationsList().map((donation) => new DonationObjectExtractor(donation).extract());
    }
    getLikesList() {
        return this.#message.getLikesList().map((value) => value?.getValue());
    }
    getDislikesList() {
        return this.#message.getDislikesList().map((value) => value?.getValue());
    }
    getTagsList() {
        return this.#message.getTagsList().map((value) => value?.getValue());
    }
    getLikesCount() {
        return this.#message.getLikesCount()?.getValue() ?? null;
    }
    getDislikesCount() {
        return this.#message.getDislikesCount()?.getValue() ?? null;
    }
    extract() {
        return {
            id: this.getId(),
            name: this.getName(),
            description: this.getDescription(),
            content: this.getContent(),
            imagesList: this.getImagesList(),
            createdAt: this.getCreatedAt(),
            updatedAt: this.getUpdatedAt(),
            owner: this.getOwner(),
            deleted: this.getDeleted(),
            promotedList: this.getPromotedList(),
            donationsList: this.getDonationsList(),
            likesList: this.getLikesList(),
            dislikesList: this.getDislikesList(),
            tagsList: this.getTagsList(),
            likesCount: this.getLikesCount(),
            dislikesCount: this.getDislikesCount(),
        };
    }
}
exports.ThreadModelExtractor = ThreadModelExtractor;
class PromotedObjectExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getPromoter() {
        return this.#message.getPromoter()?.getValue() ?? null;
    }
    getDate() {
        const data = this.#message.getDate()?.getValue();
        return data ? new Date(data) : null;
    }
    getAmount() {
        return this.#message.getAmount()?.getValue() ?? null;
    }
    extract() {
        return {
            promoter: this.getPromoter(),
            date: this.getDate(),
            amount: this.getAmount(),
        };
    }
}
exports.PromotedObjectExtractor = PromotedObjectExtractor;
class DonationObjectExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getDonator() {
        return this.#message.getDonator()?.getValue() ?? null;
    }
    getDate() {
        const data = this.#message.getDate()?.getValue();
        return data ? new Date(data) : null;
    }
    getAmount() {
        return this.#message.getAmount()?.getValue() ?? null;
    }
    extract() {
        return {
            donator: this.getDonator(),
            date: this.getDate(),
            amount: this.getAmount(),
        };
    }
}
exports.DonationObjectExtractor = DonationObjectExtractor;
class CreateRequestExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getName() {
        return this.#message.getName()?.getValue() ?? null;
    }
    getDescription() {
        return this.#message.getDescription()?.getValue() ?? null;
    }
    getContent() {
        return this.#message.getContent()?.getValue() ?? null;
    }
    getOwner() {
        return this.#message.getOwner()?.getValue() ?? null;
    }
    getImagesList() {
        return this.#message.getImagesList().map((value) => value?.getValue());
    }
    getTagsList() {
        return this.#message.getTagsList().map((value) => value?.getValue());
    }
    getIsPromoted() {
        return this.#message.getIspromoted()?.getValue() ?? null;
    }
    getAuth() {
        return this.#message.getAuth()?.getValue() ?? null;
    }
    extract() {
        return {
            name: this.getName(),
            description: this.getDescription(),
            content: this.getContent(),
            owner: this.getOwner(),
            imagesList: this.getImagesList(),
            tagsList: this.getTagsList(),
            isPromoted: this.getIsPromoted(),
            auth: this.getAuth(),
        };
    }
}
exports.CreateRequestExtractor = CreateRequestExtractor;
class AmountWithAuthRequestExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getAuth() {
        return this.#message.getAuth()?.getValue() ?? null;
    }
    getAmount() {
        return this.#message.getAmount()?.getValue() ?? null;
    }
    getThreadId() {
        return this.#message.getThreadId()?.getValue() ?? null;
    }
    extract() {
        return {
            auth: this.getAuth(),
            amount: this.getAmount(),
            threadId: this.getThreadId(),
        };
    }
}
exports.AmountWithAuthRequestExtractor = AmountWithAuthRequestExtractor;
class PaginationExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getPage() {
        return this.#message.getPage()?.getValue() ?? null;
    }
    getLimit() {
        return this.#message.getLimit()?.getValue() ?? null;
    }
    extract() {
        return {
            page: this.getPage(),
            limit: this.getLimit(),
        };
    }
}
exports.PaginationExtractor = PaginationExtractor;
class WalletWithAuthRequestExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getWallet() {
        return this.#message.getWallet()?.getValue() ?? null;
    }
    getId() {
        return this.#message.getId()?.getValue() ?? null;
    }
    extract() {
        return {
            wallet: this.getWallet(),
            id: this.getId(),
        };
    }
}
exports.WalletWithAuthRequestExtractor = WalletWithAuthRequestExtractor;
class IdRequestExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getId() {
        return this.#message.getId()?.getValue() ?? null;
    }
    extract() {
        return {
            id: this.getId(),
        };
    }
}
exports.IdRequestExtractor = IdRequestExtractor;
class StatsModelExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getId() {
        return this.#message.getId()?.getValue() ?? null;
    }
    getName() {
        return this.#message.getName()?.getValue() ?? null;
    }
    getPromoted() {
        return new PromotedStatsExtractor(this.#message.getPromoted() ?? new threads_pb_1.PromotedStats()).extract();
    }
    getDonations() {
        return new DonationsStatsExtractor(this.#message.getDonations() ?? new threads_pb_1.DonationsStats()).extract();
    }
    getLikesCount() {
        return this.#message.getLikesCount()?.getValue() ?? null;
    }
    getDislikesCount() {
        return this.#message.getDislikesCount()?.getValue() ?? null;
    }
    extract() {
        return {
            id: this.getId(),
            name: this.getName(),
            promoted: this.getPromoted(),
            donations: this.getDonations(),
            likesCount: this.getLikesCount(),
            dislikesCount: this.getDislikesCount(),
        };
    }
}
exports.StatsModelExtractor = StatsModelExtractor;
class PromotedStatsExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getCount() {
        return this.#message.getCount()?.getValue() ?? null;
    }
    getAmount() {
        return this.#message.getAmount()?.getValue() ?? null;
    }
    extract() {
        return {
            count: this.getCount(),
            amount: this.getAmount(),
        };
    }
}
exports.PromotedStatsExtractor = PromotedStatsExtractor;
class PingPongExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getTimestamp() {
        return this.#message.getTimestamp()?.getValue() ?? null;
    }
    getName() {
        return this.#message.getName()?.getValue() ?? null;
    }
    extract() {
        return {
            timestamp: this.getTimestamp(),
            name: this.getName(),
        };
    }
}
exports.PingPongExtractor = PingPongExtractor;
class DonationsStatsExtractor {
    #message;
    constructor(message) {
        this.#message = message;
    }
    getCount() {
        return this.#message.getCount()?.getValue() ?? null;
    }
    getAmount() {
        return this.#message.getAmount()?.getValue() ?? null;
    }
    extract() {
        return {
            count: this.getCount(),
            amount: this.getAmount(),
        };
    }
}
exports.DonationsStatsExtractor = DonationsStatsExtractor;
