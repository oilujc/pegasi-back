import { hash } from 'bcrypt';
import { CreateUserDto } from '@/domain/dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import userModel from '@models/users.model';
import { isEmpty } from '@utils/util';

import { UserRespository } from '@/domain/interfaces/user-repository.interface';
import { UserEntity } from '@/domain/entities/user.entity';

class UserService {

  constructor(private userRepository: UserRespository) {}

  public async findUserById(userId: string): Promise<UserEntity> {
    if (isEmpty(userId)) throw new HttpException(400, "UserId is empty");

    const findUser: UserEntity = await this.userRepository.findOneById(userId);
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<UserEntity> {
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const newUser = new UserEntity();
    newUser.firstName = userData.firstName;
    newUser.lastName = userData.lastName;
    newUser.age = userData.age;
    newUser.gender = userData.gender;
    newUser.phone = userData.phone;
    newUser.birthDate = new Date(userData.birthDate);

    if (userData.gender != 'male') {
      newUser.maternity = userData.maternity;
    }

    const createUserData: UserEntity = await this.userRepository.create(newUser);

    return createUserData;
  }

}

export default UserService;
