import { FastifyInstance } from 'fastify';

import { create } from './create';
import { findAllPosts } from './find-all-posts';

export async function postRoutes(app: FastifyInstance) {
  app.post('/post', create);
  app.get('/post', findAllPosts);
}
