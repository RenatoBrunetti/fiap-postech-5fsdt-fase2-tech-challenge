import { FastifyReply, FastifyRequest } from 'fastify';

import { MakeFindAllPostLogsUseCase } from '@/use-cases/factories/make-find-all-post-logs';

export async function findAllPostLogs(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findAllPostLogsUseCase = MakeFindAllPostLogsUseCase();
  const postLogs = await findAllPostLogsUseCase.handler();
  return reply.status(200).send(postLogs);
}
