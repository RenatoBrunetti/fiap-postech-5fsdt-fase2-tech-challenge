import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeDeletePostUseCase } from '@/use-cases/factories/make-delete-post';
import { makeFindPostUseCase } from '@/use-cases/factories/make-find-post';
import { makeCreatePostLogUseCase } from '@/use-cases/factories/make-create-post-log';
import { makeFindUserUseCase } from '@/use-cases/factories/make-find-user';

export async function deletePost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });
  const { id } = registerParamsSchema.parse(request.params);

  const registerBodySchema = z.object({
    user_id: z.string(),
  });
  const { user_id } = registerBodySchema.parse(request.body);

  // Find the post to be deleted
  const findPostUseCase = makeFindPostUseCase();
  const post = await findPostUseCase.handler(id);
  if (!post) {
    return reply.status(404).send({ message: 'Post not found' });
  }

  // Validate user's role
  const findUserUseCase = makeFindUserUseCase();
  const user = await findUserUseCase.handler(user_id);
  if (!user) {
    return reply.status(404).send({ message: 'User not found' });
  }
  if (user && user.role.name !== 'admin') {
    return reply
      .status(403)
      .send({ message: 'User does not have permission to delete posts' });
  }

  // Create a PostLog instance
  if (post && post.id) {
    const createPostLogUseCase = makeCreatePostLogUseCase();
    await createPostLogUseCase.handler({
      action: 'delete',
      post_id: post.id,
      user_id: post.user_id,
    });
  }

  const deletePostUseCase = makeDeletePostUseCase();
  await deletePostUseCase.handler(id);

  return reply.status(200).send({ message: 'Post deleted successfully' });
}
