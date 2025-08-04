export const deletePostSchema = {
  description: 'Deleta um post pelo ID',
  tags: ['Post'],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
        description: 'ID do post a ser deletado',
      },
    },
  },
  response: {
    200: {
      description: 'Post deletado com sucesso',
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Post deleted successfully' },
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
