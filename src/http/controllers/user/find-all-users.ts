import { FastifyReply, FastifyRequest } from 'fastify';

import { MakeFindAllUsersUseCase } from '@/use-cases/factories/make-find-all-users';

export async function findAllUsers(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findAllUsersUseCase = MakeFindAllUsersUseCase();
  const users = await findAllUsersUseCase.handler();
  return reply.status(200).send(users);
}
