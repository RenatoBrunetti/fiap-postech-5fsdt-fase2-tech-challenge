import 'reflect-metadata';
import fastify from 'fastify';

import '@/lib/typeorm/typeorm';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';

// Imported routes
import { postRoutes } from '@/http/controllers/post/routes';
import { postLogRoutes } from '@/http/controllers/post-log/routes';
import { roleRoutes } from '@/http/controllers/role/routes';
import { userRoutes } from '@/http/controllers/user/routes';

// Export Fastify App instance
export const app = fastify();

// Swagger documentation setup
app.register(fastifySwagger, {
  swagger: {
    info: {
      title: 'Documentação da API',
      description: 'Documentação da API com Swagger',
      version: '1.0.0',
    },
  },
});

app.register(fastifySwaggerUI, {
  routePrefix: '/docs',
  uiConfig: {
    docExpansion: 'list',
  },
});

// Registered routes
app.register(postRoutes);
app.register(postLogRoutes);
app.register(roleRoutes);
app.register(userRoutes);
