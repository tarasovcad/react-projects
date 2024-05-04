import React from 'react';
import { PRODUCTS } from '../../products';
import { Product } from './Product';

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Best shop ever</h1>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
