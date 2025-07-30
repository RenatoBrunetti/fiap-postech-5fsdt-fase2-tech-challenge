import { IPost } from '@/entities/models/post.interface';

export interface IPostRepository {
  create(post: IPost): Promise<IPost>;
  findAll(): Promise<IPost[]>;
  findById(id: string): Promise<IPost | null>;
  findBySearch(search: string): Promise<IPost[]>;
  update(post: IPost): Promise<IPost>;
  delete(id: string): Promise<void>;
}
