export const deleteUserSchema = {
  description: 'Deleta um usuário pelo ID',
  tags: ['User'],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
        description: 'ID do usuário a ser deletado',
      },
    },
  },
  response: {
    200: {
      description: 'Usuário deletado com sucesso',
      type: 'object',
      properties: {
        message: { type: 'string', example: 'User deleted successfully' },
      },
    },
    // 404: {
    //   description: 'User não encontrado',
    //   type: 'object',
    //   properties: {
    //     message: { type: 'string', example: 'User not found' },
    //   },
    // },
  },
};
