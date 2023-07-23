import {Request, Response} from 'express';
import {iRequestWithUser} from '../utility/types/base-types';
import * as POST_CLIENT from '../client/post-client';

/**
 * @param request
 * @param response
 */
export async function getPosts(request: Request, response: Response) {
    try {
        const {ids} = request.body
            , page: number = Number.parseInt(request.query.page as string)
            , limit: number = Number.parseInt(request.query.limit as string)
            , filter = request.query.filter as string
            , match = request.query.match as string;
        const posts = await POST_CLIENT.getPosts(ids, limit, page, filter, match);
        response.json(posts).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to get posts'}).end();
        console.log(error);
    }
}

/**
 * @param request
 * @param response
 */
export async function createPost(request: iRequestWithUser, response: Response) {
    try {
        const {
            title,
            description,
            authorId,
            pictures,
            isPromoted,
            tags
        } = request.body;
        const post = await POST_CLIENT.createPost(
            title,
            description,
            authorId,
            pictures,
            isPromoted,
            tags
        );
        response.status(201).json(post);
    } catch (error) {
        response.status(500).json({message: 'Failed to create post'}).end();
        console.log(error);
    }
}

/**
 * @param request
 * @param response
 */
export async function getPostById(request: Request, response: Response) {
    try {
        const postId = request.params.id
            , post = await POST_CLIENT.getPostById(postId);
        post ? response.json(post).end()
            : response.status(404).json({message: 'Post not found'}).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to get post'}).end();
        console.log(error);
    }
}

/**
 * @param request
 * @param response
 */
export async function updatePost(request: iRequestWithUser, response: Response) {
    try {
        const postId = request.params.id;
        const {
            title,
            description,
            authorId,
            pictures,
            isPromoted,
            tags
        } = request.body;
        const updatedPost = await POST_CLIENT.updatePost(
            postId,
            title,
            description,
            authorId,
            pictures,
            isPromoted,
            tags,
        );
        if (updatedPost) {
            response.json(updatedPost).end();
        } else {
            response.status(404).json({message: 'Post not found'}).end();
        }
    } catch (error) {
        response.status(500).json({message: 'Failed to update post'}).end();
        console.log(error);
    }
}

/**
 * @param request
 * @param response
 */
export async function deletePost(request: iRequestWithUser, response: Response) {
    try {
        const postId = request.params.id;
        const post = await POST_CLIENT.deletePost(postId);
        post ? response.json({message: 'Post deleted successfully'}).end()
            : response.status(404).json({message: 'Post not found'}).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to delete post'}).end();
        console.log(error);
    }
}

/**
 * @param request
 * @param response
 */
export async function getPostComments(request: Request, response: Response) {
    try {
        const {postId} = request.params
            , page: number = Number.parseInt(request.query.page as string)
            , limit: number = Number.parseInt(request.query.limit as string)
            , comments = await POST_CLIENT.getPostComments(postId, page, limit);
        response.json(comments).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to get post comments'}).end();
        console.log(error);
    }
}

/**
 * @param request
 * @param response
 */
export async function createComment(request: iRequestWithUser, response: Response) {
    try {
        const postId = request.params.postId
            , {content} = request.body
            , {_id} = request.userData;
        const comment = await POST_CLIENT.createComment(
            _id,
            postId,
            content
        );
        response.status(201).json(comment).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to create comment'}).end();
        console.log(error);
    }
}

/**
 *
 * @param request
 * @param response
 */
export async function updateComment(request: iRequestWithUser, response: Response) {
    try {
        const {commentId, postId} = request.params
            , {content} = request.body
            , {_id} = request.userData;
        const comment = await POST_CLIENT.updateComment(
            _id,
            postId,
            content,
            commentId
        );
        comment
            ? response.json(comment).end()
            : response.status(404).json({message: 'Comment not found'}).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to update comment'}).end();
        console.log(error);
    }
}

/**
 * @param request
 * @param response
 */
export async function deleteComment(request: iRequestWithUser, response: Response) {
    try {
        const {commentId} = request.params;
        const com = await POST_CLIENT.deleteComment(commentId);
        com ? response.json({message: 'Comment deleted successfully'}).end()
            : response.status(404).json({message: 'Comment not found'}).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to delete comment'}).end();
        console.log(error);
    }
}


/**
 *
 * @param request
 * @param response
 */
export async function upvotePost(request: iRequestWithUser, response: Response) {
    try {
        const postId = request.params.id
            , {_id} = request.userData
            , post = await POST_CLIENT.upvotePost(postId, _id);
        post ? response.json(post).end()
            : response.status(404).json({message: 'Post not found'}).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to upvote post'}).end();
        console.log(error);
    }
}

/**
 *
 * @param request
 * @param response
 */
export async function downvotePost(request: iRequestWithUser, response: Response) {
    try {
        const postId = request.params.id
            , {_id} = request.userData
            , post = await POST_CLIENT.downvotePost(postId, _id);
        post ? response.json(post).end()
            : response.status(404).json({message: 'Post not found'}).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to downvote post'}).end();
        console.log(error);
    }
}

/**
 * @param request
 * @param response
 */
export async function upvoteComment(request: iRequestWithUser, response: Response) {
    try {
        const {commentId} = request.params
            , {_id} = request.userData;
        const post = await POST_CLIENT.upvoteComment(commentId, _id);
        post ? response.json(post).end()
            : response.status(404).json({message: 'Post not found'}).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to upvote post'}).end();
        console.log(error);
    }
}

/**
 * @param request
 * @param response
 */
export async function downvoteComment(request: iRequestWithUser, response: Response) {
    try {
        const {commentId} = request.params
            , {_id} = request.userData;
        const post = await POST_CLIENT.downvoteComment(commentId, _id);
        post ? response.json(post).end()
            : response.status(404).json({message: 'Post not found'}).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to downvote post'}).end();
        console.log(error);
    }
}

/**
 * @param request
 * @param response
 */
export async function getUserPosts(request: Request, response: Response) {
    try {
        const {userId} = request.params
            , page: number = Number.parseInt(request.query.page as string)
            , limit: number = Number.parseInt(request.query.limit as string)
            , filter = request.query.filter as string
            , match = request.query.match as string;
        const posts = await POST_CLIENT.getUserPosts(
            userId,
            limit,
            page,
            filter,
            match,
        );
        response.json(posts).end();
    } catch (error) {
        response.status(500).json({message: 'Failed to get user posts'}).end();
        console.log(error);
    }
}