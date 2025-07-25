import { IPost } from './post.interface';
import { IPostLog } from './post-log.interface';

export interface IUser {
  id: string;
  username: string;
  password: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;

  role_id: string;

  posts?: IPost[];
  postLogs?: IPostLog[];
}
