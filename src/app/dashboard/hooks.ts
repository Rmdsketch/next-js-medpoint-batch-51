import { useRealtime } from '@/lib/supabase/hooks/useRealtime';
import { Locale } from '@/i18n/config';
import { setUserLocale } from '@/actions/locale';
import Functions from '@/lib/raiden/functions';
import { SelectChangeEvent } from '@mui/material/Select';
import { RealtimePostgresChangesPayload } from '@supabase/supabase-js';

export const useDashboard = () => {
  const handleRealtime = (payload: RealtimePostgresChangesPayload<{
    [key: string]: unknown;
  }>) => {
    console.log(payload);
  };

  useRealtime(
    handleRealtime,
    {
      table: 'books',
      type: 'postgres_changes',
      filter: {
        event: '*',
        schema: 'public',
      },
    }
  );

  const callFunction = async () => {
    try {
      await Functions.post('hello', { name: 'World' });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (value: SelectChangeEvent) => {
    const locale = value.target.value as Locale;
    setUserLocale(locale);
  };

  return {
    callFunction,
    handleChange,
  };
};
