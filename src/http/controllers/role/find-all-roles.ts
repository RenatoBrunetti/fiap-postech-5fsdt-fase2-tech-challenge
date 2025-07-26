import { FastifyReply, FastifyRequest } from 'fastify';

import { MakeFindAllRolesUseCase } from '@/use-cases/factories/make-find-all-roles';

export async function findAllRoles(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findAllRolesUseCase = MakeFindAllRolesUseCase();
  const roles = await findAllRolesUseCase.handler();
  return reply.status(200).send(roles);
}
