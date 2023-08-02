"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPosts = exports.downvoteComment = exports.upvoteComment = exports.downvotePost = exports.upvotePost = exports.deleteComment = exports.updateComment = exports.createComment = exports.getPostComments = exports.deletePost = exports.updatePost = exports.getPostById = exports.createPost = exports.getPosts = void 0;
const POST_CLIENT = __importStar(require("../client/post-client"));
/**
 * @param request
 * @param response
 */
async function getPosts(request, response) {
    try {
        const { ids } = request.body, filter = request.query?.filter, match = request.query?.match, page = request.query?.page ? +request.query.page : undefined, limit = request.query?.limit ? +request.query.limit : undefined;
        const posts = await POST_CLIENT.getPosts(ids, limit, page, filter, match);
        response.json(posts).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to get posts' }).end();
        console.log(error);
    }
}
exports.getPosts = getPosts;
/**
 * @param request
 * @param response
 */
async function createPost(request, response) {
    try {
        const { title, description, authorId, pictures, isPromoted, tags } = request.body;
        const post = await POST_CLIENT.createPost(title, description, authorId, pictures, isPromoted, tags);
        response.status(201).json(post);
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to create post' }).end();
        console.log(error);
    }
}
exports.createPost = createPost;
/**
 * @param request
 * @param response
 */
async function getPostById(request, response) {
    try {
        const postId = request.params.id, post = await POST_CLIENT.getPostById(postId);
        post ? response.json(post).end()
            : response.status(404).json({ message: 'Post not found' }).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to get post' }).end();
        console.log(error);
    }
}
exports.getPostById = getPostById;
/**
 * @param request
 * @param response
 */
async function updatePost(request, response) {
    try {
        const postId = request.params.id;
        const authId = request.userData._id;
        const { title, description, authorId, pictures, isPromoted, tags } = request.body;
        const updatedPost = await POST_CLIENT.updatePost(postId, title, description, authorId, pictures, isPromoted, tags, authId);
        if (updatedPost) {
            response.json(updatedPost).end();
        }
        else {
            response.status(404).json({ message: 'Post not found' }).end();
        }
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to update post' }).end();
        console.log(error);
    }
}
exports.updatePost = updatePost;
/**
 * @param request
 * @param response
 */
async function deletePost(request, response) {
    try {
        const postId = request.params.id, authId = request.userData._id;
        const post = await POST_CLIENT.deletePost(postId, authId);
        post ? response.json({ message: 'Post deleted successfully' }).end()
            : response.status(404).json({ message: 'Post not found' }).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to delete post' }).end();
        console.log(error);
    }
}
exports.deletePost = deletePost;
/**
 * @param request
 * @param response
 */
async function getPostComments(request, response) {
    try {
        const { postId } = request.params, page = request.query?.page ? +request.query.page : undefined, limit = request.query?.limit ? +request.query.limit : undefined, comments = await POST_CLIENT.getPostComments(postId, page, limit);
        response.json(comments).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to get post comments' }).end();
        console.log(error);
    }
}
exports.getPostComments = getPostComments;
/**
 * @param request
 * @param response
 */
async function createComment(request, response) {
    try {
        const postId = request.params.postId, { content } = request.body, { _id } = request.userData;
        const comment = await POST_CLIENT.createComment(_id, postId, content);
        response.status(201).json(comment).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to create comment' }).end();
        console.log(error);
    }
}
exports.createComment = createComment;
/**
 * @param request
 * @param response
 */
async function updateComment(request, response) {
    try {
        const { commentId, postId } = request.params, { content } = request.body, { _id } = request.userData;
        const comment = await POST_CLIENT.updateComment(_id, postId, content, commentId);
        comment
            ? response.json(comment).end()
            : response.status(404).json({ message: 'Comment not found' }).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to update comment' }).end();
        console.log(error);
    }
}
exports.updateComment = updateComment;
/**
 * @param request
 * @param response
 */
async function deleteComment(request, response) {
    try {
        const { commentId } = request.params, authId = request.userData._id;
        const com = await POST_CLIENT.deleteComment(commentId, authId);
        com ? response.json({ message: 'Comment deleted successfully' }).end()
            : response.status(404).json({ message: 'Comment not found' }).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to delete comment' }).end();
        console.log(error);
    }
}
exports.deleteComment = deleteComment;
/**
 * @param request
 * @param response
 */
async function upvotePost(request, response) {
    try {
        const postId = request.params.id, { _id } = request.userData, post = await POST_CLIENT.upvotePost(postId, _id);
        post ? response.json(post).end()
            : response.status(404).json({ message: 'Post not found' }).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to upvote post' }).end();
        console.log(error);
    }
}
exports.upvotePost = upvotePost;
/**
 * @param request
 * @param response
 */
async function downvotePost(request, response) {
    try {
        const postId = request.params.id, { _id } = request.userData, post = await POST_CLIENT.downvotePost(postId, _id);
        post ? response.json(post).end()
            : response.status(404).json({ message: 'Post not found' }).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to downvote post' }).end();
        console.log(error);
    }
}
exports.downvotePost = downvotePost;
/**
 * @param request
 * @param response
 */
async function upvoteComment(request, response) {
    try {
        const { commentId } = request.params, { _id } = request.userData;
        const post = await POST_CLIENT.upvoteComment(commentId, _id);
        post ? response.json(post).end()
            : response.status(404).json({ message: 'Post not found' }).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to upvote post' }).end();
        console.log(error);
    }
}
exports.upvoteComment = upvoteComment;
/**
 * @param request
 * @param response
 */
async function downvoteComment(request, response) {
    try {
        const { commentId } = request.params, { _id } = request.userData;
        const post = await POST_CLIENT.downvoteComment(commentId, _id);
        post ? response.json(post).end()
            : response.status(404).json({ message: 'Post not found' }).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to downvote post' }).end();
        console.log(error);
    }
}
exports.downvoteComment = downvoteComment;
/**
 * @param request
 * @param response
 */
async function getUserPosts(request, response) {
    try {
        const { userId } = request.params, page = request.query?.page ? +request.query.page : undefined, limit = request.query?.limit ? +request.query.limit : undefined, filter = request.query.filter, match = request.query.match;
        const posts = await POST_CLIENT.getUserPosts(userId, limit, page, filter, match);
        response.json(posts).end();
    }
    catch (error) {
        response.status(500).json({ message: 'Failed to get user posts' }).end();
        console.log(error);
    }
}
exports.getUserPosts = getUserPosts;
