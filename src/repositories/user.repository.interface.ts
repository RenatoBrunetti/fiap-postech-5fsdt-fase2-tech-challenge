import { IRole } from '@/entities/models/role.interface';
import { IUser } from '@/entities/models/user.interface';

export interface IUserRepository {
  findAll(): Promise<IUser[]>;
  findById(id: string): Promise<(IUser & { role: IRole }) | null>;
  findByCredentials(username: string, password: string): Promise<IUser | null>;
  create(user: IUser): Promise<IUser>;
}
