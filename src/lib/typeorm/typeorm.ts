import { DataSource } from 'typeorm';

import { env } from '@/env';

export const appDataSource = new DataSource({
  type: 'postgres',
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  username: env.DATABASE_USER,
  password: env.DATABASE_PASSWORD,
  database: env.DATABASE_NAME,
  // synchronize: true,
  logging: env.NODE_ENV === 'development',
  entities: [],
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
