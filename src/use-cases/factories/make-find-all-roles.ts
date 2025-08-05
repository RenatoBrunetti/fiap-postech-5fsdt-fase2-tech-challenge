import { RoleRepository } from '@/repositories/typeorm/role.repository';
import { FindAllRolesUseCases } from '../find-all-roles';

export function makeFindAllRolesUseCase() {
  const roleRepository = new RoleRepository();
  const findAllRolesUseCase = new FindAllRolesUseCases(roleRepository);
  return findAllRolesUseCase;
}
