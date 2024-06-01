import { client } from '@/sanity/lib/client';
async function getPosts() {
  const query = `
  *[_type == 'post'] {
    title,
    slug,
    publishedAt,
    excerpt
  }`;
  const data = await client.fetch(query);
  return data;
}
export default async function Home() {
  const posts = await getPosts();
  console.log(posts, 'posts');
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
