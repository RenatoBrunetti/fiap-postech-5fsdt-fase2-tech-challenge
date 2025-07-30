import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { MakeFindPostUseCase } from '@/use-cases/factories/make-find-post';

export async function findPost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(request.params);
  const findPostUseCase = MakeFindPostUseCase();
  const post = await findPostUseCase.handler(id);
  return reply.status(200).send(post);
}
