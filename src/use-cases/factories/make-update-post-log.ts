import { PostLogRepository } from '@/repositories/typeorm/post-log.repository';
import { UpdatePostLogUseCase } from '../update-post-log';

export function makeUpdatePostLogUseCase() {
  const postLogRepository = new PostLogRepository();
  const updatePostLogUseCase = new UpdatePostLogUseCase(postLogRepository);
  return updatePostLogUseCase;
}
