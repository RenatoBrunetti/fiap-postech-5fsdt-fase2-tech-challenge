import { PostRepository } from '@/repositories/typeorm/post.repository';
import { FindPostUseCases } from '../find-post';

export function makeFindPostUseCase() {
  const postRepository = new PostRepository();
  const findPostUseCase = new FindPostUseCases(postRepository);
  return findPostUseCase;
}
