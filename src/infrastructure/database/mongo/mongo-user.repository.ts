import { UserEntity } from "@/domain/entities/user.entity";
import { UserRespository } from "@/domain/interfaces/user-repository.interface";
import userModel from "./users.model";

export class MongoUserRepository implements UserRespository {
    public users = userModel;

    public async create(user: UserEntity): Promise<UserEntity> {
        const createUserData = await this.users.create(user);

        user.id = createUserData._id;

        return user;
    }

    public async findOneById(id: string): Promise<UserEntity> {
        const findUser = await this.users.findOne({ _id: id });

        const user = UserEntity.toEntity(findUser);
        return user;
    }
}