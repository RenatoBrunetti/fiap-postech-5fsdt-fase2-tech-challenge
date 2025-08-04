import { FastifyInstance } from 'fastify';

import { findAllPostLogs } from './find-all-post-logs';
import { findAllPostLogsSchema } from '@/schemas/post-log/get-post-log';

export async function postLogRoutes(app: FastifyInstance) {
  app.get('/post-logs', {
    schema: findAllPostLogsSchema,
    handler: findAllPostLogs,
  });
}
