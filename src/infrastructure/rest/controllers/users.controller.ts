import { NextFunction, Request, Response } from 'express';
import UserService from '@/application/user/users.service';
import { UserEntity } from '@/domain/entities/user.entity';
import { CreateUserDto } from '@/domain/dtos/users.dto';
import { MongoUserRepository } from '@/infrastructure/database/mongo/mongo-user.repository';


class UsersController {

  private userRepository = new MongoUserRepository();
  public userService = new UserService(this.userRepository);

  public getUserById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userId: string = req.params.id;
      const findOneUserData: UserEntity = await this.userService.findUserById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const userData: CreateUserDto = req.body;
      const createUserData: UserEntity = await this.userService.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default UsersController;
