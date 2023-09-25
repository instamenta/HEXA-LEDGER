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
}