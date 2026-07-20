import 'dotenv/config';
import {defineConfig} from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/db/shema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.PUBLIC_SUBABASE_URL!,
  },
});
