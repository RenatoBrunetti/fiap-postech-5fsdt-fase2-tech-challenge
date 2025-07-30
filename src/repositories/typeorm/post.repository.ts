import { ILike, Repository } from 'typeorm';

import { IPost } from '@/entities/models/post.interface';
import { Post } from '@/entities/post.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';
import { IPostRepository } from '../post.repository.interface';

export class PostRepository implements IPostRepository {
  private repository: Repository<Post>;

  constructor() {
    this.repository = appDataSource.getRepository(Post);
  }

  async create(post: IPost): Promise<IPost> {
    return this.repository.save(post);
  }

  async findAll(): Promise<IPost[]> {
    return this.repository.find({
      where: { active: true },
      relations: ['user'],
      select: {
        user: {
          username: true,
        },
      },
    });
  }

  async findById(id: string): Promise<IPost | null> {
    return this.repository.findOne({
      where: { id },
      relations: ['user'],
      select: {
        user: {
          username: true,
        },
      },
    });
  }

  async findBySearch(search: string): Promise<IPost[]> {
    return this.repository.find({
      where: [
        { title: ILike(`%${search}%`), active: true },
        { content: ILike(`%${search}%`), active: true },
      ],
      relations: ['user'],
      select: {
        user: {
          username: true,
        },
      },
    });
  }

  async update(post: IPost): Promise<IPost> {
    return this.repository.save(post);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
