'use server';

export const dummyjson = async () => {
  const response = await fetch('https://dummyjson.com/posts');
  const result = await response.json();
  return result;
};
