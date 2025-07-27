import { IPost } from '@/entities/models/post.interface';
import { IPostRepository } from '@/repositories/post.repository.interface';

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(post: IPost): Promise<IPost | undefined> {
    return this.postRepository.create(post);
  }
}
