import {UserModel as IUserModel} from '../protos/generated/types/users_pb';
import {ServerUnaryCall} from '@grpc/grpc-js';
import {StringValue} from 'google-protobuf/google/protobuf/wrappers_pb';
import {IUser} from './types/basic-types';

const {UserModel} = require('../protos/generated/users_pb');

export interface ExtractedUserModel {
	_id?: string | null;
	username?: string | null;
	email?: string | null;
	password?: string | null;
	picture?: string | null;
	followers: Array<string> | [];
	following: Array<string> | [];
	comments?: Array<string> | [];
}

/**
 * @param call
 * @param extractAll
 * @param include
 * @returns
 */
function extractUserModel(
	call: ServerUnaryCall<any, IUserModel>,
	extractAll = true,
	include: object = {},
): ExtractedUserModel | any {
	const u = call.request;
	console.log(u);
	if (extractAll) {
		return {
			_id: u.hasId() ? u.getId()!.getValue() : null,
			username: u.hasUsername() ? u.getUsername()!.getValue() : null,
			email: u.hasEmail() ? u.getEmail()!.getValue() : null,
			password: u.hasPassword() ? u.getPassword()!.getValue() : null,
			picture: u.hasPicture() ? u.getPicture()!.getValue() : null,
			followers: u.getFollowersList()
				.map((werUser: StringValue) => werUser.getValue()).toString(),
			following: u.getFollowingList()
				.map((wingUser: StringValue) => wingUser.getValue()).toString(),
			// comments: u.hasComments() ? u.getComments()!.getValue() : null,
		};
	} else {
		const m: ExtractedUserModel = {
			_id: null,
			username: null,
			email: null,
			password: null,
			picture: null,
			followers: [],
			following: [],
		};
		Object.keys(include).forEach((key) => {
			switch (key) {
			case '_id': {
				m._id = u.hasId() ? u.getId()!.getValue() : null;
				break;
			}
			case 'username': {
				m.username = u.hasUsername() ? u.getUsername()!.getValue() : null;
				break;
			}
			case 'email': {
				m.email = u.hasEmail() ? u.getEmail()!.getValue() : null;
				break;
			}
			case 'password': {
				m.password = u.hasPassword() ? u.getPassword()!.getValue() : null;
				break;
			}
			case 'picture': {
				m.picture = u.hasPicture() ? u.getPicture()!.getValue() : null;
				break;
			}
			case 'followers': {
				m.followers = u.getFollowersList()
					.map((werUser: StringValue) => werUser.getValue().toString());
				break;
			}
			case 'following': {
				m.following = u.getFollowingList()
					.map((wingUser: StringValue) => wingUser.getValue().toString());
				break;
			}
			}
		});
		return m;
	}
}

/**
 * @param u
 * @returns
 */
function convertUserModel(
	u: IUser,
	// followCount: boolean = true
): IUserModel {
	const m = new UserModel();
	const stringId: string = u._id.toString();
	m.setId(new StringValue().setValue(stringId));
	m.setUsername(new StringValue().setValue(u.username));
	m.setEmail(new StringValue().setValue(u.email));
	m.setPicture(new StringValue().setValue(u.picture));
	// m.setFollowersList(new Int32Value().setValue(u.following?.length))
	// m.setFollowingList(new Int32Value().setValue(u.followers?.length))
	return m;
}

export {
	extractUserModel,
	convertUserModel,
};