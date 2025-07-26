import { IRole } from '@/entities/models/role.interface';

export interface IRoleRepository {
  findAll(): Promise<IRole[]>;
}
