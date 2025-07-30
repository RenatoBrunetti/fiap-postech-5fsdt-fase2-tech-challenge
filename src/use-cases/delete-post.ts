import { IPostRepository } from '@/repositories/post.repository.interface';

export class DeletePostUseCases {
  constructor(private postRepository: IPostRepository) {}

  async handler(id: string): Promise<void> {
    return this.postRepository.delete(id);
  }
}
