import 'reflect-metadata';
import fastify from 'fastify';

import '@/lib/typeorm/typeorm';

// Imported routes
import { postRoutes } from '@/http/controllers/post/routes';
import { postLogRoutes } from '@/http/controllers/post-log/routes';
import { roleRoutes } from '@/http/controllers/role/routes';
import { userRoutes } from '@/http/controllers/user/routes';

// Export Fastify App instance
export const app = fastify();

// Registered routes
app.register(postRoutes);
app.register(postLogRoutes);
app.register(roleRoutes);
app.register(userRoutes);
