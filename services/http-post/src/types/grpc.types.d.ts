export type I_build_ThreadModel = {
   id: string | null,
   name: string | null,
   description: string | null,
   content: string | null,
   images: string[] | null,
   created_at: Date | null,
   updated_at: Date | null,
   owner: string | null,
   deleted: boolean | null,
   promoted: IP_build_PromotedObject[] | null,
   donations: IP_build_DonationObject[] | null,
   likes: string[] | null,
   dislikes: string[] | null,
   tags: string[] | null,
   likes_count: number | null,
   dislikes_count: number | null,
}

export type IP_build_PromotedObject = {date: Date, amount: number, promoter: string};

export type IP_build_DonationObject = {date: Date, amount: number, donator: string};

export type EOPromotedObject = { promoter: string |null, date: Date |null, amount: number|null };
export type EODonationObject = { donator: string|null, date: Date|null, amount: number|null };

export type EO_build_ThreadModel = {
   id: string | null,
   name: string | null,
   description: string | null,
   content: string | null,
   images: string[],
   created_at: Date | null,
   updated_at: Date | null,
   owner: string | null,
   deleted: boolean | null,
   promoted: EOPromotedObject[],
   donations: EODonationObject[],
   likes: string[]
   dislikes: string[],
   tags: string[],
   likes_count: number | null,
   dislikes_count: number | null,
}