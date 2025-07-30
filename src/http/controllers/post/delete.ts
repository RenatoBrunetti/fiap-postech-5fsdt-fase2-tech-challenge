import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { MakeDeletePostUseCase } from '@/use-cases/factories/make-delete-post';

export async function deletePost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(request.params);

  const deletePostUseCase = MakeDeletePostUseCase();
  const post = await deletePostUseCase.handler(id);
  return reply.status(200).send({ message: 'Post deleted successfully' });
}
