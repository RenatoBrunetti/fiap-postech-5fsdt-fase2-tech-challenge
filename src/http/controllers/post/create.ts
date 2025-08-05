import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeCreatePostUseCase } from '@/use-cases/factories/make-create-post';
import { makeCreatePostLogUseCase } from '@/use-cases/factories/make-create-post-log';
import { makeFindUserUseCase } from '@/use-cases/factories/make-find-user';

export async function create(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
    user_id: z.string(),
  });
  const { title, content, user_id } = registerBodySchema.parse(request.body);

  // Validate user's role
  const findUserUseCase = makeFindUserUseCase();
  const user = await findUserUseCase.handler(user_id);
  if (!user) {
    return reply.status(404).send({ message: 'User not found' });
  }
  if (user && user.role.name !== 'admin') {
    return reply
      .status(403)
      .send({ message: 'User does not have permission to create posts' });
  }

  // Create a new post
  const createPostUseCase = makeCreatePostUseCase();
  const post = await createPostUseCase.handler({ title, content, user_id });

  // Create a PostLog instance
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
