import { Pool, PoolClient } from 'pg';

import { env } from '@/env';

const CONFIG = {
  user: env.DATABASE_USER,
  host: env.DATABASE_HOST,
  database: env.DATABASE_NAME,
  password: env.DATABASE_PASSWORD,
  port: env.DATABASE_PORT,
};

export class Database {
  private pool: Pool;
  private client?: PoolClient;

  constructor() {
    this.pool = new Pool(CONFIG);
    this.connect().then(() =>
      console.log('PostgreSQL Database connected successfully'),
    );
  }

  private async connect(): Promise<void> {
    try {
      this.client = await this.pool.connect();
    } catch (error) {
      console.error('Error connecting to the database:', error);
      throw new Error(`Error connecting to the database: ${error}`);
    }
  }

  get clientInstance(): PoolClient {
    if (!this.client) {
      throw new Error('Database client is not connected.');
    }
    return this.client;
  }
}

export const database = new Database();
