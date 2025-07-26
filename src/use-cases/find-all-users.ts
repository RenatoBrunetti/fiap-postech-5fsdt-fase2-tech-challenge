import { IUser } from '@/entities/models/user.interface';
import { IUserRepository } from '@/repositories/user.repository.interface';

export class FindAllUsersUseCases {
  constructor(private userRepository: IUserRepository) {}

  async handler(): Promise<IUser[]> {
    return this.userRepository.findAll();
  }
}
