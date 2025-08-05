import { IUser } from './user.interface';

export interface IRole {
  id: string;
  name: string;
  description?: string;
  created_at?: Date | string;
  updated_at?: Date | string;

  users?: IUser[];
}
