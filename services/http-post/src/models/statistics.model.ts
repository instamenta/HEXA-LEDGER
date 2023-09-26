import * as I from '../types/types';
import BaseStatistics from "./base/base.statistics";

export default class StatsModel extends BaseStatistics {

   constructor(props: I.IStatsModel) {
      super(props);
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