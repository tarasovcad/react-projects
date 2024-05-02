import { ButtonDelete } from '../ButtonDelete/ButtonDelete';
import { Count } from '../Count/Count';
import './style.scss';

import React from 'react';

export const Product = ({ product }) => {
  const { img, title, price, count, id } = product;
  console.log(product, 'Product');
  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">{/* <Count /> */}</div>
      <div className="product__price">{price} руб.</div>
      <div className="product__controls">
        <ButtonDelete />
      </div>
    </section>
  );
};
