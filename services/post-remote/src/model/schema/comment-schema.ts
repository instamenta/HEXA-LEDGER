import mongoose, {Schema, Document} from 'mongoose';
import {ObjectId} from 'bson';

export interface IComment extends Document {
    _id: ObjectId;
    ownerId: ObjectId;
    postId: ObjectId;
    upvotes: Array<ObjectId>;
    downvotes: Array<ObjectId>;
    subcomments: Array<ObjectId>;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    wasEdited: boolean;
}

const CommentSchema: Schema<IComment> = new Schema<IComment>({
    content: {
        type: String,
        required: true,
        minlength: 1,
        maxlength:160,
    },
    postId: {
        type: Schema.Types.ObjectId,
        ref: 'Post',
        required: true,
    },
    upvotes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    downvotes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
    subcomments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment',
        },
    ],
    ownerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    wasEdited: {
        type: Boolean,
        default: false,
    }
});

const CommentModel = mongoose.model<IComment>('Comment', CommentSchema);

export default CommentModel;
