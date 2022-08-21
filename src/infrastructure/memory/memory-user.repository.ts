import { UserEntity } from "@/domain/entities/user.entity";
import { UserRespository } from "@/domain/interfaces/user-repository.interface";

export class MemoryUserRepository implements UserRespository {

    private users: UserEntity[] = [];

    public async create(user: UserEntity): Promise<UserEntity> {

        user.id = Math.random().toString(36).substring(7);

        this.users.push({ ...user });
        return user;
    }

    public async findOneById(id: string): Promise<UserEntity> {
        return this.users.find(user => user.id === id);
    }


}