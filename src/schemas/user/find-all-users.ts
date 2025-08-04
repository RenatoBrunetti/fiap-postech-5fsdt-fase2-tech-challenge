export const findAllUsersSchema = {
  description: 'Lista todos os usuários cadastrados',
  tags: ['User'],
  response: {
    200: {
      description: 'Lista de usuários retornada com sucesso',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string', format: 'uuid' },
          username: { type: 'string' },
          role_id: { type: 'string', format: 'uuid' },
          created_at: { type: 'string', format: 'date-time' },
          updated_at: { type: 'string', format: 'date-time' },
        },
      },
    },
  },
};
