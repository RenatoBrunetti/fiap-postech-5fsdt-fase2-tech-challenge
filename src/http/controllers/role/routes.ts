import { FastifyInstance } from 'fastify';

import { findAllRoles } from './find-all-roles';

export async function roleRoutes(app: FastifyInstance) {
  app.get('/role', findAllRoles);
}
