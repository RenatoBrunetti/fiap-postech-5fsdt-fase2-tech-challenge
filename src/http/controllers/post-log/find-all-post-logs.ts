import { FastifyReply, FastifyRequest } from 'fastify';

import { makeFindAllPostLogsUseCase } from '@/use-cases/factories/make-find-all-post-logs';

export async function findAllPostLogs(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const findAllPostLogsUseCase = makeFindAllPostLogsUseCase();
  const postLogs = await findAllPostLogsUseCase.handler();
  return reply.status(200).send(postLogs);
}
