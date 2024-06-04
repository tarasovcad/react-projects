import { getServerSession } from 'next-auth';
import { authOptions } from './utils/auth';

export default async function Home() {
  /* @ts-ignore */
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10">
      <h1>Hello from index page, this is a pubic route</h1>
      {session ? <h1>you are logged in</h1> : <h1>Plese log in to see someting special</h1>}
    </div>
  );
}
