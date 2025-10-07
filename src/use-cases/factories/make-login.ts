import { UserRepository } from '@/repositories/typeorm/user.repository';
import { LoginUseCase } from '../login';

export function makeLoginUseCase() {
  const userRepository = new UserRepository();
  const loginUseCase = new LoginUseCase(userRepository);
  return loginUseCase;
}
