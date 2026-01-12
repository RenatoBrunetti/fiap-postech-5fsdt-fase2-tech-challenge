import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeFindUserUseCase } from '@/use-cases/factories/make-find-user';
import { makeDeleteUserUseCase } from '@/use-cases/factories/make-delete-user';

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });
  const { id } = registerParamsSchema.parse(request.params);

  // Find the user to be deleted
  const findUserUseCase = makeFindUserUseCase();
  const user = await findUserUseCase.handler(id);
  if (!user) {
    return reply.status(404).send({ message: 'User not found' });
  }

  const deleteUserUseCase = makeDeleteUserUseCase();
  await deleteUserUseCase.handler(id);

  return reply.status(200).send({ message: 'User deleted successfully' });
}
