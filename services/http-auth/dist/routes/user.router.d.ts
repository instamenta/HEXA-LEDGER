import { Router } from 'express';
import UserController from '../controllers/user.controller';
export default class UserRouter {
    private readonly router;
    private readonly controller;
    constructor(controller: UserController);
    private initialize;
    getRouter(): Router;
}
