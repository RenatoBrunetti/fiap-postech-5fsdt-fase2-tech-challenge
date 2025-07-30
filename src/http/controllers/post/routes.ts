import { FastifyInstance } from 'fastify';

import { create } from './create';
import { findAllPosts } from './find-all-posts';
import { findPost } from './find-post';
import { findSearchPosts } from './find-search-posts';
import { updatePost } from './update';
import { deletePost } from './delete';

export async function postRoutes(app: FastifyInstance) {
  app.post('/posts', create);
  app.get('/posts', findAllPosts);
  app.get('/posts/:id', findPost);
  app.get('/posts/search', findSearchPosts);
  app.put('/posts/:id', updatePost);
  app.delete('/posts/:id', deletePost);
}
