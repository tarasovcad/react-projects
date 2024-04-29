import React from 'react';
import Card from '../components/Card/Card';
export const Home = ({
  onChangeSeatchInput,
  items,
  setSearchValue,
  searchValue,
  onAddToFavorite,
  onAddToCart,
  clearInput,
  cartItems,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    return (isLoading ? [...Array(12)] : filteredItems).map((item, index) => (
      <Card
        key={index}
        onFavorite={(obj) => onAddToFavorite(obj)}
        onClickAdd={(obj) => onAddToCart(obj)}
        added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        loading={isLoading}
        {...item}

        //onClickAdd={(obj) => onAddToCart(item)}
      />
    ));
  };
  return (
    <div className="content">
      <div className="content__top">
        <h1 className="content__title">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'All sneakers'}
        </h1>
        <form className="content__search-block">
          {searchValue && (
            <button className="close-button clear" onClick={clearInput}>
              <img
                className="close-button__img clear__img"
                src="/img/plus.svg"
                alt="remove"
                width={11}
                height={11}
              />
            </button>
          )}
          <input
            value={searchValue}
            className="content__search-input"
            placeholder="Search..."
            onChange={onChangeSeatchInput}
          />
          <button className="content__search-button">
            <img
              className="content__search-svg"
              src="/img/search.svg"
              alt="Search"
              width={14.24}
              height={14.24}
            />
          </button>
        </form>
      </div>
      <div className="content__wrapper">{renderItems()}</div>
    </div>
  );
};
