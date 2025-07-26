import { IRole } from '@/entities/models/role.interface';
import { IRoleRepository } from '@/repositories/role.repository.interface';

export class FindAllRolesUseCases {
  constructor(private roleRepository: IRoleRepository) {}

  async handler(): Promise<IRole[]> {
    return this.roleRepository.findAll();
  }
}
