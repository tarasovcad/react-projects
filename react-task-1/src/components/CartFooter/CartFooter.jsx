import './style.scss';
import React from 'react';

export const CartFooter = ({ total }) => {
  const { count, price } = total;
  return (
    <footer className="cart-footer">
      <div className="cart-footer__count">{count} items</div>
      <div className="cart-footer__price">{price} $</div>
    </footer>
  );
};
