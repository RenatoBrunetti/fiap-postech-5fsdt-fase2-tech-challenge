import { FastifyInstance } from 'fastify';

import { findAllPostLogs } from './find-all-post-logs';

export async function postLogRoutes(app: FastifyInstance) {
  app.get('/post-log', findAllPostLogs);
}
