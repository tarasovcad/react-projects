import React from 'react';
import UserTabs from '../components/layout/UsersTabs';

export default function page() {
  return (
    <section className="mt-8 max-w-lg mx-auto">
      <UserTabs isAdmin={true} />
    </section>
  );
}
