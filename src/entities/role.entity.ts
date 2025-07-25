import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { IRole } from './models/role.interface';
import { User } from './user.entity';
import { IUser } from './models/user.interface';

@Entity('role')
export class Role implements IRole {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', nullable: true })
  description?: string;

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

  // One Role to many Users
  @OneToMany(() => User, (user) => user.role)
  users?: IUser[] | undefined;

  constructor(
    id: string,
    name: string,
    description: string,
    created_at: Date,
    updated_at: Date,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.created_at = created_at;
    this.updated_at = updated_at;
  }
}
