import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { MakeUpdatePostUseCase } from '@/use-cases/factories/make-update-post';

export async function updatePost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(request.params);

  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
    user_id: z.string(),
  });

  const { title, content, user_id } = registerBodySchema.parse(request.body);
  const updatePostUseCase = MakeUpdatePostUseCase();
  const post = await updatePostUseCase.handler({ title, content, user_id, id });
  return reply.status(200).send(post);
}
