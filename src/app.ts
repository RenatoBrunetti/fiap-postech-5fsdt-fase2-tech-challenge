import 'reflect-metadata';
import fastify from 'fastify';
import fastifyHealthcheck from 'fastify-healthcheck';
import fastifyMetrics from 'fastify-metrics';
import fastifySwagger from '@fastify/swagger';
import fastifySwaggerUI from '@fastify/swagger-ui';
import fastifyCors from '@fastify/cors';

// Database ORM
import '@/lib/typeorm/typeorm';

// Imported routes
import { postRoutes } from '@/http/controllers/post/routes';
import { postLogRoutes } from '@/http/controllers/post-log/routes';
import { roleRoutes } from '@/http/controllers/role/routes';
import { userRoutes } from '@/http/controllers/user/routes';

// Imported schemas
import { getStatusSchema } from '@/schemas/status/get-status';

// Export Fastify App instance
export const app = fastify();

// CORS setup
app.register(fastifyCors, {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
});

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

// Register healthcheck plugin
app.register(fastifyHealthcheck, { healthcheckUrl: '/status' });
app.addHook('onRoute', (routeOptions) => {
  if (routeOptions.url === '/status') {
    routeOptions.schema ??= getStatusSchema;
  }
});

// Register metrics plugin
app.register(fastifyMetrics, { endpoint: '/metrics' });
app.addHook('onRoute', (routeOptions) => {
  if (routeOptions.url === '/metrics') {
    routeOptions.schema ??= {};
    routeOptions.schema.hide = true;
  }
});
