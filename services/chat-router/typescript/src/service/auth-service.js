"use strict";
/** @file Service that handles Auth. */
Object.defineProperty(exports, "__esModule", { value: true });
class AuthService {
    prisma;
    tokenTools;
    constructor(prisma, tokenTools) {
        this.prisma = prisma;
        this.tokenTools = tokenTools;
    }
    static getInstance(prisma, tokenTools) {
        return new AuthService(prisma, tokenTools);
    }
    createUser(username, authId) {
        return this.prisma.user.create({
            data: { username, authId }
        }).then((user) => {
            return {
                ...user,
                token: this.tokenTools.generateToken({
                    id: user.id,
                    username: user.username,
                    authId: user.authId,
                    picture: user.picture,
                    createdAt: user.createdAt
                }).toString()
            };
        });
    }
    editUser(res, username, authId) {
        return this.prisma.user.update({
            where: { authId },
            data: { username }
        }).then((user) => {
            return {
                ...user,
                token: this.tokenTools.generateToken({
                    id: user.id,
                    username: user.username,
                    authId: user.authId,
                    picture: user.picture,
                    createdAt: user.createdAt
                }).toString()
            };
        });
    }
    getUsers(page, limit, filter) {
        return this.prisma.user.findMany({
            skip: (page - 1) * limit,
            take: limit,
            // Where: {filter}
        });
    }
    getUser(id) {
        return this.prisma.user.findFirst({
            where: { id }
        });
    }
}
exports.default = AuthService;
