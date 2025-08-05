import { Repository } from 'typeorm';

import { IRole } from '@/entities/models/role.interface';
import { IUser } from '@/entities/models/user.interface';
import { User } from '@/entities/user.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';
import { IUserRepository } from '../user.repository.interface';

export class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = appDataSource.getRepository(User);
  }

  async findAll(): Promise<IUser[]> {
    return this.repository.find({ where: { active: true } });
  }

  async findById(id: string): Promise<(IUser & { role: IRole }) | null> {
    return this.repository.findOne({
      where: { id, active: true },
      relations: ['role'],
      select: { role: true },
    });
  }

  async create(user: IUser): Promise<IUser> {
    return this.repository.save(user);
  }
}
