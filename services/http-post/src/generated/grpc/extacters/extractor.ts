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
   AmountWithAuthRequest,
   WalletWithAuthRequest,
} from "../types/threads_pb";

class ThreadModelExtractor {
   private message: ThreadModel;

   constructor(message: ThreadModel) {
      this.message = message;
   }

   getId(): string | null {
      return this.message.getId()?.getValue() ?? null;
   }

   getName(): string | null {
      return this.message.getName()?.getValue() ?? null;
   }

   getDescription(): string | null {
      return this.message.getDescription()?.getValue() ?? null;
   }

   getContent(): string | null {
      return this.message.getContent()?.getValue() ?? null;
   }

   getImagesList(): string[] {
      return this.message.getImagesList().map((value) => value?.getValue());
   }

   getCreatedAt(): Date | null {
      const data = this.message.getCreatedAt()?.getValue()
      return  data ? new Date(data) : null;
   }

   getUpdatedAt(): Date | null {
      const data = this.message.getUpdatedAt()?.getValue()
      return data ? new Date(data) : null;
   }

   getOwner(): string | null {
      return this.message.getOwner()?.getValue() ?? null;
   }

   getDeleted(): boolean | null {
      return this.message.getDeleted()?.getValue() ?? null;
   }

   getPromotedList(): PromotedObjectValues[] {
      return this.message.getPromotedList().map((promoted) => new PromotedObjectExtractor(promoted).extract());
   }

   getDonationsList(): DonationObjectValues[] {
      return this.message.getDonationsList().map((donation) => new DonationObjectExtractor(donation).extract());
   }

   getLikesList(): string[] {
      return this.message.getLikesList().map((value) => value?.getValue());
   }

   getDislikesList(): string[] {
      return this.message.getDislikesList().map((value) => value?.getValue());
   }

   getTagsList(): string[] {
      return this.message.getTagsList().map((value) => value?.getValue());
   }

   getLikesCount(): number | null {
      return this.message.getLikesCount()?.getValue() ?? null;
   }

   getDislikesCount(): number | null {
      return this.message.getDislikesCount()?.getValue() ?? null;
   }

