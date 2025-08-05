import { afterAll, beforeAll, describe, expect, it, jest } from '@jest/globals';
import fastify, { FastifyInstance } from 'fastify';

import { IPost } from '@/entities/models/post.interface';
import { PostRepository } from '@/repositories/typeorm/post.repository';

import { findAllPosts } from '../find-all-posts';

jest.mock('@/repositories/typeorm/post.repository');
jest.mock('@/lib/typeorm/typeorm', () => ({
  appDataSource: {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
    }),
  },
}));

describe('Find all Posts', () => {
  let app: FastifyInstance;

  beforeAll(async () => {
    (PostRepository as jest.Mock).mockClear();

    app = fastify();
    app.get('/posts', findAllPosts);
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('returns 200 with no posts', async () => {
    const posts: IPost[] = [];

    jest
      .spyOn(PostRepository.prototype, 'findAll')
      .mockImplementation(async () => Promise.resolve(posts));

    const response = await app.inject({
      method: 'get',
      url: '/posts',
    });

    expect(PostRepository).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual(posts);
  });

  it('returns 200 with posts', async () => {
    const posts: IPost[] = [
      {
        id: '379389ae-823f-416c-b710-b3e945d3549f',
        title: 'first post',
        content: 'first Post',
        user_id: '3f023162-0de0-441a-ac31-90ceac507146',
        created_at: '2025-08-01T10:10:10.100Z',
        updated_at: '2025-08-01T10:10:10.100Z',
      },
      {
        id: 'cdfc6d5d-9853-471b-b7a8-74c1d85e2eb5',
        title: 'second post',
        content: 'second Post',
        user_id: '3f023162-0de0-441a-ac31-90ceac507146',
        created_at: '2025-08-01T10:10:10.100Z',
        updated_at: '2025-08-01T10:10:10.100Z',
      },
    ];

    jest
      .spyOn(PostRepository.prototype, 'findAll')
      .mockImplementation(async () => Promise.resolve(posts));

    const response = await app.inject({
      method: 'get',
      url: '/posts',
    });

    expect(PostRepository).toHaveBeenCalledTimes(1);
    expect(response.statusCode).toBe(200);
    expect(JSON.parse(response.payload)).toEqual(posts);
  });
});
