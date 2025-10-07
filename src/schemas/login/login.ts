export const loginSchema = {
  description: 'Realiza o login de um usuário no sistema',
  tags: ['User'],
  body: {
    type: 'object',
    required: ['username', 'password'],
    properties: {
      username: {
        type: 'string',
        description: 'Nome de usuário',
      },
      password: {
        type: 'string',
        description: 'Senha do usuário (mínimo 6 caracteres)',
      },
    },
  },
  response: {
    200: {
      description: 'Login realizado com sucesso',
      type: 'object',
      properties: {
        id: { type: 'string', format: 'uuid' },
        username: { type: 'string' },
        role_id: { type: 'string', format: 'uuid' },
        role: {
          id: { type: 'string', format: 'uuid' },
          name: { type: 'string' },
        },
      },
    },
    401: {
      description: '',
      type: 'object',
      properties: {
        message: { type: 'string', example: 'Autenticação falhou' },
      },
    },
  },
};
