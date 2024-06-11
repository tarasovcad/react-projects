import React from 'react';

export default function MenuItem() {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
      <div className="text-center">
        <img className="max-h-auto max-h-24 block mx-auto" src="/pizza.png" alt="pizza" />
      </div>

      <h4 className="font-semibold my-2">Pepperni pizz</h4>
      <p className="text-gray-500 tex-sm">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, earum!
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">Add to cart $12</button>
    </div>
  );
}
