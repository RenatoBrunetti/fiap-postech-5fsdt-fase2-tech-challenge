import { FastifyInstance } from 'fastify';

import { findAllRoles } from './find-all-roles';
import { findAllRolesSchema } from '@/schemas/role/get-role';

export async function roleRoutes(app: FastifyInstance) {
  app.get('/roles', {
    schema: findAllRolesSchema,
    handler: findAllRoles,
  });
}
