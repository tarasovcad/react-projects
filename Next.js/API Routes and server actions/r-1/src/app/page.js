import React from 'react';
import { dummyjson } from './utils/actions/dummyjson';

export default async function page() {
  // Fetch data from the API
  const response = await dummyjson();
  console.log(response);
  return <div>{response.total}</div>;
}

// 'https://dummyjson.com/posts'
