export const findAllPostLogsSchema = {
  description: 'Lista todos os logs de ações realizadas em posts',
  tags: ['PostLog'],
  response: {
    200: {
      description: 'Lista de logs retornada com sucesso',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          action: { type: 'string', enum: ['create', 'update', 'delete'] },
          post_id: { type: 'string', format: 'uuid' },
          user_id: { type: 'string', format: 'uuid' },
          created_at: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};
