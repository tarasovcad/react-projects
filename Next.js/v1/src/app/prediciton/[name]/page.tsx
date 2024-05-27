interface Params {
  params: {name: string}
}

export default function Page({ params }: Params)  {
  return (
    <div>
      <h1>predicion</h1>
      {params.name}
    </div>
  );
};
