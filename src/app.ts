import 'reflect-metadata';
import fastify from 'fastify';

import '@/lib/typeorm/typeorm';

// Imported routes

import { userRoutes } from '@/http/controllers/user/routes';
import { roleRoutes } from './http/controllers/role/routes';


// Export Fastify App instance
export const app = fastify();

// Registered routes

app.register(userRoutes);
app.register(roleRoutes);

