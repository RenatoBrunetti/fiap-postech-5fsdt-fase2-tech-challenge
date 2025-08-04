export const findAllRolesSchema = {
  description: 'Lista todas as roles disponíveis no sistema',
  tags: ['Role'],
  response: {
    200: {
      description: 'Lista de roles retornada com sucesso',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
          description: { type: 'string' },
          created_at: { type: 'string', format: 'date-time' },
          updated_at: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};
