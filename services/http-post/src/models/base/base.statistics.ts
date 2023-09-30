import {ObjectId, WithId} from 'mongodb';
import * as I from '../../types/types';

export default class BaseStatistics {
   _id: ObjectId; // id
   n: Buffer; // name
   p: I.IPromotedObject[]; // promoted
   do: I.IDonationObject[]; // donations
   li: Buffer[]; // likes
   di: Buffer[]; // dislikes

   constructor(props: WithId<I.IStatsModel>) {
      this._id = props._id;
      this.n = props.n;
      this.p = props.p;
      this.do = props.do;
      this.li = props.li;
      this.di = props.di;
   }

   get id(): string {
      return this._id?.toString();
   }

   get name(): string {
      return this.n?.toString();
   }

   get promoted(): { count: number, amount: number } {
      return {
         count: this.p?.length,
         amount: this.p?.reduce((total, p) => total + p.amount, 0)
      };
   }

   get donations(): { count: number, amount: number } {
      return {
         count: this.do?.length,
         amount: this.do?.reduce((total, d) => total + d.amount, 0)
      };
   }

   get likes(): number {
      return this.li?.length;
   }

   get dislikes(): number {
      return this.di?.length;
   }
}