import { notFound } from 'next/navigation';
import React from 'react';

export default function BlogDetail({ params }) {
  const id = params?.id;

  return <div>Blog: {id}</div>;
}
