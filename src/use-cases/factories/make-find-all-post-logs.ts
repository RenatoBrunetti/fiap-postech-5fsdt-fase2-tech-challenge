import { PostLogRepository } from '@/repositories/typeorm/post-log.repository';
import { FindAllPostLogsUseCases } from '../find-all-post-logs';

export function MakeFindAllPostLogsUseCase() {
  const postLogRepository = new PostLogRepository();
  const findAllPostLogsUseCase = new FindAllPostLogsUseCases(postLogRepository);
  return findAllPostLogsUseCase;
}
