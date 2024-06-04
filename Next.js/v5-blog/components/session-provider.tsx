import { useUser } from '@/lib/store/user';
import { createBrowserClient } from '@supabase/ssr';
import React, { useEffect } from 'react';

export default function SessionProvider() {
    const setUser = useUser((state) => state)
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const readUserSession = async () => {
    const {data} =  await supabase.auth.getSession()
  };
  useEffect(() => {
    readUserSession();
  }, []);
  return <></>;
}
