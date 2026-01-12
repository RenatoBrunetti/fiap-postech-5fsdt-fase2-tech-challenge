import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { IUser } from '@/entities/models/user.interface';
import { makeFindUserUseCase } from '@/use-cases/factories/make-find-user';
import { makeUpdateUserUseCase } from '@/use-cases/factories/make-update-user';

export async function update(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });
  const { id } = registerParamsSchema.parse(request.params);

  const registerBodySchema = z.object({
    username: z.string().optional(),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters long')
      .optional(),
    role_id: z.string().uuid().optional(),
    user_id: z.string().uuid(),
  });
  const { username, password, role_id, user_id } = registerBodySchema.parse(
    request.body,
  );

  // Validate user's role
  const findUserUseCase = makeFindUserUseCase();
  const user = await findUserUseCase.handler(user_id);
  if (!user) {
    return reply.status(404).send({ message: 'User not found' });
  }
  if (user && user.role.name !== 'admin') {
    return reply
      .status(403)
      .send({ message: 'User does not have permission to update posts' });
  }

  // Update the user
  const updateUserUseCase = makeUpdateUserUseCase();
  const userPayload: IUser = { id };
  if (username) userPayload.username = username;
  if (password) userPayload.password = password;
  if (role_id) userPayload.role_id = role_id;
  const updatedUser = await updateUserUseCase.handler(userPayload);

  return reply.status(200).send(updatedUser);
}
