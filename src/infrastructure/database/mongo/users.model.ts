import { model, Schema, Document } from 'mongoose';
import { UserEntity } from '@/domain/entities/user.entity';

const userSchema: Schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    required: true,
  },
  maternity: {
    type: String,
    required: false,
  },
});

const userModel = model<UserEntity & Document>('User', userSchema);

export default userModel;
