import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import fastify, { FastifyInstance } from 'fastify';

import { IPostLog } from '@/entities/models/post-log.interface';
import { PostLogRepository } from '@/repositories/typeorm/post-log.repository';

import { findAllPostLogs } from '../find-all-post-logs';

jest.mock('@/repositories/typeorm/post-log.repository');
jest.mock('@/lib/typeorm/typeorm', () => ({
  appDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
    }),
  },
}));

describe('Find all Post Logs', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    (PostLogRepository as jest.Mock).mockClear();

    app = fastify();
    app.get('/post-logs', findAllPostLogs);
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns 200 with no postlogs', async () => {
    const postlogs: IPostLog[] = [];

    jest
      .spyOn(PostLogRepository.prototype, 'findAll')
      .mockImplementation(async () => Promise.resolve(postlogs));

    const response = await app.inject({
      method: 'get',
      url: '/post-logs',
    });

    expect(PostLogRepository).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual(postlogs);
  });

  it('returns 200 with postlogs', async () => {
    const postlogs: IPostLog[] = [
      {
        id: '88b3cc02-549e-42c1-a37f-9cf91290ecfb',
        action: 'create',
        user_id: '3f023162-0de0-441a-ac31-90ceac507146',
        post_id: '379389ae-823f-416c-b710-b3e945d3549f',
        created_at: '2025-08-01T10:10:10.100Z',
        updated_at: '2025-08-01T10:10:10.100Z',
      },
      {
        id: '483c576b-3c96-48f7-b43f-725cedcc820f',
        action: 'update',
        user_id: '3f023162-0de0-441a-ac31-90ceac507146',
        post_id: '379389ae-823f-416c-b710-b3e945d3549f',
        created_at: '2025-08-01T10:10:10.100Z',
        updated_at: '2025-08-01T10:10:10.100Z',
      },
    ];

    jest
      .spyOn(PostLogRepository.prototype, 'findAll')
      .mockImplementation(async () => Promise.resolve(postlogs));

    const response = await app.inject({
      method: 'get',
      url: '/post-logs',
    });

    expect(PostLogRepository).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual(postlogs);
  });
});
