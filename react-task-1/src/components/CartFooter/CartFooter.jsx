import './style.scss';
import React from 'react';
import priceFormatter from './../../utils/priceFormatter';

export const CartFooter = ({ total }) => {
  const { count, price } = total;
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} items</div>
      <div className="cart-footer__price">{priceFormatter.format(price)} $</div>
    </footer>
  );
};
