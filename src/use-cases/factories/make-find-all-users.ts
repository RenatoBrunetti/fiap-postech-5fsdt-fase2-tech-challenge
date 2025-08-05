import { UserRepository } from '@/repositories/typeorm/user.repository';
import { FindAllUsersUseCases } from '../find-all-users';

export function makeFindAllUsersUseCase() {
  const userRepository = new UserRepository();
  const findAllUsersUseCase = new FindAllUsersUseCases(userRepository);
  return findAllUsersUseCase;
}
