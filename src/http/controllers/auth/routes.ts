import { FastifyInstance } from 'fastify';

import { loginSchema } from '@/schemas/login/login';

import { login } from './login';

export async function authRoutes(app: FastifyInstance) {
  app.post('/login', {
    schema: loginSchema,
    handler: login,
  });
}
