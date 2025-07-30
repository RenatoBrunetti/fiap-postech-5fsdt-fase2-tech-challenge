import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeCreatePostUseCase } from '@/use-cases/factories/make-create-post';
import { makeCreatePostLogUseCase } from '@/use-cases/factories/make-create-post-log';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
    user_id: z.string(),
  });
  const { title, content, user_id } = registerBodySchema.parse(request.body);

  const createPostUseCase = makeCreatePostUseCase();
  const post = await createPostUseCase.handler({ title, content, user_id });

  // Create the PostLog instance
  if (post && post.id) {
    const createPostLogUseCase = makeCreatePostLogUseCase();
    await createPostLogUseCase.handler({
      action: 'create',
      post_id: post.id,
      user_id,
    });
  }

  return reply.status(201).send({ message: 'Post created successfully' });
}
