import mongoose, {Schema} from 'mongoose';
import {IPost} from '../../utility/types/base-types'

const postSchema: Schema<IPost> = new Schema<IPost>({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 40,
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 400,
    },
    author: {
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
    upvotes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
    downvotes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
    tags: {
        type: [String],
        default: []
    },
    isPromoted: {
        type: Boolean,
        default: false,
    },
    promotionAmount: {
        type: Number,
    },
    tronTransaction: [{
        type: String,
        default: ''
    }],
    ethereumTransaction: [{
        type: String,
        default: ''
    }],
    donations: [
        {
            type: Schema.Types.ObjectId
            , ref: 'User'
        }
    ],
    pictures: {
        type: [String],
        default: []
    },

    transactionsCount: {
        type: Number,
        default: 0
    },
    donationsCount: {
        type: Number,
        default: 0
    },
    commentsCount: {
        type: Number,
        default: 0
    },
    upvotesCount: {
        type: Number,
        default: 0
    },
    downvotesCount: {
        type: Number,
        default: 0
    },
});

const PostModel = mongoose.model<IPost>('Post', postSchema);

export default PostModel;
