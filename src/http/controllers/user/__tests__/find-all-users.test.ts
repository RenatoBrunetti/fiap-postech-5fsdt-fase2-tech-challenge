import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import fastify, { FastifyInstance } from 'fastify';

import { IUser } from '@/entities/models/user.interface';
import { UserRepository } from '@/repositories/typeorm/user.repository';

import { findAllUsers } from '../find-all-users';

jest.mock('@/repositories/typeorm/user.repository');
jest.mock('@/lib/typeorm/typeorm', () => ({
  appDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
    }),
  },
}));

describe('Find all Users', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    (UserRepository as jest.Mock).mockClear();

    app = fastify();
    app.get('/users', findAllUsers);
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns 200 with no users', async () => {
    const users: IUser[] = [];

    jest
      .spyOn(UserRepository.prototype, 'findAll')
      .mockImplementation(async () => Promise.resolve(users));

    const response = await app.inject({
      method: 'get',
      url: '/users',
    });

    expect(UserRepository).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual(users);
  });

  it('returns 200 with users', async () => {
    const users: IUser[] = [
      {
        id: '3f023162-0de0-441a-ac31-90ceac507146',
        username: 'john.doe',
        password: 'secret',
        role_id: '32cd771e-86c0-4faa-84cd-b88432a8d517',
        created_at: '2025-08-01T10:10:10.100Z',
        updated_at: '2025-08-01T10:10:10.100Z',
      },
      {
        id: 'c7bc5683-0afa-4c92-bd45-5f3052aaba5d',
        username: 'pete.foo',
        password: 'secret',
        role_id: '03d66292-ec01-441e-82b4-3c3b4d5e6c5f',
        created_at: '2025-08-01T10:10:10.100Z',
        updated_at: '2025-08-01T10:10:10.100Z',
      },
    ];

    jest
      .spyOn(UserRepository.prototype, 'findAll')
      .mockImplementation(async () => Promise.resolve(users));

    const response = await app.inject({
      method: 'get',
      url: '/users',
    });

    expect(UserRepository).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual(users);
  });
});
