import { PostRepository } from '@/repositories/typeorm/post.repository';
import { CreatePostUseCase } from '../create-post';

export function makeCreatePostUseCase() {
  const postRepository = new PostRepository();
  const createPostUseCase = new CreatePostUseCase(postRepository);
  return createPostUseCase;
}