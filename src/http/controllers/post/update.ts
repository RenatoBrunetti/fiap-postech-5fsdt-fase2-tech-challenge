import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { MakeUpdatePostUseCase } from '@/use-cases/factories/make-update-post';
import { makeCreatePostLogUseCase } from '@/use-cases/factories/make-create-post-log';

export async function updatePost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(request.params);

  const registerBodySchema = z.object({
    title: z.string().optional(),
    content: z.string().optional(),
    user_id: z.string(),
  });

  const { title, content, user_id } = registerBodySchema.parse(request.body);
  const updatePostUseCase = MakeUpdatePostUseCase();
  const post = await updatePostUseCase.handler({ title, content, user_id, id });

  // Create a PostLog instance
  if (post && post.id) {
    const createPostLogUseCase = makeCreatePostLogUseCase();
    await createPostLogUseCase.handler({
      action: 'update',
      post_id: post.id,
      user_id,
    });
  }

  return reply.status(200).send(post);
}
