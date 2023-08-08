/** @file Tools for converting from and to protobuf. */
import {PostModel as IPostModel, CommentModel as ICommentModel} from '../protos/generated/types/posts_pb';
import {ServerUnaryCall} from '@grpc/grpc-js';
import {BoolValue, StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import {IExtractedPostModel, IPost, IComment} from './types/base-types';

const {PostModel, CommentModel} = require('../protos/generated/posts_pb');

class GrpcTools {
    /**
     * @param call
     * @returns
     */
    public static extractPostModel(
        call: ServerUnaryCall<any, IPostModel>,
    ): IExtractedPostModel | any {
        const p = call.request;
        return {
            _id: p.hasId() ? p.getId()!.getValue() : null,

            followers: p.getFollowersList().map((f: StringValue) => f.getValue()).toString(),
        };
    }

    /**
     * @param p
     * @returns
     */
    public static convertPostModel(
        p: IPost,
    ): IPostModel {
        return new PostModel()
            .setId(new StringValue().setValue(p._id.toString()))
            .setTitle(new StringValue().setValue(p.title))
            .setDescription(new StringValue().setValue(p.description))
            .setAuthorId(new StringValue().setValue(p.author.toString()))
            .setIsPromoted(new BoolValue().setValue(p.isPromoted))
            .setUpvotesList(p.upvotes.map((uv) => new StringValue().setValue(uv.toString())))
            .setDownvotesList(p.downvotes.map((dv) => new StringValue().setValue(dv.toString())))
            .setPicturesList(p.pictures.map((pic) => new StringValue().setValue(pic)))
            .setTagsList(p.tags.map((tag) => new StringValue().setValue(tag)))
            .setCommentsList(p.comments.map((com) => new StringValue().setValue(com.toString())));
    }

    /**
     * @param c
     * @returns
     */
    public static convertCommentModel(
        c: IComment,
    ): ICommentModel {
        return new CommentModel()
            .setId(new StringValue().setValue(c._id.toString()))
            .setAuthorId(new StringValue().setValue(c.authorId.toString()))
            .setPostId(new StringValue().setValue(c.postId.toString()))
            .setWasEdited(new BoolValue().setValue(c.wasEdited))
            .setContent(new StringValue().setValue(c.content.toString()))
            .setUpvotesList(c.upvotes.map((uv) => new StringValue().setValue(uv.toString())))
            .setDownvotesList(c.upvotes.map((dv) => new StringValue().setValue(dv.toString())));
    }
}

export default GrpcTools;