import React from 'react';
import { getData } from './utils/getData';

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div className="m-10 flex">
      <p>Count: {data.count}</p>
      {data.results.map((item, index) => {
        return (
          <div className="m-5 bg-fuchsia-700 min-w-28 h-full p-2" key={index}>
            <h1>Name: {item.name}</h1>
            <h2>Gender: {item.male}</h2>
            <h3>Age: {item.birth_year}</h3>
          </div>
        );
      })}

      {/* <div className="m-5 bg-fuchsia-700 min-w-28 h-full p-2">
          <h1>Name: </h1>
          <h2>Gender: </h2>
          <h3>Age: </h3>
        </div> */}
    </div>
  );
}
