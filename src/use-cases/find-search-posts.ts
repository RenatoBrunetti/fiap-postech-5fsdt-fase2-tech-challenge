import { IPost } from '@/entities/models/post.interface';
import { IPostRepository } from '@/repositories/post.repository.interface';

export class FindSearchPostsUseCases {
  constructor(private postRepository: IPostRepository) {}

  async handler(search: string): Promise<IPost[]> {
    return this.postRepository.findBySearch(search);
  }
}
