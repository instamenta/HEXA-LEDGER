import {WithId} from 'mongodb';


export type PCreateData = {
   name: string;
   description: string;
   content: string;
   images: string[];
   owner: string;
   promoted: number;
   tags: string[];
}

export type PUpdateData = {
   name: string;
   description: string;
   content: string;
   images: string[];
   tags: string[];
}

//! Internal Thread
export interface IThreadSchema {
   n: Buffer // name
   des: Buffer // description
   c: Buffer // content
   i: Buffer[] // images
   ca: number // created_at
   up: number // updated_at
   o: Buffer // owner
   del: boolean // deleted
   p: IPromotedObject[] // promoted
   do: IDonationObject[] // donations
   li: Buffer[] // likes
   di: Buffer[] // dislikes
   t: Buffer[] // tags
}

export type IPromotedObject = { amount: number, promoter: Buffer, date: number }
export type IDonationObject = { donator: Buffer, amount: number, date: number }

//! Object Thread
export interface OThreadsModel {
   id: string
   name: string
   description: string
   content: string
   images: string[]
   created_at: Date
   updated_at: Date
   owner: string
   deleted: boolean
   promoted: OPromotedObject[]
   donations: ODonationObject[]
   likes: string[]
   dislikes: string[]
   tags: string[]
}

type OPromotedObject = { promoter: string, date: Date, amount: number };
type ODonationObject = { donator: string, date: Date, amount: number };


//! Static Thread
export interface SOThreadsModel {
   id: string
   name: string
   description: string
   content: string
   image: string
   created_at: string
   updated_at: string
   owner: string
   likes_count: number
   dislikes_count: number
}

//! Projected Thread
export interface PThreadsModel {
   id: ?string
   name: ?string
   description: ?string
   content: ?string
   images: string[]
   created_at: ?string
   updated_at: ?string
   owner: ?string
   deleted: ?boolean
   promoted: SPromotedObject[]
   donations: SDonationObject[]
   likes: string[]
   dislikes: string[]
   tags: string[]
}

type SPromotedObject = { promoter: string, date: string, amount: number };
type SDonationObject = { donator: string, date: string, amount: number };

//! Statistics Internal
export type IStatsModel = Pick<WithId<IThreadSchema>, 'di' | 'li' | 'do' | 'p' | '_id' | 'n'>;

//! Statistics Object
export type OStatsModel = {
   id: string,
   name: string,
   promoted: { count: number, amount: number },
   donations: { count: number, amount: number },
   likes: number,
   dislikes: number,
};
