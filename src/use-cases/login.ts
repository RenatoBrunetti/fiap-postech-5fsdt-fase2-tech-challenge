import { IUser } from '@/entities/models/user.interface';
import { IUserRepository } from '@/repositories/user.repository.interface';

export class LoginUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(username: string, password: string): Promise<IUser | null> {
    const user = await this.userRepository.findByCredentials(
      username,
      password,
    );
    return user;
  }
}
