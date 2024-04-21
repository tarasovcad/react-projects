import React from 'react';
import './Card.scss';

export default function Card({ onFavourite, onClickAdd, imageUrl, title, price }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    onClickAdd();
    setIsAdded(!isAdded);
  };

  return (
    <div className="card">
      <img
        className="card__heart"
        src="/img/heart-unliked.svg"
        alt="favourite"
        onClick={onFavourite}
      />
      <img src={imageUrl} alt="" width={133} height={112} />
      <h5 className="card__title">{title}</h5>
      <div className="card__bottom">
        <div>
          <p className="card__text">Price:</p>
          <b className="card__price price price">{price} $</b>
        </div>
        <button
          className={isAdded ? 'card__button--checked' : 'card__button'}
          onClick={onClickPlus}>
          <img
            src={isAdded ? '/img/btn-checked.svg' : '/img/plus.svg'}
            alt="plus"
            width={11}
            height={11}
          />
        </button>
      </div>
    </div>
  );
}
