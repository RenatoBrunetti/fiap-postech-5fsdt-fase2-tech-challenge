import { IPost } from '@/entities/models/post.interface';

export interface IPostRepository {
  create(post: IPost): Promise<IPost>;
  findAll(): Promise<IPost[]>;
}
