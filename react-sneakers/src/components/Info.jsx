import React from 'react';
import AppContext from '../context';

export const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cart__empty">
      <img className="cart__empty-img" src={image} alt="empty" />
      <h2 className="cart__empty-title">{title}</h2>
      <p className="cart__empty-text">{description}</p>
      <button className="cart__empty-button" onClick={() => setCartOpened(false)}>
        <img
          className="cart__empty-buttonImg"
          src="/img/arrow.svg"
          alt="arrow"
          width={14}
          height={12}
        />
        Go back
      </button>
    </div>
  );
};
