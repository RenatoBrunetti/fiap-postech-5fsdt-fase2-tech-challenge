import 'dotenv/config';

import { z } from 'zod';

const envSchema = z.object({
  ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(3000),
});

const envParse = envSchema.safeParse(process.env);
if (!envParse.success) {
  console.error('Invalid environment variables:', envParse.error.format());
  throw new Error('Invalid environment variables');
}

export const env = envParse.data;
