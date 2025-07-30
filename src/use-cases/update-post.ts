import { IPost } from '@/entities/models/post.interface';
import { IPostRepository } from '@/repositories/post.repository.interface';

export class UpdatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(post: IPost): Promise<IPost | undefined> {
    return this.postRepository.update(post);
  }
}
