/** @file Used for converting comment-model to protobuf messages. */
import {CommentModel} from '../protos/generated/types/posts_pb';
// Import {Timestamp} from 'google-protobuf/google/protobuf/timestamp_pb';
import {ICommentData} from '../utility/types/base-types';

export default class CommentGrpcModel {
    _id: string | null;
    authorId: string | null;
    postId: string | null;
    upvotes: Array<string>;
    downvotes: Array<string>;
    subcomments: Array<string>;
    content: string | null;
    wasEdited: boolean;
    // CreatedAt: Timestamp | Date | any;
    // UpdatedAt: Timestamp | Date | any;
    constructor(commentData: ICommentData) {
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

    static fromCommentGRPCMessage(m: CommentModel): CommentGrpcModel {
        return new CommentGrpcModel(<ICommentData>{
            _id: m.hasId() ? m.getId()!.getValue() : null,
            authorId: m.hasAuthorId() ? m.getAuthorId()!.getValue() : null,
            postId: m.hasPostId() ? m.getPostId()!.getValue() : null,
            content: m.hasContent() ? m.getContent()!.getValue() : null,
            wasEdited: m.hasWasEdited() ? m.getWasEdited()!.getValue() : false,
            upvotes: m.getUpvotesList().map((uv) => uv.toString()),
            downvotes: m.getDownvotesList().map((dv) => dv.toString()),
            subcomments: m.getSubcommentsList().map((sc) => sc.toString()),
        });
    }
}

