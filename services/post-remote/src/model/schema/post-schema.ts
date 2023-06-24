import mongoose, {Schema, Document} from 'mongoose';

interface IPost extends Document {
    title: string;
    description: string;
    author: Schema.Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
    upvotes: Array<Schema.Types.ObjectId>;
    downvotes: Array<Schema.Types.ObjectId>;
    comments: Array<Schema.Types.ObjectId>;
    tags: Array<string>;

    isPromoted: boolean;
    promotionAmount: number;

    tronTransaction: Array<string>;
    ethereumTransaction: Array<string>;
    donations: Array<Schema.Types.ObjectId>;
    pictures: Array<string> | [];

    transactionsCount: number;
    donationsCount: number;
    commentsCount: number;
    upvotesCount: number;
    downvotesCount: number;
}

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

export {PostModel};
