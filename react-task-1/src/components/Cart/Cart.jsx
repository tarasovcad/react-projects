import React from 'react';
import { CartHeader } from '../CartHeader/CartHeader';
import { CartFooter } from '../CartFooter/CartFooter';
import { Product } from '../Product/Product';
import data from './../../data';

export const Cart = () => {
  const [cart, setCart] = React.useState(data);
  const products = cart.map((product) => {
    return <Product product={product} key={product.id} />;
  });
  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};
