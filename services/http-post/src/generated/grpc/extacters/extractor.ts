import {
   IdRequest,
   StatsModel,
   Pagination,
   ThreadModel,
   PromotedStats,
   CreateRequest,
   PromotedObject,
   DonationsStats,
   DonationObject,
   PingPongMessage,
   AmountWithAuthRequest,
   WalletWithAuthRequest,
} from "../typescript/threads_pb";

export class ThreadModelExtractor {
   #message: ThreadModel;

   constructor(message: ThreadModel) {
      this.#message = message;
   }

   public getId(): string | null {
      return this.#message.getId()?.getValue() ?? null;
   }

   public getName(): string | null {
      return this.#message.getName()?.getValue() ?? null;
   }

   public getDescription(): string | null {
      return this.#message.getDescription()?.getValue() ?? null;
   }

   public getContent(): string | null {
      return this.#message.getContent()?.getValue() ?? null;
   }

   public getImagesList(): string[] {
      return this.#message.getImagesList().map((value) => value?.getValue());
   }

   public getCreatedAt(): Date | null {
      const data = this.#message.getCreatedAt()?.getValue()
      return data ? new Date(data) : null;
   }

   public getUpdatedAt(): Date | null {
      const data = this.#message.getUpdatedAt()?.getValue()
      return data ? new Date(data) : null;
   }

   public getOwner(): string | null {
      return this.#message.getOwner()?.getValue() ?? null;
   }

   public getDeleted(): boolean | null {
      return this.#message.getDeleted()?.getValue() ?? null;
   }

   public getPromotedList(): PromotedObjectValues[] {
      return this.#message.getPromotedList().map((promoted) => new PromotedObjectExtractor(promoted).extract());
   }

   public getDonationsList(): DonationObjectValues[] {
      return this.#message.getDonationsList().map((donation) => new DonationObjectExtractor(donation).extract());
   }

   public getLikesList(): string[] {
      return this.#message.getLikesList().map((value) => value?.getValue());
   }

   public getDislikesList(): string[] {
      return this.#message.getDislikesList().map((value) => value?.getValue());
   }

   public getTagsList(): string[] {
      return this.#message.getTagsList().map((value) => value?.getValue());
   }

   public getLikesCount(): number | null {
      return this.#message.getLikesCount()?.getValue() ?? null;
   }

   public getDislikesCount(): number | null {
      return this.#message.getDislikesCount()?.getValue() ?? null;
   }

