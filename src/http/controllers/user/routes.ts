import { FastifyInstance } from 'fastify';

import { createUserSchema } from '@/schemas/user/create-user';
import { findAllUsersSchema } from '@/schemas/user/find-all-users';
import { findUserSchema } from '@/schemas/user/get-user-by-id';
import { updateUserSchema } from '@/schemas/user/update-user';
import { deleteUserSchema } from '@/schemas/user/delete-user';

import { create } from './create';
import { findAllUsers } from './find-all-users';
import { findUser } from './find-user';
import { update } from './update';
import { deleteUser } from './delete';

export async function userRoutes(app: FastifyInstance) {
  app.post('/users', {
    schema: createUserSchema,
    handler: create,
  });
  app.get('/users', {
    schema: findAllUsersSchema,
    handler: findAllUsers,
  });
  app.get('/users/:id', {
    schema: findUserSchema,
    handler: findUser,
  });
  app.put('/users/:id', {
    schema: updateUserSchema,
    handler: update,
  });
  app.delete('/users/:id', {
    schema: deleteUserSchema,
    handler: deleteUser,
  });
}
