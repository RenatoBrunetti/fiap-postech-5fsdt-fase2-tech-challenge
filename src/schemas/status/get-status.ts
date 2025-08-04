export const getStatusSchema = {
  description: 'Retorna o status do servidor',
  tags: ['Status'],
  response: {
    200: {
      description: 'Servidor está ativo',
      type: 'object',
      properties: {
        statusCode: { type: 'number' },
        status: { type: 'string' },
      },
    },
  },
};