   extract(): ThreadModelValues {
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

class PromotedObjectExtractor {
   private message: PromotedObject;

   constructor(message: PromotedObject) {
      this.message = message;
   }

   getPromoter(): string | null {
      return this.message.getPromoter()?.getValue() ?? null;
   }

   getDate(): Date| null {
      const data = this.message.getDate()?.getValue()
      return data ? new Date(data) : null;
   }

   getAmount(): number | null {
      return this.message.getAmount()?.getValue() ?? null;
   }

   extract(): PromotedObjectValues {
      return {
         promoter: this.getPromoter(),
         date: this.getDate(),
         amount: this.getAmount(),
      };
   }
}

class DonationObjectExtractor {
   private message: DonationObject;

   constructor(message: DonationObject) {
      this.message = message;
   }

   getDonator(): string | null {
      return this.message.getDonator()?.getValue() ?? null;
   }

   getDate(): Date | null {
      const data = this.message.getDate()?.getValue();
      return  data ? new Date(data) : null;
   }

   getAmount(): number | null {
      return this.message.getAmount()?.getValue() ?? null;
   }

   extract(): DonationObjectValues {
      return {
         donator: this.getDonator(),
         date: this.getDate(),
         amount: this.getAmount(),
      };
   }
}

class CreateRequestExtractor {
   private message: CreateRequest;

   constructor(message: CreateRequest) {
      this.message = message;
   }

   getName(): string | null {
      return this.message.getName()?.getValue() ?? null;
   }

   getDescription(): string | null {
      return this.message.getDescription()?.getValue() ?? null;
   }

   getContent(): string | null {
      return this.message.getContent()?.getValue() ?? null;
   }

   getOwner(): string | null {
      return this.message.getOwner()?.getValue() ?? null;
   }

   getImagesList(): string[] {
      return this.message.getImagesList().map((value) => value?.getValue());
   }

   getTagsList(): string [] {
      return this.message.getTagsList().map((value) => value?.getValue());
   }

   getIsPromoted(): boolean | null {
      return this.message.getIspromoted()?.getValue() ?? null;
   }

   getAuth(): string | null {
      return this.message.getAuth()?.getValue() ?? null;
   }

   extract(): CreateRequestValues {
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

class AmountWithAuthRequestExtractor {
   private message: AmountWithAuthRequest;

   constructor(message: AmountWithAuthRequest) {
      this.message = message;
   }

   getAuth(): string | null {
      return this.message.getAuth()?.getValue() ?? null;
   }

   getAmount(): number | null {
      return this.message.getAmount()?.getValue() ?? null;
   }

   extract(): AmountWithAuthRequestValues {
      return {
         auth: this.getAuth(),
         amount: this.getAmount(),
      };
   }
}

class PaginationExtractor {
   private message: Pagination;

   constructor(message: Pagination) {
      this.message = message;
   }

   getPage(): number | null {
      return this.message.getPage()?.getValue() ?? null;
   }

   getLimit(): number | null {
      return this.message.getLimit()?.getValue() ?? null;
   }

   extract(): PaginationValues {
      return {
         page: this.getPage(),
         limit: this.getLimit(),
      };
   }
}

class WalletWithAuthRequestExtractor {
   private message: WalletWithAuthRequest;

   constructor(message: WalletWithAuthRequest) {
      this.message = message;
   }

   getWallet(): string | null {
      return this.message.getWallet()?.getValue() ?? null;
   }

   getId(): string | null {
      return this.message.getId()?.getValue() ?? null;
   }

   extract(): WalletWithAuthRequestValues {
      return {
         wallet: this.getWallet(),
         id: this.getId(),
      };
   }
}

class IdRequestExtractor {
   private message: IdRequest;

   constructor(message: IdRequest) {
      this.message = message;
   }

   getId(): string | null {
      return this.message.getId()?.getValue() ?? null;
   }

   extract(): IdRequestValues {
      return {
         id: this.getId(),
      };
   }
}

class StatsModelExtractor {
   private message: StatsModel;

   constructor(message: StatsModel) {
      this.message = message;
   }

   getId(): string | null {
      return this.message.getId()?.getValue() ?? null;
   }

   getName(): string | null {
      return this.message.getName()?.getValue() ?? null;
   }

   getPromotedList(): PromotedStatsValues[] {
      return this.message.getPromotedList().map((p) => new PromotedStatsExtractor(p).extract());
   }

   getDonationsList(): DonationsStatsValues[] {
      return this.message.getDonationsList().map((d) => new DonationsStatsExtractor(d).extract());
   }

   getLikesCount(): number | null {
      return this.message.getLikesCount()?.getValue() ?? null;
   }

   getDislikesCount(): number | null {
      return this.message.getDislikesCount()?.getValue() ?? null;
   }

   extract(): StatsModelValues {
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

class PromotedStatsExtractor {
   private message: PromotedStats;

   constructor(message: PromotedStats) {
      this.message = message;
   }

   getCount(): number | null {
      return this.message.getCount()?.getValue() ?? null;
   }

   getAmount(): number | null {
      return this.message.getAmount()?.getValue() ?? null;
   }

   extract(): PromotedStatsValues {
      return {
         count: this.getCount(),
         amount: this.getAmount(),
      };
   }
}

class DonationsStatsExtractor {
   private message: DonationsStats;

   constructor(message: DonationsStats) {
      this.message = message;
   }

   getCount(): number | null {
      return this.message.getCount()?.getValue() ?? null;
   }

   getAmount(): number | null {
      return this.message.getAmount()?.getValue() ?? null;
   }

   extract(): DonationsStatsValues {
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
