import { DataSource } from 'typeorm';

import { env } from '@/env';

// Entities
import { Post } from '@/entities/post.entity';
import { PostLog } from '@/entities/post-log.entity';
import { Role } from '@/entities/role.entity';
import { User } from '@/entities/user.entity';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  // synchronize: true,
  logging: env.NODE_ENV === 'development',
  entities: [Post, PostLog, Role, User],
  // migrations: [],
  // subscribers: [],
});

appDataSource
  .initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization:', err);
  });
