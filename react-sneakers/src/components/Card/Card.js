import React from 'react';
import './Card.scss';

export default function Card({
  id,
  onClickAdd,
  imageUrl,
  title,
  price,
  onFavorite,
  favorited = false,
}) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onClickAdd({ imageUrl, title, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, imageUrl, title, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      <div onClick={onClickFavorite}>
        <img
          className="card__heart"
          src={isFavorite ? '/img/heart-liked.svg' : '/img/heart-unliked.svg'}
          alt="favourite"
        />
      </div>

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
