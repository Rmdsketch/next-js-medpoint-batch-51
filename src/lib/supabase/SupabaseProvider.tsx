'use client';

import { SupabaseClient } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';
import { createClient } from './client';

const SupabaseContext = createContext<SupabaseClient | undefined>(undefined);

export function useSupabaseClient(): SupabaseClient {
  const client = useContext(SupabaseContext);

  if (client === undefined) {
    throw Error('No client has been specified using Provider.');
  }

  return client;
}

interface SupabaseProviderProps {
  children: React.ReactNode,
  supabaseUrl?: string,
  supabaseKey?: string,
}

export default function SupabaseProvider({ children, supabaseUrl, supabaseKey }: SupabaseProviderProps) {
  const client = createClient(supabaseUrl, supabaseKey);

  return (
    <SupabaseContext.Provider value={client}>
      {children}
    </SupabaseContext.Provider>
  );
}
