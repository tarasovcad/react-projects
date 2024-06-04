'use client';
import React from 'react';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';
import { Button } from '../ui/button';

export default function social() {
  return (
    <div className="flex items-center w-full gap-x-2">
      <Button size="lg" variant="outline" className="w-full">
        <FcGoogle className='h-5 w-5'/>
      </Button>
      <Button size="lg" variant="outline" className="w-full">
        <FaGithub className='h-5 w-5'/>
      </Button>
    </div>
  );
}
