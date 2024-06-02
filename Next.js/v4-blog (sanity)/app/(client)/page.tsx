import { client } from '@/sanity/lib/client';
import Header from '../components/Header';
import { Post } from '../utils/interface';
import PostComponent from '../components/PostComponent';
async function getPosts() {
  const query = `
  *[_type == 'post'] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    tags[]->{
      _id,
      slug,
      name
    }
  }`;
  const data = await client.fetch(query);
  return data;
}
export const revalidate = 60; // VERY VERY IMPORTANT

export default async function Home() {
  const posts: Post[] = await getPosts();
  return (
    <div>
      <Header title="Articles" tags />
      <div>
        {posts?.length > 0 && posts?.map((post) => <PostComponent key={post._id} post={post} />)}
      </div>
    </div>
  );
}
