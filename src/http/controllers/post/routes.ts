import { FastifyInstance } from 'fastify';

import { create } from './create';
import { findAllPosts } from './find-all-posts';
import { findPost } from './find-post';
import { findSearchPosts } from './find-search-posts';
import { updatePost } from './update';
import { deletePost } from './delete';

// Import schemas
import { createPostSchema } from '@/schemas/posts/create-post';
import { findAllPostsSchema } from '@/schemas/posts/get-post';
import { findPostSchema } from '@/schemas/posts/get-post-by-id';
import { findSearchPostsSchema } from '@/schemas/posts/search-posts';
import { updatePostSchema } from '@/schemas/posts/update-post';
import { deletePostSchema } from '@/schemas/posts/delete-post';

export async function postRoutes(app: FastifyInstance) {
  app.post('/posts', {
    schema: createPostSchema,
    handler: create,
  });
  app.get('/posts', {
    schema: findAllPostsSchema,
    handler: findAllPosts,
  });
  app.get('/posts/:id', {
    schema: findPostSchema,
    handler: findPost,
  });
  app.get('/posts/search', {
    schema: findSearchPostsSchema,
    handler: findSearchPosts,
  });
  app.put('/posts/:id', {
    schema: updatePostSchema,
    handler: updatePost,
  });
  app.delete('/posts/:id', {
    schema: deletePostSchema,
    handler: deletePost,
  });
}
