export const findSearchPostsSchema = {
  description: 'Busca posts com base em uma palavra-chave',
  tags: ['Post'],
  querystring: {
    type: 'object',
    required: ['search'],
    properties: {
      search: {
        type: 'string',
        description: 'Termo de busca para título ou conteúdo do post',
      },
    },
  },
  response: {
    200: {
      description: 'Lista de posts encontrados',
      type: 'array',
      items: {
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
    },
  },
};
