"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const builder_1 = require("../protos/builder/builder");
const mongodb_1 = require("mongodb");
class AuthService {
    vlog;
    collection;
    tokenTools;
    constructor(vlogger, db, tokenTools) {
        this.vlog = vlogger.getVlog(this.constructor.name);
        this.collection = db.collection('auth');
        this.tokenTools = tokenTools;
    }
    static getInstance({ vlogger, db, tokenTools }) {
        return new AuthService(vlogger, db, tokenTools);
    }
    async auth(call, callback) {
        try {
            const r = call.request, username = r.hasUsername() ? r.getUsername().getValue() : null, picture = r.hasPicture() ? r.getPicture().getValue() : null, address = r.hasAddress() ? r.getAddress().getValue() : null;
            if (!username || !picture || !address)
                throw new Error('Invalid Data');
            const result = await this.collection.insertOne({
                a: Buffer.from(address.replace(/^0x/, ''), 'hex'),
                u: Buffer.from(username),
                p: Buffer.from(picture),
            });
            callback(null, (0, builder_1.build_AuthResponse)(this.tokenTools.generateToken({
                authId: result.insertedId.toString(),
                address: '0x' + address,
                username, picture,
            })));
        }
        catch (e) {
            this.vlog.error({ e, func: "login", msg: "Unknown error" });
            callback(e);
        }
    }
    async update(call, callback) {
        try {
            const r = call.request, username = r.hasUsername() ? r.getUsername().getValue() : null, picture = r.hasPicture() ? r.getPicture().getValue() : null, address = r.hasAddress() ? r.getAddress().getValue() : null;
            if (!address || !picture || !username)
                throw new Error('Invalid data');
            const result = await this.collection.updateOne({ a: Buffer.from(address.replace(/^0x/, ''), 'hex') }, { p: Buffer.from(picture), u: Buffer.from(username) });
            if (result.modifiedCount === 0)
                throw new Error('Unknown user');
            callback(null, (0, builder_1.build_AuthResponse)(this.tokenTools.generateToken({
                authId: result.upsertedId.toString(),
                address: '0x' + address,
                username, picture,
            })));
        }
        catch (e) {
            this.vlog.error({ e, func: "login", msg: "Unknown error" });
            callback(e);
        }
    }
    async getUser(call, callback) {
        try {
            const r = call.request, authId = r.hasAuthId() ? r.getAuthId().getValue() : null;
            if (!authId || !mongodb_1.ObjectId.isValid(authId))
                throw new Error('invalid Data');
            const result = await this.collection.findOne({ _id: new mongodb_1.ObjectId(authId) });
            if (!result)
                throw new Error('User not found');
            callback(null, (0, builder_1.build_UserResponse)(result._id.toString(), '0x' + result.a.buffer.toString('hex'), result.u.buffer.toString(), result.p.buffer.toString()));
        }
        catch (e) {
            this.vlog.error({ e, func: "getUserById", msg: "Unknown error" });
            callback(e);
        }
    }
    async getUsers(call) {
        try {
            const r = call.request, limit = r.hasLimit() ? r.getLimit().getValue() : 6, skip = r.hasSkip() ? r.getSkip().getValue() : 1;
            const result = await this.collection.find({
                $skip: ((skip - 1) * limit),
                $limit: (limit),
            }).toArray();
            for (let i = 0; i < result.length; i++) {
                call.write((0, builder_1.build_UserResponse)(result[i]._id.toString(), '0x' + result[i].a.buffer.toString('hex'), result[i].u.buffer.toString(), result[i].p.buffer.toString()));
            }
        }
        catch (e) {
            this.vlog.error({ e, func: "getUserById", msg: "Unknown error" });
            call.emit(JSON.stringify(e));
        }
        finally {
            call.end();
        }
    }
}
exports.default = AuthService;
