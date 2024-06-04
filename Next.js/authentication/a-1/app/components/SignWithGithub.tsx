import React from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
export default function SignWithGithub() {
  return (
    <Button className="mt-5" variant="secondary">
      Login with Github <Github className="w-4 h-4 ml-4" />
    </Button>
  );
}
