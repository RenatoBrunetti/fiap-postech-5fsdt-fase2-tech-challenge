import { IPostLog } from '@/entities/models/post-log.interface';
import { IPostLogRepository } from '@/repositories/post-log.repository.interface';

export class FindAllPostLogsUseCases {
  constructor(private postLogRepository: IPostLogRepository) {}

  async handler(): Promise<IPostLog[]> {
    return this.postLogRepository.findAll();
  }
}
