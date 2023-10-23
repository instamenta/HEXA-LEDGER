import * as I from '../types/types';
import BaseStatistics from './base/base.statistics';
export default class StatsModel extends BaseStatistics {
    constructor(props: I.IStatsModel);
    get(): I.OStatsModel;
}
