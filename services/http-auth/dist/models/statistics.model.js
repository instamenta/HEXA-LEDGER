"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_statistics_1 = __importDefault(require("./base/base.statistics"));
class StatsModel extends base_statistics_1.default {
    constructor(props) {
        super(props);
    }
    get() {
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
exports.default = StatsModel;
