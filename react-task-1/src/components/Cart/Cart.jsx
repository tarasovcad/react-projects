import React from 'react';
import { CartHeader } from '../CartHeader/CartHeader';
import { CartFooter } from '../CartFooter/CartFooter';
import { Product } from '../Product/Product';
import data from './../../data';

export const Cart = () => {
  const [cart, setCart] = React.useState(data);

  const deleteProducts = (id) => {
    setCart((cart) => {
      return cart.filter((product) => product.id !== id);
    });
  };

  const increase = (id) => {
    //console.log('increase', id);
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: ++product.count,
            priceTotal: product.count * product.price,
          };
        } else {
          return product;
        }
      });
    });
  };
  const decrease = (id) => {
    //console.log('decrease', id);
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          const newCount = product.count - 1 > 1 ? product.count - 1 : 1;
          return {
            ...product,
            count: newCount,
            priceTotal: newCount * product.price,
          };
        } else {
          return product;
        }
      });
    });
  };

  const changeValue = (id, value) => {
    setCart((cart) => {
      return cart.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            count: value,
            priceTotal: value * product.price,
          };
        } else {
          return product;
        }
      });
    });
  };
  const products = cart.map((product) => {
    return (
      <Product
        product={product}
        key={product.id}
        deleteProducts={deleteProducts}
        increase={increase}
        decrease={decrease}
        changeValue={changeValue}
      />
    );
  });
  return (
    <section className="cart">
      <CartHeader />
      {products}
      <CartFooter />
    </section>
  );
};
