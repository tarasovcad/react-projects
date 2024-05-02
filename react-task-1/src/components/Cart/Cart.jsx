import React from 'react';
import { CartHeader } from '../CartHeader/CartHeader';
import { CartFooter } from '../CartFooter/CartFooter';
import { Product } from '../Product/Product';

export const Cart = () => {
  return (
    <section className="cart">
      <CartHeader />

      <Product />
      {/* 
      <section className="product">
        <div className="product__img">
          <img src="./img/products/apple-watch.jpg" alt="Apple watch" />
        </div>
        <div className="product__title">Apple watch</div>
        <div className="product__count">
          <div className="count">
            <div className="count__box">
              <input type="number" className="count__input" min="1" max="100" value="1" />
            </div>
            <div className="count__controls">
              <button type="button" className="count__up">
                <img src="./img/icons/icon-up.svg" alt="Increase" />
              </button>
              <button type="button" className="count__down">
                <img src="./img/icons/icon-down.svg" alt="Decrease" />
              </button>
            </div>
          </div>
        </div>
        <div className="product__price">29 000 руб.</div>
        <div className="product__controls">
          <button type="button">
            <img src="./img/icons/cross.svg" alt="Delete" />
          </button>
        </div>
      </section>

      <section className="product">
        <div className="product__img">
          <img src="./img/products/mac-pro.jpg" alt="Mac Pro" />
        </div>
        <div className="product__title">Mac Pro</div>
        <div className="product__count">
          <div className="count">
            <div className="count__box">
              <input type="number" className="count__input" min="1" max="100" value="1" />
            </div>
            <div className="count__controls">
              <button type="button" className="count__up">
                <img src="./img/icons/icon-up.svg" alt="Increase" />
              </button>
              <button type="button" className="count__down">
                <img src="./img/icons/icon-down.svg" alt="Decrease" />
              </button>
            </div>
          </div>
        </div>
        <div className="product__price">190 000 руб.</div>
        <div className="product__controls">
          <button type="button">
            <img src="./img/icons/cross.svg" alt="Delete" />
          </button>
        </div>
      </section> */}

      <CartFooter />
    </section>
  );
};
