import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import fastify, { FastifyInstance } from 'fastify';

import { IUser } from '@/entities/models/user.interface';
import { UserRepository } from '@/repositories/typeorm/user.repository';

import { create } from '../create';

jest.mock('@/repositories/typeorm/user.repository');
jest.mock('@/lib/typeorm/typeorm', () => ({
  appDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
    }),
  },
}));

describe('Create User', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    (UserRepository as jest.Mock).mockClear();

    app = fastify();
    app.post('/users', create);
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns 500 password type validation error', async () => {
    const response = await app.inject({
      method: 'post',
      url: '/users',
      body: {
        username: 'john.doe',
        password: 10,
        role_id: '32cd771e-86c0-4faa-84cd-b88432a8d517',
      },
    });

    expect(response.statusCode).toBe(500);
  });

  it('returns 500 missing role_id validation error', async () => {
    const response = await app.inject({
      method: 'post',
      url: '/users',
      body: {
        username: 'john.doe',
        password: 'secret',
      },
    });

    expect(response.statusCode).toBe(500);
  });

  it('returns 200 with message', async () => {
    const user: IUser = {
      username: 'john.doe',
      password: 'secret',
      role_id: '32cd771e-86c0-4faa-84cd-b88432a8d517',
      created_at: '2025-08-01T10:10:10.100Z',
      updated_at: '2025-08-01T10:10:10.100Z',
    };
    const message = {
      message: 'User created successfully',
    };

    jest
      .spyOn(UserRepository.prototype, 'create')
      .mockImplementation(async () => Promise.resolve(user));

    const response = await app.inject({
      method: 'post',
      url: '/users',
      body: {
        username: 'john.doe',
        password: 'secret',
        role_id: '32cd771e-86c0-4faa-84cd-b88432a8d517',
      },
    });

    expect(UserRepository).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(201);
    expect(JSON.parse(response.payload)).toEqual(message);
  });
});
