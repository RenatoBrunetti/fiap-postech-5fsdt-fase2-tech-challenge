export const createUserSchema = {
  description: 'Cria um novo usuário no sistema',
  tags: ['User'],
  body: {
    type: 'object',
    required: ['username', 'password', 'role_id'],
    properties: {
      username: {
        type: 'string',
        description: 'Nome de usuário',
      },
      password: {
        type: 'string',
        minLength: 6,
        description: 'Senha do usuário (mínimo 6 caracteres)',
      },
      role_id: {
        type: 'string',
        format: 'uuid',
        description: 'ID da role associada ao usuário',
      },
    },
  },
  response: {
    201: {
      description: 'Usuário criado com sucesso',
      type: 'object',
      properties: {
        message: { type: 'string', example: 'User created successfully' },
      },
    },
    // 400: {
    //   description: 'Erro de validação',
    //   type: 'object',
    //   properties: {
    //     message: { type: 'string', example: 'Validation error' },
    //   },
    // },
  },
};
