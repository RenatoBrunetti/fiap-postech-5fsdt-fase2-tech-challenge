import { IPost } from './post.interface';
import { IUser } from './user.interface';

export interface IPostLog {
  id?: string;
  action: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  post_id: string;
  user_id: string;

  post?: IPost;
  user?: IUser;
}
