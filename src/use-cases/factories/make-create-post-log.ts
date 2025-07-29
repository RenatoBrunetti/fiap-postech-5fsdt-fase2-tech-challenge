import { PostLogRepository } from '@/repositories/typeorm/post-log.repository';
import { CreatePostLogUseCase } from '../create-post-log';

export function makeCreatePostLogUseCase() {
  const postLogRepository = new PostLogRepository();
  const createPostLogUseCase = new CreatePostLogUseCase(postLogRepository);
  return createPostLogUseCase;
}
