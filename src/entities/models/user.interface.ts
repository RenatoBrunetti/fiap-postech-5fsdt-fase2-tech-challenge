export interface IUser {
  id: string;
  username: string;
  password: string;
  active: boolean;
  created_at: Date;
  updated_at: Date;

  role_id: string;
}
