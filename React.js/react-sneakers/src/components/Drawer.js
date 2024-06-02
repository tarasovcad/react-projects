import React from 'react';
import { Info } from './Info';
import AppContext from '../context';
import axios from 'axios';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
export function Drawer({ onClose, onRemove, items = [] }) {
  const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderCompleted, setIsOrderCompleted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('https://d4cf0dbc23d5e51d.mokky.dev/orders', {
        items: cartItems,
      });

      setOrderId(data.id);
      setIsOrderCompleted(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete('https://d4cf0dbc23d5e51d.mokky.dev/card' + item.id);
        await delay(10000);
      }
    } catch (error) {
      alert('Error while making an order: ' + error.message);
    }
    setIsLoading(false);
  };
  return (
    <div className="overlay">
      <div className="drawer">
        <div className="drawer__top">
          <h3 className="drawer__title">Cart</h3>
          <button className="close-button" onClick={onClose}>
            <img
              className="close-button__img"
              src="/img/plus.svg"
              alt="remove"
              width={11}
              height={11}
            />
          </button>
        </div>
        {items.length > 0 ? (
          <div className="wrap">
            <div className="card__items">
              {items.map((obj) => (
                <div key={obj.id} className="card__item">
                  <img
                    className="card__item-img"
                    src={obj.imageUrl}
                    alt=""
                    width="70px"
                    height="70px"
                  />
                  <div className="card__item-info">
                    <h5 className="card__item-title">{obj.title}</h5>
                    <span className="price">{obj.price} $</span>
                  </div>
                  <button className="card__item-button" onClick={() => onRemove(obj.id)}>
                    <img
                      className="card__item-close"
                      src="/img/plus.svg"
                      alt="remove"
                      width={11}
                      height={11}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <ul className="cart-total__list">
                <li className="cart-total__link">
                  <p className="cart-total__title">Total: </p>
                  <span className="dash"></span>
                  <span className="cart-total__price">{totalPrice} $</span>
                </li>
                <li className="cart-total__link">
                  <p className="cart-total__title">Tax 5%: </p>
                  <span className="dash"></span>
                  <span className="cart-total__price">{(totalPrice / 100) * 5} $</span>
                </li>
              </ul>
              <button disabled={isLoading} className="cart-total__buton" onClick={onClickOrder}>
                <span className="cart-total__button-text">Order</span>
                <img
                  className="cart-total__button-img"
                  src="/img/order-img.svg"
                  alt="order svg"
                  width="16"
                  heigh="14"
                />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderCompleted ? 'The order has been placed!' : 'The cart is empty'}
            description={
              isOrderCompleted
                ? `Your order #${orderId} will be delivered by courier soon`
                : 'Add at least one pair of sneakers to place an order.'
            }
            image={isOrderCompleted ? '/img/order-completed.svg' : '/img/empty.png'}
          />
        )}
      </div>
    </div>
  );
}
