import { IUser } from '@/entities/models/user.interface';

export interface IUserRepository {
  findAll(): Promise<IUser[]>;
  create(user: IUser): Promise<IUser>;
}
