import * as I from '../../types/types';
import BaseStatistics from "./base.statistics";

export default class StatsModel extends BaseStatistics {

   constructor(props: I.IStatsModel) {
      super(props);
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
      }
   }

   get donations(): { count: number, amount: number } {
      return {
         count: this.do?.length,
         amount: this.do?.reduce((total, d) => total + d.amount, 0)
      }
   }

   get likes(): number {
      return this.li?.length;
   }

   get dislikes(): number {
      return this.di?.length;
   }

   public get(): I.OStatsModel {
      return {
         id: this.id,
         name: this.name,
         promoted: this.promoted,
         donations: this.donations,
         likes: this.likes,
         dislikes: this.dislikes,
      };
   }

}