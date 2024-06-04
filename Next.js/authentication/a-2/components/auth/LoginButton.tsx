'use client';

import { useRouter } from 'next/navigation';
interface LoginButtonProps {
  children: React.ReactNode;
  mode?: 'redirect' | 'modal';
  asChild?: boolean;
}

export default function LoginButton({ children, asChild, mode = 'redirect' }: LoginButtonProps) {
  // LoginButton
  const rounter = useRouter();
  const onClick = () => {
    rounter.push('/auth/login');
  };
  if (mode === 'modal') {
    return <span>TODO: IMPLENET </span>;
  }
  return (
    <div>
      <span onClick={onClick} className="cursor-pointer">
        {children}
      </span>
    </div>
  );
}
