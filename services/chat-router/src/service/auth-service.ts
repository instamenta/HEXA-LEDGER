/** @file Service that handles Auth. */

import {PrismaClient, User} from '../../prisma/prisma/client';
import TokenTools from '../utility/token-tools';
import {Response} from 'express';

export default class AuthService {

   private readonly prisma: PrismaClient;
   private readonly tokenTools: TokenTools;

   constructor(prisma: PrismaClient, tokenTools: TokenTools) {
      this.prisma = prisma;
      this.tokenTools = tokenTools;
   }

   public static getInstance(prisma: PrismaClient, tokenTools: TokenTools): AuthService {
      return new AuthService(prisma, tokenTools);
   }

   public createUser(username: string, authId: string): Promise<User> {
      return this.prisma.user.create({
         data: {username, authId}
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

   public editUser(res: Response, username: string, authId: string): Promise<User & { token: string }> {
      return this.prisma.user.update({
         where: {authId},
         data: {username}
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

   public getUsers(page: number, limit: number, filter: string): Promise<Array<User>> {
      return this.prisma.user.findMany({
         skip: (page - 1) * limit,
         take: limit,
         // Where: {filter}
      });
   }

   public getUser(id: string): Promise<User | null> {
      return this.prisma.user.findFirst({
         where: {id}
      });
   }

}