import {PostModel} from '../protos/generated/types/posts_pb';
import {Timestamp} from 'google-protobuf/google/protobuf/timestamp_pb';
import {IPostData} from '../utility/types/base-types';

export default class PostGrpcModel {
	_id: string | null;
	title: string | null;
	description: string | null;
	author: string | null;
	createdAt: Timestamp | Date;
	updatedAt: Timestamp | Date;
	upvotes: Array<string>;
	downvotes: Array<string>;
	comments: Array<string>;
	tags: Array<string>;
	isPromoted: boolean;
	tronTransaction: Array<string>;
	ethereumTransaction: Array<string>;
	donations: Array<string>;
	pictures: Array<string>;
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
			tronTransaction: this.tronTransaction,
			ethereumTransaction: this.ethereumTransaction,
			donations: this.donations,
			pictures: this.pictures,
		} = postData);
	}

	static fromPostGRPCMessage(m: PostModel): PostGrpcModel {
		return new PostGrpcModel({
			_id: m.hasId() ? m.getId()!.getValue() : null,
			title: m.hasTitle() ? m.getTitle()!.getValue() : null,
			description: m.hasDescription() ? m.getDescription()!.getValue() : null,
			author: m.hasAuthorId() ? m.getAuthorId()!.getValue() : null,
			createdAt: m.hasCreatedAt() ? m.getCreatedAt() : Date.now(),
			updatedAt: m.hasUpdatedAt() ? m.getUpdatedAt() : Date.now(),
			isPromoted: m.hasIsPromoted() ? m.getIsPromoted()!.getValue() : false,
			upvotes: m.getUpvotesList().map((uv) => uv.toString()),
			downvotes: m.getDownvotesList().map((dv) => dv.toString()),
			comments: m.getCommentsList().map((c) => c.toString()),
			tags: m.getTagsList().map((tag) => tag.toString()),
			tronTransaction: m.getTronTransactionList().map((trxTX) => trxTX.toString()),
			ethereumTransaction: m.getEthereumTransactionList().map((ethTX) => ethTX.toString()),
			donations: m.getDonationsList().map((donation) => donation.toString()),
			pictures: m.getPicturesList().map((pic) => pic.toString()),
		});
	}
}

