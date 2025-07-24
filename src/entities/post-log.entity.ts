import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IPostLog } from './models/post-log.interface';
import { Post } from './post.entity';
import { User } from './user.entity';
import { IUser } from './models/user.interface';
import { IPost } from './models/post.interface';

@Entity('post_logs')
export class PostLog implements IPostLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  action: string;

  @Column({ type: 'text', nullable: true })
  description: string;

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
  post_id: string;

  @Column({ type: 'uuid', nullable: true })
  user_id: string;

  // One Post to many PostLogs
  @ManyToOne(() => Post, (post) => post.postLogs, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'post_id' })
  post: IPost;

  // One User to many PostLogs
  @ManyToOne(() => User, (user) => user.postLogs, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'user_id' })
  user: IUser;

  constructor(
    id: string,
    action: string,
    description: string,
    created_at: Date,
    updated_at: Date,
    post_id: string,
    user_id: string,
    post: IPost,
    user: IUser,
  ) {
    this.id = id;
    this.action = action;
    this.description = description;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.post_id = post_id;
    this.user_id = user_id;
    this.post = post;
    this.user = user;
  }
}
