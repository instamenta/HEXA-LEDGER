import {Collection, Db, ObjectId} from 'mongodb';
import * as I from '../types/types';
import ThreadModel from '../models/thread.model';
import {HandleMongoError} from '../utilities/error.handlers';

export default class ThreadRepository {

    private collection: Collection<I.IThreadSchema>;

    constructor(db: Db) {
        this.collection = db.collection('threads');
    }

    async create(data: I.PCreateData): Promise<ThreadModel | null> {
        const doc = {
            n: Buffer.from(data.name),
            des: Buffer.from(data.description),
            c: Buffer.from(data.content),
            o: new ObjectId(data.owner),
            p: [{promoter: new ObjectId(data.owner), date: new Date(), amount: data.promoted}],
            i: data.images.map((img) => Buffer.from(img)),
            t: data.tags.map((tag) => Buffer.from(tag)),
            ca: new Date(), up: new Date(),
            do: [], li: [], di: [],
            del: false,
        };

        return await this.collection.insertOne(doc)
            .then(rec => rec.insertedId
                ? new ThreadModel({...doc, _id: rec.insertedId})
                : null
            ).catch(e => {
                HandleMongoError(e);
                throw e;
            });
    }

    delete() {

    }

    update() {

    }

    getOne() {

    }

    getMany() {

    }

    customOne() {

    }

    customMany() {

    }

    promote() {

    }

    transferOwnership() {

    }

    like() {

    }

    dislike() {

    }


}