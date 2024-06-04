import { getServerSession } from 'next-auth';
import { authOptions } from './utils/auth';
import LogOutButton from './components/LogOutButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function Home() {
  /* @ts-ignore */
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10">
      <h1>Hello from index page, this is a pubic route</h1>
      {session ? (
        <div>
          <h1>you are logged in</h1>
          <LogOutButton />
        </div>
      ) : (
        <div>
          <h1>Plese log in to see someting special</h1>
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
