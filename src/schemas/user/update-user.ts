export const updateUserSchema = {
  description: 'Atualiza um usuário existente',
  tags: ['User'],
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: {
        type: 'string',
        format: 'uuid',
        description: 'ID do usuário a ser atualizado',
      },
    },
  },
  body: {
    type: 'object',
    required: ['user_id'],
    properties: {
      username: {
        type: 'string',
        description: 'Novo nome de usuário (opcional)',
      },
      password: {
        type: 'string',
        description: 'Nova senha do usuário (opcional)',
      },
      role_id: {
        type: 'string',
        format: 'uuid',
        description: 'ID do papel do usuário',
      },
      user_id: {
        type: 'string',
        format: 'uuid',
        description: 'ID do usuário que está realizando a atualização',
      },
    },
  },
  response: {
    200: {
      description: 'Usuário atualizado com sucesso',
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        username: { type: 'string' },
        password: { type: 'string' },
        role_id: { type: 'string', format: 'uuid' },
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
