import { FastifyInstance } from 'fastify';

import { create } from './create';
import { findAllUsers } from './find-all-users';
import { createUserSchema } from '@/schemas/user/create-user';
import { findAllUsersSchema } from '@/schemas/user/find-all-users';

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', {
    schema: createUserSchema,
    handler: create,
  });
  app.get('/users', {
    schema: findAllUsersSchema,
    handler: findAllUsers,
  });
}
