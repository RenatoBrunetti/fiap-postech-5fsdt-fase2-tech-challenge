import { IPostLog } from '@/entities/models/post-log.interface';
import { IPostLogRepository } from '@/repositories/post-log.repository.interface';

export class UpdatePostLogUseCase {
  constructor(private postLogRepository: IPostLogRepository) {}

  async handler(postLog: IPostLog): Promise<IPostLog | undefined> {
    return this.postLogRepository.update(postLog);
  }
}
