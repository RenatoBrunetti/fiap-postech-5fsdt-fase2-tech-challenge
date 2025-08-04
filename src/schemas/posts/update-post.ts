export const updatePostSchema = {
  description: 'Atualiza um post existente',
  tags: ['Post'],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
        description: 'ID do post a ser atualizado',
      },
    },
  },
  body: {
    type: 'object',
    required: ['user_id'],
    properties: {
      title: {
        type: 'string',
        description: 'Novo título do post (opcional)',
      },
      content: {
        type: 'string',
        description: 'Novo conteúdo do post (opcional)',
      },
      user_id: {
        type: 'string',
        format: 'uuid',
        description: 'ID do usuário que está atualizando',
      },
    },
  },
  response: {
    200: {
      description: 'Post atualizado com sucesso',
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
