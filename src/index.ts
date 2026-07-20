import {drizzle} from 'drizzle-orm'
import postgres from 'postgres'

async function main() {
  const db = drizzle('postgres-js', process.env.PUBLIC_SUPABASE_URL);
}

main();
