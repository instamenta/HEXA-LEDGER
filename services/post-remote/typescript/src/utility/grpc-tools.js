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
        return new PostModel()
            .setId(new wrappers_pb_1.StringValue().setValue(p._id.toString()))
            .setTitle(new wrappers_pb_1.StringValue().setValue(p.title))
            .setDescription(new wrappers_pb_1.StringValue().setValue(p.description))
            .setAuthorId(new wrappers_pb_1.StringValue().setValue(p.author.toString()))
            .setIsPromoted(new wrappers_pb_1.BoolValue().setValue(p.isPromoted))
            .setUpvotesList(p.upvotes.map((uv) => new wrappers_pb_1.StringValue().setValue(uv.toString())))
            .setDownvotesList(p.downvotes.map((dv) => new wrappers_pb_1.StringValue().setValue(dv.toString())))
            .setPicturesList(p.pictures.map((pic) => new wrappers_pb_1.StringValue().setValue(pic)))
            .setTagsList(p.tags.map((tag) => new wrappers_pb_1.StringValue().setValue(tag)))
            .setCommentsList(p.comments.map((com) => new wrappers_pb_1.StringValue().setValue(com.toString())));
    }
    /**
     * @param c
     * @returns
     */
    static convertCommentModel(c) {
        return new CommentModel()
            .setId(new wrappers_pb_1.StringValue().setValue(c._id.toString()))
            .setAuthorId(new wrappers_pb_1.StringValue().setValue(c.authorId.toString()))
            .setPostId(new wrappers_pb_1.StringValue().setValue(c.postId.toString()))
            .setWasEdited(new wrappers_pb_1.BoolValue().setValue(c.wasEdited))
            .setContent(new wrappers_pb_1.StringValue().setValue(c.content.toString()))
            .setUpvotesList(c.upvotes.map((uv) => new wrappers_pb_1.StringValue().setValue(uv.toString())))
            .setDownvotesList(c.upvotes.map((dv) => new wrappers_pb_1.StringValue().setValue(dv.toString())));
    }
}
exports.default = GrpcTools;
