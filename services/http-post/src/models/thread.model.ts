import {WithId} from 'mongodb';
import * as I from '../types/types';
import BaseThreadModel from './base.thread.model';

export default class ThreadModel extends BaseThreadModel {

    constructor(props: WithId<I.IThreadSchema>) {
        super(props);
    }

    get id(): string {
        return this._id.toString();
    }

    get name(): string {
        return this.n.buffer.toString();
    }

    get description(): string {
        return this.des.buffer.toString();
    }

    get content(): string {
        return this.c.buffer.toString();
    }

    get images(): string[] {
        return this.i.map(img => img.buffer.toString());
    }

    get created_at(): Date {
        return this.ca;
    }

    get updated_at(): Date {
        return this.up;
    }

    get owner(): string {
        return this.o.toString();
    }

    get deleted(): boolean {
        return this.del;
    }

    get promoted(): I.OPromotedObject[] {
        return this.p.map(({promoter, date, amount}) => {
            return {promoter: promoter.toString(), date, amount};
        });
    }

    get donations(): I.ODonationObject[] {
        return this.do.map(({donator, amount, date}) => {
            return {donator: donator.toString(), amount, date};
        });
    }

    get likes(): string[] {
        return this.li.map(like => like.toString());
    }

    get dislikes(): string[] {
        return this.di.map(dislike => dislike.toString());
    }

    get tags(): string[] {
        return this.t.map(tag => tag.buffer.toString());
    }

    get(): I.OThreadsModel {
        return {
            id: this.id,
            name: this.name,
            description: this.description,
            content: this.content,
            images: this.images,
            created_at: this.created_at,
            updated_at: this.updated_at,
            owner: this.owner,
            deleted: this.deleted,
            promoted: this.promoted,
            donations: this.donations,
            likes: this.likes,
            dislikes: this.dislikes,
            tags: this.tags,
        };
    }
}