"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommentGrpcModel {
    _id;
    authorId;
    postId;
    upvotes;
    downvotes;
    subcomments;
    content;
    wasEdited;
    // CreatedAt: Timestamp | Date | any;
    // UpdatedAt: Timestamp | Date | any;
    constructor(commentData) {
        ({
            _id: this._id,
            authorId: this.authorId,
            postId: this.postId,
            upvotes: this.upvotes,
            downvotes: this.downvotes,
            subcomments: this.subcomments,
            content: this.content,
            wasEdited: this.wasEdited,
        } = commentData);
    }
    static fromCommentGRPCMessage(m) {
        return new CommentGrpcModel({
            _id: m.hasId() ? m.getId().getValue() : null,
            authorId: m.hasAuthorId() ? m.getAuthorId().getValue() : null,
            postId: m.hasPostId() ? m.getPostId().getValue() : null,
            content: m.hasContent() ? m.getContent().getValue() : null,
            wasEdited: m.hasWasEdited() ? m.getWasEdited().getValue() : false,
            upvotes: m.getUpvotesList().map((uv) => uv.toString()),
            downvotes: m.getDownvotesList().map((dv) => dv.toString()),
            subcomments: m.getSubcommentsList().map((sc) => sc.toString()),
        });
    }
}
exports.default = CommentGrpcModel;
