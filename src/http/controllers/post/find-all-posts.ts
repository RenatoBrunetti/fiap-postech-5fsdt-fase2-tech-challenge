import { FastifyReply, FastifyRequest } from 'fastify';

import { MakeFindAllPostsUseCase } from '@/use-cases/factories/make-find-all-posts';

export async function findAllPosts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findAllPostsUseCase = MakeFindAllPostsUseCase();
  const posts = await findAllPostsUseCase.handler();
  return reply.status(200).send(posts);
}