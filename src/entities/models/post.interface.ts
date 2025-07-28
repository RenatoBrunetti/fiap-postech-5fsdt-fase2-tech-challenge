import { IPostLog } from './post-log.interface';
import { IUser } from './user.interface';

export interface IPost {
  id?: string;
  title: string;
  content: string;
  active?: boolean;
  created_at?: Date;
  updated_at?: Date;

  user_id: string;

  user?: IUser;
  postLogs?: IPostLog[];
}
