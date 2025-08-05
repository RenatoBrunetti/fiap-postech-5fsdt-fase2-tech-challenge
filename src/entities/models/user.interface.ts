import { IPost } from './post.interface';
import { IPostLog } from './post-log.interface';
import { IRole } from './role.interface';

export interface IUser {
  id?: string;
  username: string;
  password: string;
  active?: boolean;
  created_at?: Date | string;
  updated_at?: Date | string;

  role?: IRole;
  role_id: string;

  posts?: IPost[];
  postLogs?: IPostLog[];
}
