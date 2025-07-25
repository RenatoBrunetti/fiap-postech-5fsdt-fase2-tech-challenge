import 'reflect-metadata';
import fastify from 'fastify';

import '@/lib/typeorm/typeorm';

// Imported routes
import { roleRoutes } from './http/controllers/role/routes';

// Export Fastify App instance
export const app = fastify();

// Registered routes
app.register(roleRoutes);
