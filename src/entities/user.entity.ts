import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IPost } from './models/post.interface';
import { IPostLog } from './models/post-log.interface';
import { IRole } from './models/role.interface';
import { IUser } from './models/user.interface';
import { Post } from './post.entity';
import { PostLog } from './post-log.entity';
import { Role } from './role.entity';

@Entity('users')
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  username: string;

  @Column({ type: 'varchar', nullable: false })
  password: string;

  @Column({ type: 'boolean', nullable: false, default: true })
  active: boolean;

  @CreateDateColumn({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
  })
  created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp without time zone',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updated_at: Date;

  @Column({ type: 'uuid', nullable: false })
  role_id: string;

  // One Role to many Users
  @ManyToOne(() => Role, (role) => role.users, {
    nullable: false,
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'role_id' })
  role: IRole;

  // One User to many Posts
  @OneToMany(() => Post, (post) => post.user)
  posts: IPost[];

  // One User to many PostLogs
  @OneToMany(() => PostLog, (postLog) => postLog.user)
  postLogs: IPostLog[];

  constructor(
    id: string,
    username: string,
    password: string,
    active: boolean,
    created_at: Date,
    updated_at: Date,
    role_id: string,
    role: Role,
    posts: IPost[],
    postLogs: IPostLog[],
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.active = active;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.role_id = role_id;
    this.role = role;
    this.posts = posts;
    this.postLogs = postLogs;
  }
}
