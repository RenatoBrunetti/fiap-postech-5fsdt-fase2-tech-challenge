import { PostRepository } from '@/repositories/typeorm/post.repository';
import { DeletePostUseCases } from '../delete-post';

export function MakeDeletePostUseCase() {
  const postRepository = new PostRepository();
  const deletePostUseCase = new DeletePostUseCases(postRepository);
  return deletePostUseCase;
}
