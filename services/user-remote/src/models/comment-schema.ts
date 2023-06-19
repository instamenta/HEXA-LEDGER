import mongoose, { Schema, Document } from 'mongoose';
import { ObjectId } from 'bson';

export interface IComment extends Document {
    _id: ObjectId;
    content: string;
    likes: ObjectId[];
    dislikes: ObjectId[];
    subcomments: ObjectId[];
    ownerId: ObjectId;
    postId: ObjectId;
    postedAt: Date;
}

const CommentSchema: Schema<IComment> = new Schema<IComment>({
	content: {
		type: String,
		required: true,
	},
	postId: {
		type: Schema.Types.ObjectId,
		ref: 'Post',
		required: true,
	},
	likes: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	dislikes: [
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
	postedAt: {
		type: Date,
		default: Date.now,
	},
});

const CommentModel = mongoose.model<IComment>('Comment', CommentSchema);

export default CommentModel;
