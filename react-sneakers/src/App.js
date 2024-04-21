 import React from "react";
import Card from "./components/Card/Card";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";



function App() {
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false)

  React.useEffect (() => {
    fetch('https://66248cbd04457d4aaf9c6dc1.mockapi.io/items').then(res => {
      return res.json();
    })
    .then((json) => {
      // console.log(json)
      setItems(json)
    })
  }, [])

  return (
    <div className="wrapper">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      {/* {cartOpened ? <Drawer onCloseCart={() => setCartOpened(false)} /> : null} */}
      <div className="div"></div>
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content__top">
          <h1 className="content__title">All sneakers</h1>
          <form className="content__search-block">
          <input className="content__search-input" placeholder="Search..." />
          <button className="content__search-button">
            <img className="content__search-svg" src="/img/search.svg" alt="Search" width={14.24} height={14.24}/>
          </button>
        </form>
        </div>

        <div className="content__wrapper">
          {items.map((obj) => 
            <Card 
              title= {obj.title}
              price = {obj.price}
              imageUrl = {obj.imageUrl}
              onClickFavourite = {() => console.log('Add in ..')}
              onClickAdd = {() => console.log(obj)}
            />
          )}
        </div>
      </div>
    </div>
  );

}

export default App;
