import {WithId} from 'mongodb';
import * as I from '../types/user';
import BaseUser from './base/base.user';

export default class UserModel extends BaseUser {

    constructor(props: WithId<I.IUserSchema>) {
        super(props);
    }

    public get(): I.OUserModel {
        return {
            wallet: this.wallet,
            name: this.name,
            role: this.role,
            balance: this.balance,
            banned: this.banned,
            image: this.image,
            images: this.images,
            clerkId: this.clerkId,
            ownerOf: this.ownerOf,
            referenceIds: this.referenceIds,
            createdAt: this.created_at,
            updatedAt: this.updated_at,
            deleted: this.deleted,
        };
    }

    public project<T>(): T & Partial<I.OUserModel> {
        const data = {} as T & Partial<I.OUserModel>;
        if (this.wallet) data.wallet = this.wallet;
        if (this.name) data.name = this.name;
        if (this.role) data.role = this.role;
        if (this.balance) data.balance = this.balance;
        if (this.banned) data.banned = this.banned;
        if (this.image) data.image = this.image;
        if (this.images) data.images = this.images;
        if (this.clerkId) data.clerkId = this.clerkId;
        if (this.ownerOf) data.ownerOf = this.ownerOf;
        if (this.referenceIds) data.referenceIds = this.referenceIds;
        if (this.created_at) data.createdAt = this.created_at;
        if (this.updated_at) data.updatedAt = this.updated_at;
        return data;
    }

}