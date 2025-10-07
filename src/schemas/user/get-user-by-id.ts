export const findUserSchema = {
  description: 'Busca um usuário pelo ID',
  tags: ['User'],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
        description: 'ID do usuário',
      },
    },
  },
  response: {
    200: {
      description: 'Usuário encontrado com sucesso',
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        username: { type: 'string' },
        password: { type: 'string' },
        role_id: { type: 'string', format: 'uuid' },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' },
        role: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
        },
      },
    },
    // 404: {
    //   description: 'Post não encontrado',
    //   type: 'object',
    //   properties: {
    //     message: { type: 'string', example: 'Post not found' },
    //   },
    // },
  },
};
