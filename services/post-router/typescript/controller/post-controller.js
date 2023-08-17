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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const POST_CLIENT = __importStar(require("../client/post-client"));
const http_status_codes_1 = __importDefault(require("@instamenta/http-status-codes"));
class PostController {
    /**
     *! Gets Posts filtered by Optional Parameters.
     *
     * * Ids - List of Post Ids
     * * Limit - Number for limiting the Post's count
     * * Page - Number for the Post's offset
     * * Filter - specific Tags or Characteristics
     * * Match - Regex or text.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts', {
     *!   method: 'POST',
     *!   body: JSON.stringify({ ids: ['id1', 'id2'], ... }),
     *!   headers: {
     *!     'Content-Type': 'application/json'
     *!   }
     *! })
     */
    getPosts(request, response) {
        try {
            const { ids } = request.body;
            POST_CLIENT.getPosts(ids, request.query?.limit ? +request.query.limit : undefined, request.query?.page ? +request.query.page : undefined, request.query?.filter, request.query?.match).then((posts) => response.status(http_status_codes_1.default.OK)
                .json(posts)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to get posts' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Create Post from submitted form.
     *
     * * Title - Text that servers as Title for the Post
     * * Description - Text explaining the post
     * * AuthorId - The id of the Post's creator
     * * Pictures - List of pictures belonging to post
     * * IsPromoted - Flag signalling if post is promoted
     * * Tags - used for filltering.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/create', {
     *!   method: 'POST',
     *!   body: JSON.stringify({
     *!     title: 'My Post',
     *!     description: 'This is my post.',
     *!     authorId: 'author123',
     *!     pictures: ['pic1.jpg', 'pic2.jpg'],
     *!     isPromoted: true,
     *!     tags: ['tag1', 'tag2']
     *! }),
     */
    createPost(request, response) {
        try {
            POST_CLIENT.createPost(request.body.title, request.body.description, request.body.authorId, request.body.pictures, request.body.isPromoted, request.body.tags).then((post) => response.status(http_status_codes_1.default.OK)
                .json(post)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to create post' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for getting specific Post.
     *
     * * Id - the Id of a Post.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/upvote/:id', {
     *!   method: 'POST',
     *!   headers: {
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    getPostById(request, response) {
        try {
            POST_CLIENT.getPostById(request.params.id).then((post) => post
                ? response.status(http_status_codes_1.default.OK)
                    .json(post)
                    .end()
                : response.status(http_status_codes_1.default.NOT_FOUND)
                    .json({ message: 'Post not found' })
                    .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to get post' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for Updating Post.
     *
     * * PostId - Post id used for finding the specific post to be updated
     * * title - the new or old title of the post
     * * description - the new or old description of the title
     * * authorId - the post's author id
     * * pictures - List of pictures belonging to the Post
     * * isPromoted - Flag signalling if post is promoted
     * * tags - tags used for filtering
     * * userId - the id of the user sending the request used for authentication.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/upvote/comment/:commentId', {
     *!   method: 'POST',
     *!   headers: {
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     *!   .then(response => response.json())
     *!   .then(data => console.log(data))
     *!   .catch(error => console.error(error));
     */
    updatePost(request, response) {
        try {
            POST_CLIENT.updatePost(request.params.id, request.body.title, request.body.description, request.body.authorId, request.body.pictures, request.body.isPromoted, request.body.tags, request.userData._id).then((updatedPost) => updatedPost
                ? response.status(http_status_codes_1.default.OK)
                    .json(updatedPost)
                    .end()
                : response.status(http_status_codes_1.default.NOT_FOUND)
                    .json({ message: 'Post not found' })
                    .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to update post' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for Deleting specific post.
     *
     * * PostId - the id of the post that is being deleted
     * * UserId - the id of the user used for authentication.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/delete/:postId', {
     *!   method: 'DELETE',
     *!   headers: {
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    deletePost(request, response) {
        try {
            POST_CLIENT.deletePost(request.params.id, request.userData._id)
                .then((post) => post
                ? response.status(http_status_codes_1.default.OK)
                    .json({ message: 'Post deleted successfully' })
                    .end()
                : response.status(http_status_codes_1.default.NOT_FOUND)
                    .json({ message: 'Post not found' })
                    .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to delete post' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for getting the Post's comments.
     *
     * * PostId - the id of the post
     * * Page - Number for the Post's offset
     * * Limit -Number for limiting the Post's count.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/comments/:postId?page=1&limit=10', {
     *!   method: 'GET',
     *!   headers: {
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    getPostComments(request, response) {
        try {
            POST_CLIENT.getPostComments(request.params.postId, request.query?.page ? +request.query.page : undefined, request.query?.limit ? +request.query.limit : undefined).then((comments) => response.status(http_status_codes_1.default.OK)
                .json(comments)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to get post comments' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for Creating Comment on a Post.
     *
     * * UserId - the id of the user used for authentication and is being attached as Comment's author
     * * PostId - the id of the post that is being commented
     * * Content - Text serving as Comment's content.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/comment/:postId', {
     *!   method: 'POST',
     *!   body: JSON.stringify({
     *!     content: 'This is a comment.'
     *!   }),
     *!   headers: {
     *!     'Content-Type': 'application/json',
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    createComment(request, response) {
        try {
            POST_CLIENT.createComment(request.userData._id, request.params.postId, request.body.content).then((comment) => response.status(http_status_codes_1.default.OK)
                .json(comment)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to create comment' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for Updating Comment.
     *
     * * UserId - the id of the user used for authentication
     * * PostId - the id of the post
     * * Content - the new Content of the comment
     * * CommentId - the id of the Comment.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/comment/:postId/:commentId', {
     *!   method: 'PUT',
     *!   body: JSON.stringify({
     *!     content: 'Updated comment content.'
     *!   }),
     *!   headers: {
     *!     'Content-Type': 'application/json',
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    updateComment(request, response) {
        try {
            POST_CLIENT.updateComment(request.userData._id, request.params.postId, request.body.content, request.params.commentId).then((comment) => comment
                ? response.status(http_status_codes_1.default.OK)
                    .json(comment)
                    .end()
                : response.status(http_status_codes_1.default.NOT_FOUND)
                    .json({ message: 'Comment not found' })
                    .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to update comment' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for Deleting Comment.
     *
     * * CommentId - the id of the comment being deleted
     * * UserId - the id of the user used for authentication.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/comment/:commentId', {
     *!   method: 'DELETE',
     *!   headers: {
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    deleteComment(request, response) {
        try {
            POST_CLIENT.deleteComment(request.params.commentId, request.userData._id).then((comment) => comment
                ? response.status(http_status_codes_1.default.OK)
                    .json({ message: 'Comment deleted successfully' })
                    .end()
                : response.status(http_status_codes_1.default.NOT_FOUND)
                    .json({ message: 'Comment not found' })
                    .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to delete comment' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for Up-voting Post.
     *
     * * Post - the id of the Post targeted
     * * UsedId - the id of the user used for authentication.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/upvote/:id', {
     *!   method: 'POST',
     *!   headers: {
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    upvotePost(request, response) {
        try {
            POST_CLIENT.upvotePost(request.params.id, request.userData._id).then((post) => post
                ? response.status(http_status_codes_1.default.OK)
                    .json(post)
                    .end()
                : response.status(http_status_codes_1.default.NOT_FOUND)
                    .json({ message: 'Post not found' })
                    .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to upvote post' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for Down-voting Post.
     *
     * * PostId - the id of the Post used for targeting
     * * UsedId - the id of the user used for authentication.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/downvote/:id', {
     *!   method: 'POST',
     *!   headers: {
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    downvotePost(request, response) {
        try {
            POST_CLIENT.downvotePost(request.params.id, request.userData._id).then((post) => post
                ? response.status(http_status_codes_1.default.OK)
                    .json(post)
                    .end()
                : response.status(http_status_codes_1.default.NOT_FOUND)
                    .json({ message: 'Post not found' })
                    .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to downvote post' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for Up-voting Comment.
     *
     * * CommentId - the id of the Comment used for targeting
     * * UsedId - the id of the user used for authentication.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/upvote/comment/:commentId', {
     *!   method: 'POST',
     *!   headers: {
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    upvoteComment(request, response) {
        try {
            POST_CLIENT.upvoteComment(request.params?.commentId, request.userData?._id).then((post) => post
                ? response.status(http_status_codes_1.default.OK)
                    .json(post)
                    .end()
                : response.status(http_status_codes_1.default.NOT_FOUND)
                    .json({ message: 'Post not found' })
                    .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to upvote post' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Used for Down-voting Comment.
     *
     * * CommentId - the id of the Comment used for targeting
     * * UsedId - the id of the user used for authentication.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/downvote/comment/:commentId', {
     *!   method: 'POST',
     *!   headers: {
     *!     'Authorization': 'Bearer YOUR_ACCESS_TOKEN'
     *!   }
     *! })
     */
    downvoteComment(request, response) {
        try {
            POST_CLIENT.downvoteComment(request.params.commentId, request.userData._id).then((post) => post
                ? response.status(http_status_codes_1.default.OK)
                    .json(post)
                    .end()
                : response
                    .status(http_status_codes_1.default.NOT_FOUND)
                    .json({ message: 'Post not found' })
                    .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to downvote post' })
                .end();
            console.log(error);
        }
    }
    /**
     *! Gets Posts of specific User.
     *
     * * UserId - id of the user being targeted
     * * Limit - Number for limiting the Post's count
     * * Page - Number for the Post's offset
     * * Filter - specific Tags or Characteristics
     * * Match - Regex or text.
     *
     * @param request
     * @param response
     * @example
     *! fetch('/posts/user/:userId', {
     *!   method: 'GET',
     *! })
     */
    getUserPosts(request, response) {
        try {
            POST_CLIENT.getUserPosts(request.params.userId, request.query?.limit ? +request.query.limit : undefined, request.query?.page ? +request.query.page : undefined, request.query.filter, request.query.match).then((posts) => response.status(http_status_codes_1.default.OK)
                .json(posts)
                .end());
        }
        catch (error) {
            response.status(http_status_codes_1.default.INTERNAL_SERVER_ERROR)
                .json({ message: 'Failed to get user posts' })
                .end();
            console.log(error);
        }
    }
}
exports.default = PostController;
