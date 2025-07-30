import { FastifyInstance } from 'fastify';

import { create } from './create';
import { findAllPosts } from './find-all-posts';
import { findPost } from './find-post';
import { updatePost } from './update';
import { deletePost } from './delete';

export async function postRoutes(app: FastifyInstance) {
  app.post('/post', create);
  app.get('/post', findAllPosts);
  app.get('/post/:id', findPost);
  app.put('/post/:id', updatePost);
  app.delete('/post/:id', deletePost);
}
