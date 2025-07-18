import { createBrowserClient } from '@supabase/ssr';

export function createClient(supabaseUrl?: string, supabaseKey?: string) {
  return createBrowserClient(
    supabaseUrl ?? process.env.NEXT_PUBLIC_SUPABASE_URL!,
    supabaseKey ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
