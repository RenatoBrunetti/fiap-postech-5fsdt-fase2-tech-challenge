import { IPost } from '@/entities/models/post.interface';
import { IPostRepository } from '@/repositories/post.repository.interface';

export class FindPostUseCases {
  constructor(private postRepository: IPostRepository) {}

  async handler(id: string): Promise<IPost | null> {
    return this.postRepository.findById(id);
  }
}
