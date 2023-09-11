"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc_js_1 = require("@grpc/grpc-js");
const mongodb_1 = require("mongodb");
const builder_1 = require("../protos/builder/builder");
const constants_1 = require("@grpc/grpc-js/build/src/constants");
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
            if (!username || !picture || !address) {
                this.vlog.error({ e: { username, picture, address }, msg: 'Invalid Data', func: 'auth' });
                return callback(new grpc_js_1.StatusBuilder().withCode(constants_1.Status.INVALID_ARGUMENT).withDetails('Invalid Data').build());
            }
            const result = await this.collection.insertOne({
                a: Buffer.from(address.replace(/^0x/, ''), 'hex'),
                u: Buffer.from(username),
                p: Buffer.from(picture),
            });
            if (!result.insertedId) {
                this.vlog.error({ e: { username, picture, address }, msg: 'Creation Failed', func: 'auth' });
                return callback(new grpc_js_1.StatusBuilder().withCode(constants_1.Status.CANCELLED).withDetails('Creation Failed').build());
            }
            callback(null, (0, builder_1.build_AuthResponse)(await this.tokenTools.generateToken({
                authId: result.insertedId.toString(),
                address: '0x' + address,
                username, picture,
            })));
        }
        catch (e) {
            this.vlog.error({ e, func: "login", msg: "Unknown error" });
            callback(new grpc_js_1.StatusBuilder().withCode(constants_1.Status.UNKNOWN).withMetadata(e).build());
        }
    }
    async update(call, callback) {
        try {
            const r = call.request, username = r.hasUsername() ? r.getUsername().getValue() : null, picture = r.hasPicture() ? r.getPicture().getValue() : null, address = r.hasAddress() ? r.getAddress().getValue() : null;
            if (!address || !picture || !username) {
                this.vlog.error({ e: { username, picture, address }, msg: 'Invalid Data', func: 'update' });
                return callback(new grpc_js_1.StatusBuilder().withCode(constants_1.Status.INVALID_ARGUMENT).withDetails('Invalid Data').build());
            }
            const result = await this.collection.findOneAndUpdate({ a: Buffer.from(address.replace(/^0x/, ''), 'hex') }, { p: Buffer.from(picture), u: Buffer.from(username) });
            if (!result) {
                this.vlog.error({ e: { username, picture, address }, msg: 'Update Failed', func: 'update' });
                return callback(new grpc_js_1.StatusBuilder().withCode(constants_1.Status.CANCELLED).withDetails('Updating Failed').build());
            }
            callback(null, (0, builder_1.build_AuthResponse)(await this.tokenTools.generateToken({
                authId: result._id.toString(),
                address: '0x' + address,
                username, picture,
            })));
        }
        catch (e) {
            this.vlog.error({ e, func: "login", msg: "Unknown error" });
            callback(new grpc_js_1.StatusBuilder().withCode(constants_1.Status.UNKNOWN).withMetadata(e).build());
        }
    }
    async getUser(call, callback) {
        try {
            const r = call.request, authId = r.hasAuthId() ? r.getAuthId().getValue() : null;
            if (!authId || !mongodb_1.ObjectId.isValid(authId)) {
                this.vlog.error({ e: { invalid_data: authId }, msg: 'Invalid Data', func: 'getUser' });
                return callback(new grpc_js_1.StatusBuilder().withCode(constants_1.Status.INVALID_ARGUMENT).withDetails('Invalid Data').build());
            }
            const result = await this.collection.findOne({ _id: new mongodb_1.ObjectId(authId) });
            if (!result) {
                this.vlog.error({ e: { not_found: authId }, msg: 'User not found', func: 'getUser' });
                return callback(new grpc_js_1.StatusBuilder().withCode(constants_1.Status.NOT_FOUND).withDetails('User not found').build());
            }
            callback(null, (0, builder_1.build_UserResponse)(result._id.toString(), 
            // @ts-ignore
            '0x' + result.a.buffer.toString('hex'), result.u.buffer.toString(), result.p.buffer.toString()));
        }
        catch (e) {
            this.vlog.error({ e, func: "getUserById", msg: "Unknown error" });
            callback(new grpc_js_1.StatusBuilder().withCode(constants_1.Status.UNKNOWN).withMetadata(e).build());
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
                call.write((0, builder_1.build_UserResponse)(result[i]._id.toString(), 
                //@ts-ignore
                '0x' + result[i].a.buffer.toString('hex'), result[i].u.buffer.toString(), result[i].p.buffer.toString()));
            }
        }
        catch (e) {
            this.vlog.error({ e, func: "getUserById", msg: "Unknown error" });
            call.emit('error', new grpc_js_1.StatusBuilder().withCode(constants_1.Status.UNKNOWN).withMetadata(e).build());
        }
        finally {
            call.end();
        }
    }
}
exports.default = AuthService;
