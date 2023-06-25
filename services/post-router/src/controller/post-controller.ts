import { Request, Response } from 'express';
import { iRequestWithUser } from '../utility/types/basic-types';
import * as POST_CLIENT from '../client/post-client';

export {
	getPosts,
	createPost,
	getPostById,
	updatePost,
	deletePost,
	getPostComments,
	createComment,
	updateComment,
	deleteComment,
	upvotePost,
	downvotePost,
};

/**
 *
 * @param request
 * @param response
 */
async function getPosts(request: Request, response: Response) {
	try {
		const posts = await POST_CLIENT.getPosts();
		response.json(posts).end();
	} catch {
		response.status(500).json({ message: 'Failed to get posts' }).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function createPost(request: iRequestWithUser, response: Response) {
	try {
		const { title, description } = request.body;
		const post = await POST_CLIENT.createPost(title, description);
		response.status(201).json(post);
	} catch {
		response.status(500).json({ message: 'Failed to create post' }).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function getPostById(request: Request, response: Response) {
	try {
		const postId = request.params.id;
		const post = await POST_CLIENT.getPostById(postId);
		if (post) {
			response.json(post).end();
		} else {
			response.status(404).json({ message: 'Post not found' }).end();
		}
	} catch {
		response.status(500).json({ message: 'Failed to get post' }).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function updatePost(request: iRequestWithUser, response: Response) {
	try {
		const postId = request.params.id;
		const { title, description } = request.body;
		const updatedPost = await POST_CLIENT.updatePost(postId, title, description);
		if (updatedPost) {
			response.json(updatedPost).end();
		} else {
			response.status(404).json({ message: 'Post not found' }).end();
		}
	} catch {
		response.status(500).json({ message: 'Failed to update post' }).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function deletePost(request: iRequestWithUser, response: Response) {
	try {
		const postId = request.params.id;
		const deletedPost = await POST_CLIENT.deletePost(postId);
		if (deletedPost) {
			response.json({ message: 'Post deleted successfully' }).end();
		} else {
			response.status(404).json({ message: 'Post not found' }).end();
		}
	} catch {
		response.status(500).json({ message: 'Failed to delete post' }).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function getPostComments(request: Request, response: Response) {
	try {
		const postId = request.params.postId;
		const comments = await POST_CLIENT.getPostComments(postId);
		response.json(comments).end();
	} catch {
		response.status(500).json({ message: 'Failed to get post comments' }).end();
	}
}

/**
 * @param request
 * @param response
 */
async function createComment(request: iRequestWithUser, response: Response) {
	try {
		const postId = request.params.postId;
		const { content } = request.body;
		const comment = await POST_CLIENT.createComment(postId, content);
		response.status(201).json(comment).end();
	} catch {
		response.status(500).json({ message: 'Failed to create comment' }).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function updateComment(request: iRequestWithUser, response: Response) {
	try {
		const commentId = request.params.commentId;
		const { content } = request.body;
		const updatedComment = await POST_CLIENT.updateComment(commentId, content);
		if (updatedComment) {
			response.json(updatedComment).end();
		} else {
			response.status(404).json({ message: 'Comment not found' }).end();
		}
	} catch {
		response.status(500).json({ message: 'Failed to update comment' }).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function deleteComment(request: iRequestWithUser, response: Response) {
	try {
		const commentId = request.params.commentId;
		const deletedComment = await POST_CLIENT.deleteComment(commentId);
		if (deletedComment) {
			response.json({ message: 'Comment deleted successfully' }).end();
		} else {
			response.status(404).json({ message: 'Comment not found' }).end();
		}
	} catch {
		response.status(500).json({ message: 'Failed to delete comment' }).end();
	}
}



/**
 *
 * @param request
 * @param response
 */
async function upvotePost(request: iRequestWithUser, response: Response) {
	try {
		const postId = request.params.id;
		const upvotedPost = await POST_CLIENT.upvotePost(postId);
		if (upvotedPost) {
			response.json(upvotedPost).end();
		} else {
			response.status(404).json({ message: 'Post not found' }).end();
		}
	} catch {
		response.status(500).json({ message: 'Failed to upvote post' }).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function downvotePost(request: iRequestWithUser, response: Response) {
	try {
		const postId = request.params.id;
		const downvotedPost = await POST_CLIENT.downvotePost(postId);
		if (downvotedPost) {
			response.json(downvotedPost).end();
		} else {
			response.status(404).json({ message: 'Post not found' }).end();
		}
	} catch {
		response.status(500).json({ message: 'Failed to downvote post' }).end();
	}
}
/**
 *
 * @param request
 * @param response
 */
async function upvoteComment(request: iRequestWithUser, response: Response) {
	try {
		const CommentId = request.params.id;
		const upvotedPost = await POST_CLIENT.upvoteComment(CommentId);
		if (upvotedPost) {
			response.json(upvotedPost).end();
		} else {
			response.status(404).json({ message: 'Post not found' }).end();
		}
	} catch {
		response.status(500).json({ message: 'Failed to upvote post' }).end();
	}
}

/**
 *
 * @param request
 * @param response
 */
async function downvoteComment(request: iRequestWithUser, response: Response) {
	try {
		const CommentId = request.params.id;
		const downvotedPost = await POST_CLIENT.downvoteComment(CommentId);
		if (downvotedPost) {
			response.json(downvotedPost).end();
		} else {
			response.status(404).json({ message: 'Post not found' }).end();
		}
	} catch {
		response.status(500).json({ message: 'Failed to downvote post' }).end();
	}
}

/**
 * @param request
 * @param response
 */
async function getUserPosts(request: Request, response: Response) {
	try {
		const userId = request.params.userId;
		const posts = await POST_CLIENT.getUserPosts(userId);
		response.json(posts).end();
	} catch {
		response.status(500).json({ message: 'Failed to get user posts' }).end();
	}
}