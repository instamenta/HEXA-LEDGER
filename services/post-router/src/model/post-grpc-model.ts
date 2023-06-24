'use strict';
import {UserModel} from '../protos/generated/types/users_pb';

interface UserData {
	_id: string | null;
	username: string | null;
	email: string | null;
	password: string | null;
	picture: string | null;
	token: string | null;
}

export default class PostGrpcModel {
	_id: string | null;
	username: string | null;
	email: string | null;
	password: string | null;
	picture: string | null;
	token: string | null;
	constructor(userData: UserData) {
		({
			_id: this._id,
			username: this.username,
			email: this.email,
			password: this.password,
			picture: this.picture,
			token: this.token,
		} = userData);
	}

	static fromUserGRPCMessage(m: UserModel): PostGrpcModel {
		return new PostGrpcModel({
			_id: m.hasId() ? m.getId()!.getValue() : null,
			username: m.hasUsername() ? m.getUsername()!.getValue() : null,
			email: m.hasEmail() ? m.getEmail()!.getValue() : null,
			password: m.hasPassword() ? m.getPassword()!.getValue() : null,
			picture: m.hasPicture() ? m.getPicture()!.getValue() : null,
			token: m.hasToken() ? m.getToken()!.getValue() : null,
		});
	}
}

