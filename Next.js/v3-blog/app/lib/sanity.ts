import { createClient } from 'next-sanity';

export const client = createClient({
  apiVersion: '2023-05-03',
  projectId: 'jc294wbl',
  dataset: 'production',
  useCdn: false,
  
});
