export const createPostSchema = {
  description: 'Cria um novo post',
  tags: ['Post'],
  body: {
    type: 'object',
    required: ['title', 'content', 'user_id'],
    properties: {
      title: { type: 'string' },
      content: { type: 'string' },
      user_id: { type: 'string', format: 'uuid' },
    },
  },
  response: {
    201: {
      description: 'Post criado com sucesso',
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Post created successfully' },
      },
    },
  },
};
