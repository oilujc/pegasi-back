import { Router } from 'express';
import { Routes } from '../interfaces/routes.interface';
import { CreateUserDto } from '@/domain/dtos/users.dto';
import validationMiddleware from '../middlewares/validation.middleware';
import UsersController from '../controllers/users.controller';

class UsersRoute implements Routes {
  public path = '/users';
  public router = Router();
  public usersController = new UsersController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}/:id`, this.usersController.getUserById);
    this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
  }
}

export default UsersRoute;
