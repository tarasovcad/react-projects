import { getServerSession } from 'next-auth';
import { useSession } from 'next-auth/react';
import React from 'react';

const Services = async () => {
  const session = await getServerSession();
  const email = session?.user?.email;
  
  return (
    <div>
      <h1>you can see this title below only if you are sign in</h1>
      <h1>
        Password: <span>{email && 'fklsjdhk23hkhwef18cb'}</span>
      </h1>
    </div>
  );
};

export default Services;
