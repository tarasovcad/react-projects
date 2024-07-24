'use client';
import { useRouter } from 'next/navigation';

export default function VerifyRequest() {
  const router = useRouter();

  return (
    <div>
      <h1>Check your email</h1>
      <p>A sign in link has been sent to your email address.</p>
      <button onClick={() => router.push('/signin')}>Return to sign in</button>
    </div>
  );
}
