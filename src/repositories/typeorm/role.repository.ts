import { Repository } from 'typeorm';

import { IRole } from '@/entities/models/role.interface';
import { Role } from '@/entities/role.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';
import { IRoleRepository } from '../role.repository.interface';

export class RoleRepository implements IRoleRepository {
  private repository: Repository<Role>;

  constructor() {
    this.repository = appDataSource.getRepository(Role);
  }

  async findAll(): Promise<IRole[]> {
    return this.repository.find();
  }
}
