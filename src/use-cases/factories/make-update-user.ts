import { UserRepository } from '@/repositories/typeorm/user.repository';
import { UpdateUserUseCase } from '../update-user';

export function makeUpdateUserUseCase() {
  const userRepository = new UserRepository();
  const updateUserUseCase = new UpdateUserUseCase(userRepository);
  return updateUserUseCase;
}
