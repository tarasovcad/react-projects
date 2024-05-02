import { ButtonDelete } from '../ButtonDelete/ButtonDelete';
import { Count } from '../Count/Count';
import './style.scss';
import priceFormatter from './../../utils/priceFormatter';

import React from 'react';

export const Product = ({ product, deleteProducts, increase, decrease, changeValue }) => {
  const { img, title, priceTotal, count, id } = product;

  return (
    <section className="product">
      <div className="product__img">
        <img src={`./img/products/${img}`} alt={title} />
      </div>
      <div className="product__title">{title}</div>
      <div className="product__count">
        <Count
          count={count}
          increase={increase}
          decrease={decrease}
          id={id}
          changeValue={changeValue}
        />
      </div>
      <div className="product__price">{priceFormatter.format(priceTotal)} $</div>
      <div className="product__controls">
        <ButtonDelete deleteProducts={deleteProducts} id={id} />
      </div>
    </section>
  );
};