   public extract(): ThreadModelValues {
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

export class PromotedObjectExtractor {
   #message: PromotedObject;

   constructor(message: PromotedObject) {
      this.#message = message;
   }

   public getPromoter(): string | null {
      return this.#message.getPromoter()?.getValue() ?? null;
   }

   public getDate(): Date | null {
      const data = this.#message.getDate()?.getValue()
      return data ? new Date(data) : null;
   }

   public getAmount(): number | null {
      return this.#message.getAmount()?.getValue() ?? null;
   }

   public extract(): PromotedObjectValues {
      return {
         promoter: this.getPromoter(),
         date: this.getDate(),
         amount: this.getAmount(),
      };
   }
}

export class DonationObjectExtractor {
   #message: DonationObject;

   constructor(message: DonationObject) {
      this.#message = message;
   }

   public getDonator(): string | null {
      return this.#message.getDonator()?.getValue() ?? null;
   }

   public getDate(): Date | null {
      const data = this.#message.getDate()?.getValue();
      return data ? new Date(data) : null;
   }

   public getAmount(): number | null {
      return this.#message.getAmount()?.getValue() ?? null;
   }

   public extract(): DonationObjectValues {
      return {
         donator: this.getDonator(),
         date: this.getDate(),
         amount: this.getAmount(),
      };
   }
}

export class CreateRequestExtractor {
   #message: CreateRequest;

   constructor(message: CreateRequest) {
      this.#message = message;
   }

   public getName(): string | null {
      return this.#message.getName()?.getValue() ?? null;
   }

   public getDescription(): string | null {
      return this.#message.getDescription()?.getValue() ?? null;
   }

   public getContent(): string | null {
      return this.#message.getContent()?.getValue() ?? null;
   }

   public getOwner(): string | null {
      return this.#message.getOwner()?.getValue() ?? null;
   }

   public getImagesList(): string[] {
      return this.#message.getImagesList().map((value) => value?.getValue());
   }

   public getTagsList(): string [] {
      return this.#message.getTagsList().map((value) => value?.getValue());
   }

   public getIsPromoted(): boolean | null {
      return this.#message.getIspromoted()?.getValue() ?? null;
   }

   public getAuth(): string | null {
      return this.#message.getAuth()?.getValue() ?? null;
   }

   public extract(): CreateRequestValues {
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

export class AmountWithAuthRequestExtractor {
   #message: AmountWithAuthRequest;

   constructor(message: AmountWithAuthRequest) {
      this.#message = message;
   }

   public getAuth(): string | null {
      return this.#message.getAuth()?.getValue() ?? null;
   }

   public getAmount(): number | null {
      return this.#message.getAmount()?.getValue() ?? null;
   }

   public getThreadId(): string | null {
      return this.#message.getThreadId()?.getValue() ?? null;
   }

   public extract(): AmountWithAuthRequestValues {
      return {
         auth: this.getAuth(),
         amount: this.getAmount(),
         threadId: this.getThreadId(),
      };
   }
}

export class PaginationExtractor {
   #message: Pagination;

   constructor(message: Pagination) {
      this.#message = message;
   }

   public getPage(): number | null {
      return this.#message.getPage()?.getValue() ?? null;
   }

   public getLimit(): number | null {
      return this.#message.getLimit()?.getValue() ?? null;
   }

   public extract(): PaginationValues {
      return {
         page: this.getPage(),
         limit: this.getLimit(),
      };
   }
}

export class WalletWithAuthRequestExtractor {
   #message: WalletWithAuthRequest;

   constructor(message: WalletWithAuthRequest) {
      this.#message = message;
   }

   public getWallet(): string | null {
      return this.#message.getWallet()?.getValue() ?? null;
   }

   public getId(): string | null {
      return this.#message.getId()?.getValue() ?? null;
   }

   public extract(): WalletWithAuthRequestValues {
      return {
         wallet: this.getWallet(),
         id: this.getId(),
      };
   }
}

export class IdRequestExtractor {
   #message: IdRequest;

   constructor(message: IdRequest) {
      this.#message = message;
   }

   public getId(): string | null {
      return this.#message.getId()?.getValue() ?? null;
   }

   public extract(): IdRequestValues {
      return {
         id: this.getId(),
      };
   }
}

export class StatsModelExtractor {
   #message: StatsModel;

   constructor(message: StatsModel) {
      this.#message = message;
   }

   public getId(): string | null {
      return this.#message.getId()?.getValue() ?? null;
   }

   public getName(): string | null {
      return this.#message.getName()?.getValue() ?? null;
   }

   public getPromotedList(): PromotedStatsValues[] {
      return this.#message.getPromotedList().map((p) => new PromotedStatsExtractor(p).extract());
   }

   public getDonationsList(): DonationsStatsValues[] {
      return this.#message.getDonationsList().map((d) => new DonationsStatsExtractor(d).extract());
   }

   public getLikesCount(): number | null {
      return this.#message.getLikesCount()?.getValue() ?? null;
   }

   public getDislikesCount(): number | null {
      return this.#message.getDislikesCount()?.getValue() ?? null;
   }

   public extract(): StatsModelValues {
      return {
         id: this.getId(),
         name: this.getName(),
         promotedList: this.getPromotedList(),
         donationsList: this.getDonationsList(),
         likesCount: this.getLikesCount(),
         dislikesCount: this.getDislikesCount(),
      };
   }
}

export class PromotedStatsExtractor {
   #message: PromotedStats;

   constructor(message: PromotedStats) {
      this.#message = message;
   }

   public getCount(): number | null {
      return this.#message.getCount()?.getValue() ?? null;
   }

   public getAmount(): number | null {
      return this.#message.getAmount()?.getValue() ?? null;
   }

   public extract(): PromotedStatsValues {
      return {
         count: this.getCount(),
         amount: this.getAmount(),
      };
   }
}

export class PingPongExtractor {
   #message: PingPongMessage;

   constructor(message: PingPongMessage) {
      this.#message = message;
   }

   public getTimestamp(): number | null {
      return this.#message.getTimestamp()?.getValue() ?? null;
   }

   public getName(): string | null {
      return this.#message.getName()?.getValue() ?? null;
   }

   public extract(): { timestamp: number | null, name: string | null } {
      return {
         timestamp: this.getTimestamp(),
         name: this.getName(),
      };
   }
}

export class DonationsStatsExtractor {
   #message: DonationsStats;

   constructor(message: DonationsStats) {
      this.#message = message;
   }

   public getCount(): number | null {
      return this.#message.getCount()?.getValue() ?? null;
   }

   public getAmount(): number | null {
      return this.#message.getAmount()?.getValue() ?? null;
   }

   public extract(): DonationsStatsValues {
      return {
         count: this.getCount(),
         amount: this.getAmount(),
      };
   }
}

// Define types for extracted values
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
   promotedList: PromotedStatsValues[];
   donationsList: DonationsStatsValues[];
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
