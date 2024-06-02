import React from 'react';
import ContentLoader from 'react-content-loader';
import './Card.scss';
import AppContext from '../../context';

export default function Card({
  id,
  onClickAdd,
  imageUrl,
  title,
  price,
  onFavorite,
  favorited = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  //console.log(id, title, isItemAdded(id));

  const onClickPlus = () => {
    onClickAdd({ title, price, imageUrl, id });
  };
  const onClickFavorite = () => {
    onFavorite({ title, price, imageUrl, id });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="card">
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={260}
          viewBox="0 0 150 187"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb">
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="107" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="126" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="163" rx="8" ry="8" width="80" height="24" />
          <rect x="118" y="155" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
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
              className={isItemAdded(id) ? 'card__button--checked' : 'card__button'}
              onClick={onClickPlus}>
              <img
                src={isItemAdded(id) ? '/img/btn-checked.svg' : '/img/plus.svg'}
                alt="plus"
                width={11}
                height={11}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
