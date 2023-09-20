import {ObjectId} from 'mongodb';

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

export type IPromotedObject = {
   amount: number,
   promoter: ObjectId,
   date: Date,
}

export type IDonationObject = {
   donator: ObjectId,
   amount: number,
   date: Date,
}

export interface IThreadSchema {
   n: Buffer // name
   des: Buffer // description
   c: Buffer // content
   i: Buffer[] // images
   ca: Date // created_at
   up: Date // updated_at
   o: ObjectId // owner
   del: boolean // deleted
   p: IPromotedObject[] // promoted
   do: IDonationObject[] // donations
   li: ObjectId[] // likes
   di: ObjectId[] // dislikes
   t: Buffer[] // tags
}

type OPromotedObject = { promoter: string, date: Date, amount: number };
type ODonationObject = { donator: string, date: Date, amount: number };

export interface OThreadsModel {
   id: string
   name: string
   description: string
   content: string
   images:  string[]
   created_at: Date
   updated_at: Date
   owner: string
   deleted: boolean
   promoted: OPromotedObject[]
   donations: ODonationObject[]
   likes : string[]
   dislikes: string[]
   tags: string[]
}