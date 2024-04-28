import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card/Card';
import { Header } from './components/Header';
import { Drawer } from './components/Drawer';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  // You can use Axios https://axios-http.com/
  React.useEffect(() => {
    // fetch('https://66248cbd04457d4aaf9c6dc1.mockapi.io/items')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => {
    //     // console.log(json)
    //     setItems(json);
    //   });

    axios.get('https://d4cf0dbc23d5e51d.mokky.dev/items').then((res) => {
      setItems(res.data);
    });
    axios.get('https://d4cf0dbc23d5e51d.mokky.dev/card').then((res) => {
      setCartItems(res.data);
    });
    axios.get('https://d4cf0dbc23d5e51d.mokky.dev/favorites').then((res) => {
      setFavorites(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://d4cf0dbc23d5e51d.mokky.dev/card', obj);
    // setCartItems([...cartItems, obj]);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    console.log(id);
    axios.delete(`https://d4cf0dbc23d5e51d.mokky.dev/card/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    console.log(obj);
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(`https://d4cf0dbc23d5e51d.mokky.dev/favorites/${obj.id}`);
      setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post('https://d4cf0dbc23d5e51d.mokky.dev/favorites', obj);
      setFavorites((prev) => [...prev, obj]);
    }
  };

  const onChangeSeatchInput = (event) => {
    //console.log('1');
    setSearchValue(event.target.value);
  };

  const clearInput = () => {
    setSearchValue('');
  };

  return (
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
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              onAddToFavorite={onAddToFavorite}
              onAddToCart={onAddToCart}
              clearInput={clearInput}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites items={favorites} onAddToFavorite={onAddToFavorite} />}
        />
      </Routes>
      <Outlet />
    </div>
  );
}

export default App;
