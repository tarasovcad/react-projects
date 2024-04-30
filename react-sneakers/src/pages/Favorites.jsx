import React from 'react';
import Card from '../components/Card/Card';
import AppContext from '../context';
export const Favorites = () => {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);
  return (
    <div className="content">
      <div className="content__top">
        <h1 className="content__title">My favorites items</h1>
      </div>

      <div className="content__wrapper">
        {favorites.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
            // onFavorite={(obj) => onAddToFavorite(obj)}
            // onClickAdd={(obj) => onAddToCart(obj)}
          />
        ))}
      </div>
    </div>
  );
};
