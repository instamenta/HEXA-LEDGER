import {PostModel} from '../protos/generated/types/posts_pb';
import {Timestamp} from 'google-protobuf/google/protobuf/timestamp_pb';
import {IPostData} from '../utility/types/base-types';

export default class PostGrpcModel {
	_id: string | null;
	title: string | null;
	description: string | null;
	author: string | null;
	createdAt: Timestamp | null | undefined;
	updatedAt: Timestamp | null | undefined;
	upvotes: Array<string> | null;
	downvotes: Array<string> | null;
	comments: Array<string> | null;
	tags: Array<string> | null;
	isPromoted: boolean | null;
	promotionAmount: number | null;
	tronTransaction: Array<string> | null;
	ethereumTransaction: Array<string> | null;
	donations: Array<string> | null;
	pictures: Array<string> | null;
	transactionsCount: number | null;
	donationsCount: number | null;
	commentsCount: number | null;
	upvotesCount: number | null;
	downvotesCount: number | null;

	constructor(postData: IPostData) {
		({
			_id: this._id,
			title: this.title,
			description: this.description,
			author: this.author,
			createdAt: this.createdAt,
			updatedAt: this.updatedAt,
			upvotes: this.upvotes,
			downvotes: this.downvotes,
			comments: this.comments,
			tags: this.tags,
			isPromoted: this.isPromoted,
			promotionAmount: this.promotionAmount,
			tronTransaction: this.tronTransaction,
			ethereumTransaction: this.ethereumTransaction,
			donations: this.donations,
			pictures: this.pictures,
			transactionsCount: this.transactionsCount,
			donationsCount: this.donationsCount,
			commentsCount: this.commentsCount,
			upvotesCount: this.upvotesCount,
			downvotesCount: this.downvotesCount,
		} = postData);
	}

	static fromPostGRPCMessage(m: PostModel): PostGrpcModel {
		return new PostGrpcModel({
			_id: m.hasId() ? m.getId()!.getValue() : null,
			title: m.hasTitle() ? m.getTitle()!.getValue() : null,
			description: m.hasDescription() ? m.getDescription()!.getValue() : null,
			author: m.hasAuthorId() ? m.getAuthorId()!.getValue() : null,
			createdAt: m.hasCreatedAt() ? m.getCreatedAt() : null,
			updatedAt: m.hasUpdatedAt() ? m.getUpdatedAt() : null,
			isPromoted: m.hasIsPromoted() ? m.getIsPromoted()!.getValue() : null,
			promotionAmount: m.hasPromotionAmount() ? m.getPromotionAmount()!.getValue() : null,
			upvotes: m.getUpvotesList().map((upvote) => {
				return upvote.toString();
			}),
			downvotes: m.getDownvotesList().map((downvote) => {
				return downvote.toString();
			}),
			comments: m.getCommentsList().map((comment) => {
				return comment.toString();
			}),
			tags: m.getTagsList().map((tag) => {
				return tag.toString();
			}),
			tronTransaction: m.getTronTransactionList().map((data) => {
				return data.toString();
			}),
			ethereumTransaction: m.getEthereumTransactionList().map((data) => {
				return data.toString();
			}),
			donations: m.getDonationsList().map((donation) => {
				return donation.toString();
			}),
			pictures: m.getPicturesList().map((picture) => {
				return picture.toString();
			}),
			transactionsCount: m.hasTransactionsCount() ? m.getTransactionsCount()!.getValue() : null,
			donationsCount: m.hasDonationsCount() ? m.getDonationsCount()!.getValue() : null,
			commentsCount: m.hasCommentsCount() ? m.getCommentsCount()!.getValue() : null,
			upvotesCount: m.hasUpvotesCount() ? m.getUpvotesCount()!.getValue() : null,
			downvotesCount: m.hasDownvotesCount() ? m.getDownvotesCount()!.getValue() : null,
		});
	}
}

