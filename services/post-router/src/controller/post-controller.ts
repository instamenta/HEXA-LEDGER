/** @file Handles request to post routes. */
import {Request, Response} from 'express';
import {iRequestWithUser} from '../utility/types/base-types';
import * as POST_CLIENT from '../client/post-client';
import HttpStatusCode from '@instamenta/http-status-codes';

/**
 * Gets Posts filtered by Optional Parameters.
 *
 * Ids - List of Post Ids
 * Limit - Number for limiting the Post's count
 * Page - Number for the Post's offset
 * Filter - specific Tags or Characteristics
 * Match - Regex or text.
 * @param request
 * @param response
 * @async
 */
export async function getPosts(request: Request, response: Response) {
    try {
        const {ids} = request.body;
        await POST_CLIENT.getPosts(
            ids,
            request.query?.limit ? +request.query!.limit : undefined,
            request.query?.page ? +request.query!.page : undefined,
            request.query?.filter as string,
            request.query?.match as string
        ).then((posts) =>
            response.status(HttpStatusCode.OK)
                .json(posts)
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to get posts'})
            .end();
        console.log(error);
    }
}

/**
 * Create Post from submitted form
 * Title - Text that servers as Title for the Post
 * Description - Text explaining the post
 * AuthorId - The id of the Post's creator
 * Pictures - List of pictures belonging to post
 * IsPromoted - Flag signalling if post is promoted
 * Tags - used for filltering.
 * @param request
 * @param response
 * @async
 */
export async function createPost(request: iRequestWithUser, response: Response) {
    try {
        await POST_CLIENT.createPost(
            request.body.title,
            request.body.description,
            request.body.authorId,
            request.body.pictures,
            request.body.isPromoted,
            request.body.tags
        ).then((post) =>
            response.status(HttpStatusCode.OK)
                .json(post)
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to create post'})
            .end();
        console.log(error);
    }
}

/**
 * Used for getting specific Post.
 *
 * Id - the Id of a Post.
 * @param request
 * @param response
 * @async
 */
export async function getPostById(request: Request, response: Response) {
    try {
        await POST_CLIENT.getPostById(
            request.params.id
        ).then((post) => post
            ? response.status(HttpStatusCode.OK)
                .json(post)
                .end()
            : response.status(HttpStatusCode.NOT_FOUND)
                .json({message: 'Post not found'})
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to get post'})
            .end();
        console.log(error);
    }
}

/**
 * Used for Updating Post.
 *
 * PostId - Post id used for finding the specific post to be updated
 * title - the new or old title of the post
 * description - the new or old description of the title
 * authorId - the post's author id
 * pictures - List of pictures belonging to the Post
 * isPromoted - Flag signalling if post is promoted
 * tags - tags used for filtering
 * userId - the id of the user sending the request used for authentication.
 * @param request
 * @param response
 * @async
 */
export async function updatePost(request: iRequestWithUser, response: Response) {
    try {
        await POST_CLIENT.updatePost(
            request.params.id,
            request.body.title,
            request.body.description,
            request.body.authorId,
            request.body.pictures,
            request.body.isPromoted,
            request.body.tags,
            request.userData._id
        ).then((updatedPost) => updatedPost
            ? response.status(HttpStatusCode.OK)
                .json(updatedPost)
                .end()
            : response.status(HttpStatusCode.NOT_FOUND)
                .json({message: 'Post not found'})
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to update post'})
            .end();
        console.log(error);
    }
}

/**
 * Used for Deleting specific post.
 *
 * PostId - the id of the post that is being deleted
 * UserId - the id of the user used for authentication.
 * @param request
 * @param response
 * @async
 */
export async function deletePost(request: iRequestWithUser, response: Response) {
    try {
        await POST_CLIENT.deletePost(request.params.id, request.userData._id)
            .then((post) => post
                ? response.status(HttpStatusCode.OK)
                    .json({message: 'Post deleted successfully'})
                    .end()
                : response.status(HttpStatusCode.NOT_FOUND)
                    .json({message: 'Post not found'})
                    .end()
            );
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to delete post'})
            .end();
        console.log(error);
    }
}

/**
 * Used for getting the Post's comments.
 *
 * PostId - the id of the post
 * Page - Number for the Post's offset
 * Limit -Number for limiting the Post's count.
 * @param request
 * @param response
 * @async
 */
export async function getPostComments(request: Request, response: Response) {
    try {
        await POST_CLIENT.getPostComments(
            request.params.postId,
            request.query?.page ? +request.query!.page : undefined,
            request.query?.limit ? +request.query!.limit : undefined
        ).then((comments) =>
            response.status(HttpStatusCode.OK)
                .json(comments)
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to get post comments'})
            .end();
        console.log(error);
    }
}

/**
 * Used for Creating Comment on a Post.
 *
 * UserId - the id of the user used for authentication and is being attached as Comment's author
 * PostId - the id of the post that is being commented
 * Content - Text serving as Comment's content.
 * @param request
 * @param response
 * @async
 */
export async function createComment(request: iRequestWithUser, response: Response) {
    try {
        await POST_CLIENT.createComment(
            request.userData._id,
            request.params.postId,
            request.body.content
        ).then((comment) =>
            response.status(HttpStatusCode.OK)
                .json(comment)
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to create comment'})
            .end();
        console.log(error);
    }
}

/**
 * Used for Updating Comment.
 *
 * UserId - the id of the user used for authentication
 * PostId - the id of the post
 * Content - the new Content of the comment
 * CommentId - the id of the Comment.
 * @param request
 * @param response
 * @async
 */
export async function updateComment(request: iRequestWithUser, response: Response) {
    try {
        await POST_CLIENT.updateComment(
            request.userData._id,
            request.params.postId,
            request.body.content,
            request.params.commentId,
        ).then((comment) => comment
            ? response.status(HttpStatusCode.OK)
                .json(comment)
                .end()
            : response.status(HttpStatusCode.NOT_FOUND)
                .json({message: 'Comment not found'})
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to update comment'})
            .end();
        console.log(error);
    }
}

/**
 * Used for Deleting Comment.
 *
 * CommentId - the id of the comment being deleted
 * UserId - the id of the user used for authentication.
 * @param request
 * @param response
 * @async
 */
export async function deleteComment(request: iRequestWithUser, response: Response) {
    try {
        await POST_CLIENT.deleteComment(
            request.params.commentId,
            request.userData._id
        ).then((comment) => comment
            ? response.status(HttpStatusCode.OK)
                .json({message: 'Comment deleted successfully'})
                .end()
            : response.status(HttpStatusCode.NOT_FOUND)
                .json({message: 'Comment not found'})
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to delete comment'})
            .end();
        console.log(error);
    }
}


/**
 * Used for Upvoting Post.
 *
 * Post - the id of the Post targeted
 * UsedId - the id of the user used for authentication.
 * @param request
 * @param response
 * @async
 */
export async function upvotePost(request: iRequestWithUser, response: Response) {
    try {
        await POST_CLIENT.upvotePost(
            request.params.id,
            request.userData._id
        ).then((post) => post
            ? response.status(HttpStatusCode.OK)
                .json(post)
                .end()
            : response.status(HttpStatusCode.NOT_FOUND)
                .json({message: 'Post not found'})
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to upvote post'})
            .end();
        console.log(error);
    }
}

/**
 * Used for Downvoting Post.
 *
 * PostId - the id of the Post used for targeting
 * UsedId - the id of the user used for authentication.
 * @param request
 * @param response
 * @async
 */
export async function downvotePost(request: iRequestWithUser, response: Response) {
    try {
        await POST_CLIENT.downvotePost(
            request.params.id,
            request.userData._id
        ).then((post) => post
            ? response.status(HttpStatusCode.OK)
                .json(post)
                .end()
            : response.status(HttpStatusCode.NOT_FOUND)
                .json({message: 'Post not found'})
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to downvote post'})
            .end();
        console.log(error);
    }
}

/**
 * Used for Upvoting Comment.
 *
 * CommentId - the id of the Comment used for targeting
 * UsedId - the id of the user used for authentication.
 * @param request
 * @param response
 * @async
 */
export async function upvoteComment(request: iRequestWithUser, response: Response) {
    try {
        await POST_CLIENT.upvoteComment(
            request.params.commentId,
            request.userData._id
        ).then((post) => post
            ? response.status(HttpStatusCode.OK)
                .json(post)
                .end()
            : response.status(HttpStatusCode.NOT_FOUND)
                .json({message: 'Post not found'})
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to upvote post'})
            .end();
        console.log(error);
    }
}


/**
 * Used for Downvoting Comment.
 *
 * CommentId - the id of the Comment used for targeting
 * UsedId - the id of the user used for authentication.
 * @param request
 * @param response
 * @async
 */
export async function downvoteComment(request: iRequestWithUser, response: Response) {
    try {
        await POST_CLIENT.downvoteComment(
            request.params.commentId,
            request.userData._id
        ).then((post) => post
            ? response.status(HttpStatusCode.OK)
                .json(post)
                .end()
            : response
                .status(HttpStatusCode.NOT_FOUND)
                .json({message: 'Post not found'})
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to downvote post'})
            .end();
        console.log(error);
    }
}

/**
 * Gets Posts of specific User.
 *
 * UserId - id of the user being targeted
 * Limit - Number for limiting the Post's count
 * Page - Number for the Post's offset
 * Filter - specific Tags or Characteristics
 * Match - Regex or text.
 * @param request
 * @param response
 * @async
 */
export async function getUserPosts(request: Request, response: Response) {
    try {
        await POST_CLIENT.getUserPosts(
            request.params.userId,
            request.query?.limit ? +request.query!.limit : undefined,
            request.query?.page ? +request.query!.page : undefined,
            request.query.filter as string,
            request.query.match as string,
        ).then((posts) =>
            response.status(HttpStatusCode.OK)
                .json(posts)
                .end());
    } catch (error) {
        response.status(HttpStatusCode.INTERNAL_SERVER_ERROR)
            .json({message: 'Failed to get user posts'})
            .end();
        console.log(error);
    }
}