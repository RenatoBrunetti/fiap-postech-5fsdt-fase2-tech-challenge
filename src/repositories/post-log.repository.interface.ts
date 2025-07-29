import { IPostLog } from '@/entities/models/post-log.interface';

export interface IPostLogRepository {
  create(post: IPostLog): Promise<IPostLog>;
  findAll(): Promise<IPostLog[]>;
  update(postLog: IPostLog): Promise<IPostLog>;
}
