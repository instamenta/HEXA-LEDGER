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
        const m = new PostModel();
        const stringId: string = p._id.toString();
        const authorId: string = p.author.toString();
        m.setId(new StringValue().setValue(stringId));
        m.setTitle(new StringValue().setValue(p.title));
        m.setDescription(new StringValue().setValue(p.description));
        m.setAuthorId(new StringValue().setValue(authorId));
        m.setIsPromoted(new BoolValue().setValue(p.isPromoted));
        m.setUpvotesList(p.upvotes.map((uv) => new StringValue().setValue(uv.toString())));
        m.setDownvotesList(p.downvotes.map((dv) => new StringValue().setValue(dv.toString())));
        m.setPicturesList(p.pictures.map((pic) => new StringValue().setValue(pic)));
        m.setTagsList(p.tags.map((tag) => new StringValue().setValue(tag)));
        return m;
    }

    /**
     * @param c
     * @returns
     */
    public static convertCommentModel(
        c: IComment,
    ): ICommentModel {
        const m = new CommentModel();
        m.setId(new StringValue().setValue(c._id.toString()));
        m.setAuthorId(new StringValue().setValue(c.authorId.toString()));
        m.setPostId(new StringValue().setValue(c.postId.toString()));
        m.wasEdited(new BoolValue().setValue(c.wasEdited));
        m.setUpvotesList(c.upvotes.map((uv) => new StringValue().setValue(uv.toString())));
        m.setDownvotesList(c.upvotes.map((dv) => new StringValue().setValue(dv.toString())));
        return m;
    }
}

export default GrpcTools;