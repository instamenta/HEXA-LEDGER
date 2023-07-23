"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrappers_pb_1 = require("google-protobuf/google/protobuf/wrappers_pb");
const { PostModel, CommentModel } = require('../protos/generated/posts_pb');
class GrpcTools {
    /**
     * @param call
     * @returns
     */
    static extractPostModel(call) {
        const p = call.request;
        return {
            _id: p.hasId() ? p.getId().getValue() : null,
            followers: p.getFollowersList().map((f) => f.getValue()).toString(),
        };
    }
    /**
     * @param p
     * @returns
     */
    static convertPostModel(p) {
        const m = new PostModel();
        const stringId = p._id.toString();
        const authorId = p.author.toString();
        m.setId(new wrappers_pb_1.StringValue().setValue(stringId));
        m.setTitle(new wrappers_pb_1.StringValue().setValue(p.title));
        m.setDescription(new wrappers_pb_1.StringValue().setValue(p.description));
        m.setAuthorId(new wrappers_pb_1.StringValue().setValue(authorId));
        m.setIsPromoted(new wrappers_pb_1.BoolValue().setValue(p.isPromoted));
        m.setUpvotesList(p.upvotes.map((uv) => new wrappers_pb_1.StringValue().setValue(uv.toString())));
        m.setDownvotesList(p.downvotes.map((dv) => new wrappers_pb_1.StringValue().setValue(dv.toString())));
        m.setPicturesList(p.pictures.map((pic) => new wrappers_pb_1.StringValue().setValue(pic)));
        m.setTagsList(p.tags.map((tag) => new wrappers_pb_1.StringValue().setValue(tag)));
        return m;
    }
    /**
     * @param c
     * @returns
     */
    static convertCommentModel(c) {
        const m = new CommentModel();
        m.setId(new wrappers_pb_1.StringValue().setValue(c._id.toString()));
        m.setAuthorId(new wrappers_pb_1.StringValue().setValue(c.authorId.toString()));
        m.setPostId(new wrappers_pb_1.StringValue().setValue(c.postId.toString()));
        m.wasEdited(new wrappers_pb_1.BoolValue().setValue(c.wasEdited));
        m.setUpvotesList(c.upvotes.map((uv) => new wrappers_pb_1.StringValue().setValue(uv.toString())));
        m.setDownvotesList(c.upvotes.map((dv) => new wrappers_pb_1.StringValue().setValue(dv.toString())));
        return m;
    }
}
exports.default = GrpcTools;
