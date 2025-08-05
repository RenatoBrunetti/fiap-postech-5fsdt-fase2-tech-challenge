import { PostRepository } from '@/repositories/typeorm/post.repository';
import { FindAllPostsUseCases } from '../find-all-posts';

export function makeFindAllPostsUseCase() {
  const postRepository = new PostRepository();
  const findAllPostsUseCase = new FindAllPostsUseCases(postRepository);
  return findAllPostsUseCase;
}
