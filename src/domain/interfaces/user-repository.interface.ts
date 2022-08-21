import { UserEntity } from "../entities/user.entity";

export interface UserRespository {
    create(user: UserEntity): Promise<UserEntity>;
    findOneById(id: string): Promise<UserEntity>;
}