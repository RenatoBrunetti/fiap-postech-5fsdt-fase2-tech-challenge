import 'reflect-metadata';
import fastify from 'fastify';

import '@/lib/typeorm/typeorm';

// Imported routes
import { userRoutes } from '@/http/controllers/user/routes';

// Export Fastify App instance
export const app = fastify();

// Registered routes
app.register(userRoutes);
