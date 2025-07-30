import { IPost } from '@/entities/models/post.interface';
import { IPostRepository } from '@/repositories/post.repository.interface';

export class FindAllPostsUseCases {
  constructor(private postRepository: IPostRepository) {}

  async handler(): Promise<IPost[]> {
    return this.postRepository.findAll();
  }
}
