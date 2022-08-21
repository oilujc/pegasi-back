export class UserEntity {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    phone: string;
    birthDate: Date;
    
    maternity?: string;

    static toEntity(user: any): UserEntity {
        const userEntity = new UserEntity();
        userEntity.id = user.id;
        userEntity.firstName = user.firstName;
        userEntity.lastName = user.lastName;
        userEntity.age = user.age;
        userEntity.gender = user.gender;
        userEntity.phone = user.phone;
        userEntity.birthDate = user.birthDate;
        userEntity.maternity = user.maternity;

        return userEntity;
    }
}