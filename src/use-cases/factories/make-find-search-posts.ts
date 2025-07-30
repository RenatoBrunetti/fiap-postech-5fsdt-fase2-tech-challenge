import { PostRepository } from '@/repositories/typeorm/post.repository';
import { FindSearchPostsUseCases } from '../find-search-posts';

export function MakeFindSearchPostsUseCase() {
  const postRepository = new PostRepository();
  const findSearchPostsUseCase = new FindSearchPostsUseCases(postRepository);
  return findSearchPostsUseCase;
}
