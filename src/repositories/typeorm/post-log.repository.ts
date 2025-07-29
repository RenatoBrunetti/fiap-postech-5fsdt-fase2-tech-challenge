import { Repository } from 'typeorm';

import { IPostLog } from '@/entities/models/post-log.interface';
import { PostLog } from '@/entities/post-log.entity';
import { appDataSource } from '@/lib/typeorm/typeorm';
import { IPostLogRepository } from '../post-log.repository.interface';

export class PostLogRepository implements IPostLogRepository {
  private repository: Repository<IPostLog>;

  constructor() {
    this.repository = appDataSource.getRepository(PostLog);
  }

  async create(post: IPostLog): Promise<IPostLog> {
    return this.repository.save(post);
  }

  async findAll(): Promise<IPostLog[]> {
    return this.repository.find();
  }

  async update(post: IPostLog): Promise<IPostLog> {
    return this.repository.save(post);
  }
}
