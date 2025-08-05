import { IRole } from '@/entities/models/role.interface';
import { IUser } from '@/entities/models/user.interface';
import { IUserRepository } from '@/repositories/user.repository.interface';

export class FindUserUseCases {
  constructor(private userRepository: IUserRepository) {}

  async handler(id: string): Promise<(IUser & { role: IRole }) | null> {
    return this.userRepository.findById(id);
  }
}
