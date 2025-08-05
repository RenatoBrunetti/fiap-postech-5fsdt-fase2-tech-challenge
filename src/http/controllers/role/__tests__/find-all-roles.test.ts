import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import fastify, { FastifyInstance } from 'fastify';

import { IRole } from '@/entities/models/role.interface';
import { RoleRepository } from '@/repositories/typeorm/role.repository';

import { findAllRoles } from '../find-all-roles';

jest.mock('@/repositories/typeorm/role.repository');
jest.mock('@/lib/typeorm/typeorm', () => ({
  appDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
    }),
  },
}));

describe('Find all Roles', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    (RoleRepository as jest.Mock).mockClear();

    app = fastify();
    app.get('/roles', findAllRoles);
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns 200 with no roles', async () => {
    const roles: IRole[] = [];

    jest
      .spyOn(RoleRepository.prototype, 'findAll')
      .mockImplementation(async () => Promise.resolve(roles));

    const response = await app.inject({
      method: 'get',
      url: '/roles',
    });

    expect(RoleRepository).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual(roles);
  });

  it('returns 200 with roles', async () => {
    const roles: IRole[] = [
      {
        id: '32cd771e-86c0-4faa-84cd-b88432a8d517',
        name: 'admin',
        created_at: '2025-08-01T10:10:10.100Z',
        updated_at: '2025-08-01T10:10:10.100Z',
      },
      {
        id: '03d66292-ec01-441e-82b4-3c3b4d5e6c5f',
        name: 'student',
        created_at: '2025-08-01T10:10:10.100Z',
        updated_at: '2025-08-01T10:10:10.100Z',
      },
    ];

    jest
      .spyOn(RoleRepository.prototype, 'findAll')
      .mockImplementation(async () => Promise.resolve(roles));

    const response = await app.inject({
      method: 'get',
      url: '/roles',
    });

    expect(RoleRepository).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual(roles);
  });
});
