import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { MakeFindSearchPostsUseCase } from '@/use-cases/factories/make-find-search-posts';

export async function findSearchPosts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const registerQuerySchema = z.object({
    search: z.coerce.string(),
  });

  const { search } = registerQuerySchema.parse(request.query);
  const findSearchPostsUseCase = MakeFindSearchPostsUseCase();
  const post = await findSearchPostsUseCase.handler(search);
  return reply.status(200).send(post);
}
