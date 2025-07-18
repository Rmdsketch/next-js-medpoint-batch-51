import { createClient } from '@/lib/supabase/client';

const Functions = {
  post: async (
    name: string,
    data:
      | string
      | File
      | Blob
      | ArrayBuffer
      | FormData
      | ReadableStream<Uint8Array>
      | Record<string, string | number | boolean | object>
      | undefined
  ) => {
    const supabase = createClient();
    const { data: result, error } = await supabase.functions.invoke(name, {
      body: data,
    });

    if (error) throw new Error(`Error : ${error.message}`);
    return result;
  },
};

export default Functions;
