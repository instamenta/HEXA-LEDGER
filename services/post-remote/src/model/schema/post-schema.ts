/** @file Mongoose schema for post. */
import mongoose, {Schema} from 'mongoose';
import {IPost} from '../../utility/types/base-typesd';

const postSchema: Schema<IPost> = new Schema<IPost>({
   title: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 40,
   },
   description: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 400,
   },
   author: {
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
   upvotes: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
   }],
   downvotes: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
   }],
   comments: [{
      type: Schema.Types.ObjectId,
      ref: 'Comment'
   }],
   tags: {
      type: [String],
      default: []
   },
   isPromoted: {
      type: Boolean,
      default: false,
   },
   tronTransaction: [{
      type: String,
      default: ''
   }],
   ethereumTransaction: [{
      type: String,
      default: ''
   }],
   donations: [
      {
         type: Schema.Types.ObjectId
         , ref: 'User'
      }
   ],
   pictures: {
      type: [String],
      default: []
   }
});

const PostModel = mongoose.model('Post', postSchema);

export default PostModel;
