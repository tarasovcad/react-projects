import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import AppContext from './context';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get('https://66248cbd04457d4aaf9c6dc1.mockapi.io/card');
      const favoritesResponse = await axios.get('https://d4cf0dbc23d5e51d.mokky.dev/favorites');
      const itemsResponse = await axios.get('https://d4cf0dbc23d5e51d.mokky.dev/items');
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    console.log(obj);

    if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
      axios.delete(`https://66248cbd04457d4aaf9c6dc1.mockapi.io/card/${obj.id}`);
      setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
    } else {
      axios.post('https://66248cbd04457d4aaf9c6dc1.mockapi.io/card', obj);
      setCartItems((prev) => [...prev, obj]);
    }
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://66248cbd04457d4aaf9c6dc1.mockapi.io/card/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    console.log(obj);
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(`https://d4cf0dbc23d5e51d.mokky.dev/favorites/${obj.id}`);
        setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post('https://d4cf0dbc23d5e51d.mokky.dev/favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Error happened: ' + error);
    }
  };

  const onChangeSeatchInput = (event) => {
    //console.log('1');
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
  };
  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };
  return (
    <AppContext.Provider
      value={{
        items,
        cartItems,
        favorites,
        isItemAdded,
        onAddToFavorite,
        setCartOpened,
        setCartItems,
      }}>
      <div className="wrapper">
        {cartOpened && (
          <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
        )}
        {/* {cartOpened ? <Drawer onCloseCart={() => setCartOpened(false)} /> : null} */}
        <Header onClickCart={() => setCartOpened(true)} />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                onChangeSeatchInput={onChangeSeatchInput}
                items={items}
                cartItems={cartItems}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                onAddToFavorite={onAddToFavorite}
                onAddToCart={onAddToCart}
                clearInput={clearInput}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Outlet />
      </div>
    </AppContext.Provider>
  );
}

export default App;
