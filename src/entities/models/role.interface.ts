import { IUser } from './user.interface';

export interface IRole {
  id: string;
  name: string;
  description?: string;
  created_at: Date;
  updated_at: Date;

  users?: IUser[];
}
