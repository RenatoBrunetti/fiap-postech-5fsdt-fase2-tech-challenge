import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { MakeDeletePostUseCase } from '@/use-cases/factories/make-delete-post';
import { MakeFindPostUseCase } from '@/use-cases/factories/make-find-post';
import { makeCreatePostLogUseCase } from '@/use-cases/factories/make-create-post-log';

export async function deletePost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(request.params);
  const findPostUseCase = MakeFindPostUseCase();
  const post = await findPostUseCase.handler(id);

  // Create a PostLog instance
  if (post && post.id) {
    const createPostLogUseCase = makeCreatePostLogUseCase();
    await createPostLogUseCase.handler({
      action: 'delete',
      post_id: post.id,
      user_id: post.user_id,
    });
  }

  const deletePostUseCase = MakeDeletePostUseCase();
  await deletePostUseCase.handler(id);

  return reply.status(200).send({ message: 'Post deleted successfully' });
}
