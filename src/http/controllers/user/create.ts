import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeCreateUserUseCase } from '@/use-cases/factories/make-create-user';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    role_id: z.string(),
  });
  const { username, password, role_id } = registerBodySchema.parse(
    request.body,
  );
  const createUserUseCase = makeCreateUserUseCase();
  await createUserUseCase.handler({ username, password, role_id });
  return reply.status(201).send({ message: 'User created successfully' });
}
