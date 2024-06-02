import React from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context';

export function Header(props) {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  return (
    <header className="header">
      <Link to="/">
        <div className="header__left">
          <img className="header__left-img" src="/img/logo.png" alt="#" width={40} height={40} />
          <div className="header__left-info">
            <h3 className="header__left-title">React Sneakers</h3>
            <p className="header__left-descr">The best sneakers's store</p>
          </div>
        </div>
      </Link>

      <ul className="header__right">
        <li className="header__right-card" onClick={props.onClickCart}>
          <img className="header__right-img" src="/img/cart.svg" alt="image" />
          <span className="header__right-cardtext header__right-cardtext--active">
            {totalPrice} $
          </span>
        </li>
        <li className="header__right-card">
          <Link className="header__right-link" to="/favorites">
            <img className="header__right-img" src="/img/heart.svg" alt="image" />
            <span className="header__right-cardtext">Favorites</span>
          </Link>
        </li>
        <li className="header__right-user">
          <img className="header__right-img" src="/img/user.svg" alt="image" />
          <span className="header__right-usertext">User</span>
        </li>
      </ul>
    </header>
  );
}
