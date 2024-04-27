import React from 'react';
import Card from './components/Card/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]); // The object by default doesn't have any items (so the cart is empty)
  const [searchValue, setsearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  // You can use Axios https://axios-http.com/
  React.useEffect(() => {
    fetch('https://66248cbd04457d4aaf9c6dc1.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        // console.log(json)
        setItems(json);
      });
  }, []);

  const onAddToCart = (obj) => {
    // setCartItems([...cartItems, obj]);
    setCartItems((prev) => [...prev, obj]);
  };

  const onChangeSeatchInput = (event) => {
    //console.log('1');
    setsearchValue(event.target.value);
  };

  const clearInput = () => {
    setsearchValue('');
  };

  //console.log(cartItems, 'cartItems');

  return (
    <div className="wrapper">
      {cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} />}
      {/* {cartOpened ? <Drawer onCloseCart={() => setCartOpened(false)} /> : null} */}
      <div className="div"></div>
      <Header onClickCart={() => setCartOpened(true)} />
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

        <div className="content__wrapper">
          {items.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onClickFavourite={() => console.log('Add in bookmarks')}
              onClickAdd={(obj) => onAddToCart(obj)}
              //onClickAdd={(obj) => onAddToCart(item)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
