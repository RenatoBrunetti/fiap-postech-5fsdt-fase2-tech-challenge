export const findPostSchema = {
  description: 'Busca um post pelo ID',
  tags: ['Post'],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
        description: 'ID do post',
      },
    },
  },
  response: {
    200: {
      description: 'Post encontrado com sucesso',
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        title: { type: 'string' },
        content: { type: 'string' },
        user_id: { type: 'string', format: 'uuid' },
        created_at: { type: 'string', format: 'date-time' },
        updated_at: { type: 'string', format: 'date-time' },
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
