import { useEffect } from 'react';
import { useSupabaseClient } from '../SupabaseProvider';
import { REALTIME_LISTEN_TYPES, REALTIME_POSTGRES_CHANGES_LISTEN_EVENT, RealtimePostgresChangesFilter, RealtimePostgresChangesPayload } from '@supabase/supabase-js';

export interface UseRealtimeConfig {
  table: string;
  type: `${REALTIME_LISTEN_TYPES.BROADCAST}` | `${REALTIME_LISTEN_TYPES.PRESENCE}` | `${REALTIME_LISTEN_TYPES.POSTGRES_CHANGES}` | `${REALTIME_LISTEN_TYPES.SYSTEM}`;
  filter: RealtimePostgresChangesFilter<
    `${REALTIME_POSTGRES_CHANGES_LISTEN_EVENT.ALL}` |
    `${REALTIME_POSTGRES_CHANGES_LISTEN_EVENT.INSERT}` |
    `${REALTIME_POSTGRES_CHANGES_LISTEN_EVENT.UPDATE}` |
    `${REALTIME_POSTGRES_CHANGES_LISTEN_EVENT.DELETE}`
  >;
}

export function useRealtime<T extends { [key: string]: unknown }>(
  callback: (payload: RealtimePostgresChangesPayload<T>) => void,
  config: UseRealtimeConfig
) {
  const client = useSupabaseClient();

  useEffect(() => {
    const subscription = client
      .channel(config.table)
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      /** @ts-expect-error */
      .on(config.type, config.filter, callback)
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, [callback, client, config.filter, config.table, config.type]);
}
