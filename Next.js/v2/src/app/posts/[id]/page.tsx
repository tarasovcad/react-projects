export default async function Page({ params }: { params: { id: string } }) {
  
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const data = await response.json();
  const { title, body } = data;
  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold">{title}</h1>
      <p className="max-w-[700px] mx-auto">{body}</p>
    </main>
  );
}
