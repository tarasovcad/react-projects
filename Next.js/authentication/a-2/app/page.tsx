import { Poppins } from 'next/font/google';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import LoginButton from '@/components/auth/LoginButton';

const font = Poppins({ subsets: ['latin'], weight: ['600'] });
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-900">
      <div className="space-y-6 text-center">
        <h1 className={cn('text-6xl font-semibold text-white drop-shadow-md', font.className)}>
          🔐 Auth
        </h1>
        <p className="text-white text-large">A simple authentication service</p>
        <div>
          <LoginButton >
            <Button size={'lg'} variant={'secondary'}>
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
