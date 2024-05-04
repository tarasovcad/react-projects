import React from 'react';

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  return (
    <div>
      <h2>{productName}</h2>
    </div>
  );
};
