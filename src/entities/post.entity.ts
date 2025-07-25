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
import { IUser } from './models/user.interface';
import { PostLog } from './post-log.entity';
import { User } from './user.entity';

@Entity('posts')
export class Post implements IPost {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false })
  title: string;

  @Column({ type: 'text', nullable: false })
  content: string;

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
  user_id: string;

  // One User to many Posts
  @ManyToOne(() => User, (user) => user.posts, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  user: IUser;

  // One Post to many PostLogs
  @OneToMany(() => PostLog, (postLog) => postLog.post)
  postLogs: IPostLog[];

  constructor(
    id: string,
    title: string,
    content: string,
    active: boolean,
    created_at: Date,
    updated_at: Date,
    user_id: string,
    user: IUser,
    postLogs: IPostLog[],
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.active = active;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.user_id = user_id;
    this.user = user;
    this.postLogs = postLogs;
  }
}
