import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeLoginUseCase } from '@/use-cases/factories/make-login';

export async function login(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    username: z.string(),
    password: z.string(),
  });
  const { username, password } = registerBodySchema.parse(request.body);
  const loginUseCase = makeLoginUseCase();
  const user = await loginUseCase.handler(username, password);
  if (user?.username === username && user.password === password) {
    return reply.status(200).send(user);
  }
  return reply.status(401).send({ message: 'Unauthorized' });
}
