import React from 'react';
import { CartHeader } from '../CartHeader/CartHeader';
import { CartFooter } from '../CartFooter/CartFooter';
import { Product } from '../Product/Product';
import data from './../../data';

export const Cart = () => {
  const [cart, setCart] = React.useState(data);

  const deleteProducts = (id) => {
    console.log('deleteProducts', id);
    setCart((cart) => {
      return cart.filter((product) => product.id!== id);
    });
  };
  const products = cart.map((product) => {
    return <Product product={product} key={product.id} deleteProducts={deleteProducts} />;
  });
  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};
