import { client } from './lib/sanity';
import { simpleBlogCard } from './lib/interface';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
async function getData() {
  const query = `
  *[_type == 'blog'] | order(_createdAt asc) {
    title,
    smallDescription,
    'currentSlug': slug.current,
    titleImage
  }`;
  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data: simpleBlogCard[] = await getData();
  console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 mt-5">
      {data.map((post, index) => (
        <Card key={index}>
          <Image src={} />
        </Card>
      ))}
    </div>
  );
}
