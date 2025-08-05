import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeFindUserUseCase } from '@/use-cases/factories/make-find-user';

export async function findUser(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(request.params);
  const findUserUseCase = makeFindUserUseCase();
  const user = await findUserUseCase.handler(id);
  return reply.status(200).send(user);
}
