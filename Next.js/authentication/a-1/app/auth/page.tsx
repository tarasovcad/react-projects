import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SignWithGithub from '../components/SignWithGithub';
import { getServerSession } from 'next-auth';
import { authOptions } from '../utils/auth';
import { redirect } from 'next/navigation';

export default async function AuthRoute() {
  /* @ts-ignore */
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect('/');
  }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Plese gign in</CardTitle>
          <CardDescription>To access the private page you have to be authenticated</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2">
              <Label>Email</Label>
              <Input name="email" type="email" placeholder="name@example.com" />
            </div>
            <Button className="mt-4">Login with Email</Button>

            <SignWithGithub />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
