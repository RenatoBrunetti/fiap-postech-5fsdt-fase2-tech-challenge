import { UserRepository } from '@/repositories/typeorm/user.repository';
import { FindUserUseCases } from '../find-user';

export function makeFindUserUseCase() {
  const userRepository = new UserRepository();
  const findUserUseCase = new FindUserUseCases(userRepository);
  return findUserUseCase;
}
