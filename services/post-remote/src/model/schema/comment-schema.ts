import mongoose, {Schema} from 'mongoose';
import {IComment} from '../../utility/types/base-types';

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
	authorId: {
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
