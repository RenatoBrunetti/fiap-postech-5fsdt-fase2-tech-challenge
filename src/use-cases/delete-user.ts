import { IUserRepository } from '@/repositories/user.repository.interface';

export class DeleteUserUseCases {
  constructor(private userRepository: IUserRepository) {}

  async handler(id: string): Promise<void> {
    return this.userRepository.delete(id);
  }
}
