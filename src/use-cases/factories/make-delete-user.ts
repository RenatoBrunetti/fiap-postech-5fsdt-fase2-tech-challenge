import { UserRepository } from '@/repositories/typeorm/user.repository';
import { DeleteUserUseCases } from '../delete-user';

export function makeDeleteUserUseCase() {
  const userRepository = new UserRepository();
  const deleteUserUseCase = new DeleteUserUseCases(userRepository);
  return deleteUserUseCase;
}
